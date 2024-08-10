import { Person, Task, WorkDay } from "@/types"
import Day from "./day"

interface ScheduleProps {
  workWeek: WorkDay[]
  tasks: Task[]
  people: Person[]
}

const Schedule = ({ workWeek, tasks, people }: ScheduleProps) => {
  return (
    <div className="py-12">
      {workWeek.map((day) => (
        <Day key={day.name} day={day} tasks={tasks} people={people} />
      ))}
    </div>
  )
}

export default Schedule
