import { Person, Task, WorkingPerson, Day } from "../types"
import { people, tasks, week } from "@/data/constants"

export const assignTasks = (): WorkingPerson[] => {
  const workingPeople: WorkingPerson[] = people
    .map((person) => ({
      ...person,
      tasks: [],
      currentWeight: person.lastWeekWork
    }))
    // .sort((a, b) => a.lastWeekWork - b.lastWeekWork)
    // .slice(0, 10)
    .sort((a, b) => Math.random() - 0.5)

  const tasksToAssign = tasks
    .map((task) => ({ ...task, timesLeft: getTaskFrequency(task, week) }))
    .sort((a, b) => b.weight - a.weight)

  // Assign tasks to the working people
  tasksToAssign.forEach((task) => {
    while (task.timesLeft > 0) {
      workingPeople.sort((a, b) => a.currentWeight - b.currentWeight)
      workingPeople[0].tasks.push(task)
      workingPeople[0].currentWeight += task.weight
      task.timesLeft--
    }
  })

  console.log(workingPeople)

  // Calculate the diference to the average time worked
  const averageTime =
    workingPeople.reduce((acc, person) => acc + person.currentWeight, 0) /
    workingPeople.length

  const deviation = workingPeople.map((person) => ({
    id: person.id,
    name: person.name,
    deviation: person.currentWeight - averageTime
  }))

  console.log(deviation)
  return workingPeople
}

// gets the amount of times per week a task needs to be done
export const getTaskFrequency = (task: Task, week: Day[]): number => {
  return week.reduce(
    (acc, day) => (day.tasks.includes(task.id) ? acc + 1 : acc),
    0
  )
}
