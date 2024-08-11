import { Task, Person, Day } from "../types"

export const tasks: Task[] = [
  { id: 1, name: "wipe counters", weight: 2 },
  { id: 2, name: "kitchen floor", weight: 15 },
  { id: 3, name: "empty bins", weight: 5 },
  { id: 4, name: "empty dishwasher", weight: 5 },
  { id: 5, name: "laundry room", weight: 15 },
  { id: 6, name: "entrance, corridor and stairs", weight: 20 },
  { id: 7, name: "inside bins", weight: 8 },
  { id: 8, name: "oven", weight: 12 },
  { id: 9, name: "extraction and fridge doors", weight: 10 }
]

export const week: Day[] = [
  { id: 1, name: "Monday", tasks: [1, 2, 3, 4] },
  { id: 2, name: "Tuesday", tasks: [5, 6, 3, 4] },
  { id: 3, name: "Wednesday", tasks: [1, 7, 3, 4] },
  { id: 4, name: "Thursday", tasks: [2, 3, 4] },
  { id: 5, name: "Friday", tasks: [6, 3, 4] },
  { id: 6, name: "Saturday", tasks: [1, 8, 3, 4] },
  { id: 7, name: "Sunday", tasks: [9, 3, 4] }
]

export const people: Person[] = [
  { id: 1, name: "Anja", lastWeekWork: 0 },
  { id: 2, name: "Julia", lastWeekWork: 0 },
  { id: 3, name: "Luca", lastWeekWork: 0 },
  { id: 4, name: "Alexandra", lastWeekWork: 0 },
  { id: 5, name: "Marek", lastWeekWork: 0 },
  { id: 6, name: "Agustin", lastWeekWork: 0 },
  { id: 7, name: "Mathias", lastWeekWork: 0 },
  // { id: 8, name: "Magnus", lastWeekWork: 0 },
  { id: 9, name: "Maka", lastWeekWork: 0 },
  { id: 10, name: "Stein", lastWeekWork: 0 },
  { id: 11, name: "Andrei", lastWeekWork: 0 },
  { id: 12, name: "Alberto", lastWeekWork: 0 },
  { id: 13, name: "Luisina", lastWeekWork: 0 },
  { id: 14, name: "Alexandre", lastWeekWork: 0 }
]
