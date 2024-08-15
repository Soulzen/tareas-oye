"use server"

import prisma from "@/lib/db"
import { Day, Task, WorkingPerson } from "@/types"
import { Prisma } from "@prisma/client"

export const assignTasksToPeople = async () => {
  const people = await prisma.people.findMany({ where: { active: true } })
  const tasks = await prisma.tasks.findMany()
  const week = await prisma.days.findMany({ include: { tasks: true } })

  const assignments: WorkingPerson[] = people.map((person) => ({
    ...person,
    lastWeekWork: person.last_week_work,
    tasks: [],
    currentWeight: person.last_week_work,
    deviation: 0
  }))

  const tasksToAssign = tasks
    .map((task) => ({
      ...task,
      timesLeft: week.reduce(
        (acc, day) =>
          day.tasks.map((task) => task.id).includes(task.id) ? acc + 1 : acc,
        0
      )
    }))
    .sort((a, b) => b.weight - a.weight)

  const averageTime =
    tasksToAssign.reduce((acc, task) => acc + task.weight * task.timesLeft, 0) /
    assignments.length

  // Assign tasks to the working people
  tasksToAssign.forEach((task) => {
    while (task.timesLeft > 0) {
      const candidate = assignments.sort(
        (a, b) => a.currentWeight - b.currentWeight
      )[0]
      candidate.tasks.push(task)
      candidate.currentWeight += task.weight
      task.timesLeft--
    }
  })

  const deviation: WorkingPerson[] = assignments.map((person) => ({
    ...person,
    deviation: averageTime - person.currentWeight
  }))

  console.log(deviation)

  const peopleWithTasks: Prisma.assignmentsCreateInput[] = deviation.map(
    (designatedPerson) => {
      return {
        current_weight: designatedPerson.currentWeight,
        deviation: designatedPerson.deviation,
        person: {
          connect: { id: designatedPerson.id }
        },
        tasks: {
          connect: designatedPerson.tasks.map((task) => ({ id: task.id }))
        }
      }
    }
  )

  console.log(peopleWithTasks)

  try {
    for (const person of peopleWithTasks) {
      await prisma.assignments.create({ data: person })
    }
  } catch (e) {
    console.error(e)
  }
}
