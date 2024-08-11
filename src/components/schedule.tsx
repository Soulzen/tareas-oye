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
      <h2 className="text-center text-2xl font-semibold">Schedule</h2>
      <div className="lg:flex">
        {workWeek.map((day) => (
          <Day key={day.name} day={day} tasks={tasks} people={people} />
        ))}
      </div>
    </div>
  )
}

export default Schedule
