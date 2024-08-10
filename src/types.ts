export interface Task {
  id: number
  name: string
  weight: number
  timesPerWeek: number
}

export interface Person {
  id: number
  name: string
  lastWeekWork: number
}

export interface Day {
  id: number
  name: string
  tasks: number[]
}

export interface Assignment {
  person: string
  tasks: Task[]
}

export interface WorkingPerson extends Person {
  tasks: Task[]
  currentWeight: number
}

export interface WorkDay {
  id: number
  name: string
  assignedTasks: assignedTask[]
}

export interface assignedTask {
  task: number
  person: number
}
