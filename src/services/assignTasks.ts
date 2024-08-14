import { Person, Task, WorkingPerson, Day } from "../types"
// import { people, tasks, week } from "@/data/constants"
import {
  getPeople,
  getTasks,
  getWeek,
  writeAssignments,
  writeAssignments2
} from "./dbInterface"

export const assignTasks = async (): Promise<WorkingPerson[]> => {
  const people = (await getPeople()) as Person[]
  const tasks = (await getTasks()) as Task[]
  const week = (await getWeek()) as Day[]

  const workingPeople: WorkingPerson[] = people.map((person) => ({
    ...person,
    tasks: [],
    currentWeight: person.lastWeekWork,
    deviation: 0
  }))
  // .sort((a, b) => a.lastWeekWork - b.lastWeekWork)
  // .slice(0, 10)
  // .sort((a, b) => Math.random() - 0.5)

  const tasksToAssign = tasks
    .map((task) => ({ ...task, timesLeft: getTaskFrequency(task, week) }))
    .sort((a, b) => b.weight - a.weight)

  const averageTime =
    tasksToAssign.reduce((acc, task) => acc + task.weight * task.timesLeft, 0) /
    workingPeople.length

  // Assign tasks to the working people
  tasksToAssign.forEach((task) => {
    while (task.timesLeft > 0) {
      workingPeople.sort((a, b) => a.currentWeight - b.currentWeight)
      workingPeople[0].tasks.push(task)
      workingPeople[0].currentWeight += task.weight
      task.timesLeft--
    }
  })

  const deviation = workingPeople.map((person) => ({
    ...person,
    deviation: averageTime - person.currentWeight
  }))

  writeAssignments2(deviation)
  return deviation
}

// gets the amount of times per week a task needs to be done
export const getTaskFrequency = (task: Task, week: Day[]): number => {
  return week.reduce(
    (acc, day) => (day.tasks.includes(task.id) ? acc + 1 : acc),
    0
  )
}
