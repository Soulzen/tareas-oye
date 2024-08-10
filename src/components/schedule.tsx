import { Person, Task, WorkDay } from "@/types"

interface ScheduleProps {
  workWeek: WorkDay[]
  tasks: Task[]
  people: Person[]
}

const Schedule = ({ workWeek, tasks, people }: ScheduleProps) => {
  return (
    <div className="flex min-h-screen items-center justify-between p-12">
      {workWeek.map((day) => (
        <div key={day.name} className="p-3 m-1 w-50 bg-slate-700">
          <h2>{day.name}</h2>
          <ul>
            {day.assignedTasks.map((task) => (
              <li key={task.task}>
                <p>{tasks.find((t) => t.id === task.task)?.name}</p>
                <p>{people.find((p) => p.id === task.person)?.name}</p>
              </li>
            ))}
          </ul>
        </div>
      ))}
    </div>
  )
}

export default Schedule
