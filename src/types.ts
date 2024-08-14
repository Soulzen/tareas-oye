export interface Task {
  id: number
  name: string
  weight: number
}

export interface Person {
  id: number
  name: string
  lastWeekWork: number
}

export interface BaseDay {
  id: number
  name: string
}

export interface Day extends BaseDay {
  tasks: number[]
}

export interface Assignment {
  person: string
  tasks: Task[]
}

export interface WorkingPerson extends Person {
  tasks: Task[]
  currentWeight: number
  deviation: number
}

export interface WorkDay extends BaseDay {
  assignedTasks: assignedTask[]
}

export interface assignedTask {
  task: number
  person: number
}
