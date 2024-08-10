import { Person, Task, WorkingPerson, Day } from "../types"

export const assignTasks = (
  tasks: Task[],
  people: Person[],
  week: Day[]
): WorkingPerson[] => {
  const workingPeople: WorkingPerson[] = people
    .map((person) => ({ ...person, tasks: [], currentWeight: 0 }))
    .sort((a, b) => a.lastWeekWork - b.lastWeekWork)
    // .slice(0, 10)
    .sort((a, b) => Math.random() - 0.5)

  const tasksToAssign = tasks
    .map((task) => ({ ...task, timesLeft: getTaskFrequency(task, week) }))
    .sort((a, b) => b.weight - a.weight)

  // Assign tasks to the working people
  tasksToAssign.forEach((task) => {
    while (task.timesLeft > 0) {
      workingPeople.sort(
        (a, b) =>
          a.currentWeight + a.lastWeekWork - (b.currentWeight + b.lastWeekWork)
      )
      workingPeople[0].tasks.push(task)
      workingPeople[0].currentWeight += task.weight
      task.timesLeft--
    }
  })

  console.log(workingPeople)
  return workingPeople
}

// gets the amount of times per week a task needs to be done
export const getTaskFrequency = (task: Task, week: Day[]): number => {
  return week.reduce(
    (acc, day) => (day.tasks.includes(task.id) ? acc + 1 : acc),
    0
  )
}
