import { Task, Person } from "../types"

export const tasks: Task[] = [
  { id: 1, name: "wipe counters", weight: 2, timesPerWeek: 3 },
  { id: 2, name: "kitchen floor", weight: 15, timesPerWeek: 2 },
  { id: 3, name: "empty bins", weight: 5, timesPerWeek: 7 },
  { id: 4, name: "empty dishwasher", weight: 5, timesPerWeek: 7 },
  { id: 5, name: "laundry room", weight: 15, timesPerWeek: 1 },
  { id: 6, name: "entrance, corridor and stairs", weight: 20, timesPerWeek: 2 },
  { id: 7, name: "inside bins", weight: 8, timesPerWeek: 1 },
  { id: 8, name: "oven", weight: 12, timesPerWeek: 1 },
  { id: 9, name: "extraction and fridge doors", weight: 10, timesPerWeek: 1 }
]

export const people: Person[] = [
  { name: "Alberto", lastWeekWork: 0 },
  { name: "Maka", lastWeekWork: 0 },
  { name: "Luca", lastWeekWork: 0 },
  { name: "Anja", lastWeekWork: 0 },
  { name: "Marek", lastWeekWork: 0 },
  { name: "Agustin", lastWeekWork: 0 },
  { name: "Mathias", lastWeekWork: 0 },
  { name: "Magnus", lastWeekWork: 0 },
  { name: "Julia", lastWeekWork: 0 },
  { name: "Stein", lastWeekWork: 0 },
  { name: "Andrei", lastWeekWork: 0 },
  { name: "Alexandra", lastWeekWork: 0 },
  { name: "Luisina", lastWeekWork: 0 },
  { name: "Alexandre", lastWeekWork: 0 }
]
