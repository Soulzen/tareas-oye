export interface Task {
  id: number
  name: string
  weight: number
  timesPerWeek: number
}

export interface Person {
  name: string
  lastWeekWork: number
}

export interface Assignment {
  person: string
  tasks: Task[]
}

export interface WorkingPerson {
  name: string
  lastWeekWork: number
  tasks: Task[]
  currentWeight: number
}
