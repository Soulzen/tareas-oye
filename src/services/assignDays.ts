import { WorkingPerson, Day, WorkDay } from "@/types"

// Returns an array of WorkDays with the assigned tasks by checking the tasks of the array of Days and assigning them to the WorkingPeople that have them pending on the week
export const assignDays = (
  week: Day[],
  workingPeople: WorkingPerson[]
): WorkDay[] => {
  const workDays: WorkDay[] = week.map((day) => ({
    id: day.id,
    name: day.name,
    assignedTasks: []
  }))

  week.forEach((day) => {
    day.tasks.forEach((taskId) => {
      const availablePerson = workingPeople.find((person) => {
        return person.tasks.some((task) => task.id === taskId)
      })
      if (availablePerson) {
        workDays[day.id - 1].assignedTasks.push({
          task: taskId,
          person: availablePerson.id
        })
        // Find the index of the first occurrence of the task with the specified taskId
        const taskIndex = availablePerson.tasks.findIndex(
          (task) => task.id === taskId
        )

        // If the task is found, remove it using splice
        if (taskIndex !== -1) {
          availablePerson.tasks.splice(taskIndex, 1)
        }
      }
    })
  })
  console.log(workDays)
  return workDays
}
