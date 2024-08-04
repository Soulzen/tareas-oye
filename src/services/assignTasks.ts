import { Person, Task, WorkingPerson } from "../types"

export const assignTasks = (
  tasks: Task[],
  people: Person[]
): WorkingPerson[] => {
  // Divide the people between 10 working persons and 4 resting persons depending on the last week work
  const workingPeople: WorkingPerson[] = people
    .map((person) => ({ ...person, tasks: [], currentWeight: 0 }))
    .sort((a, b) => a.lastWeekWork - b.lastWeekWork)
    .slice(0, 10)
    .sort((a, b) => Math.random() - 0.5)

  const tasksToAssign = tasks
    .map((task) => ({ ...task, timesLeft: task.timesPerWeek }))
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
  return workingPeople
}
