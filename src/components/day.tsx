import { Person, Task, WorkDay } from "@/types"

interface DayProps {
  day: WorkDay
  tasks: Task[]
  people: Person[]
}

const Day = ({ day, tasks, people }: DayProps) => {
  return (
    <div className="p-3 m-1 w-50 bg-slate-700 rounded-xl lg:basis-full">
      <h2 className="capitalize mb-5 text-2xl font-bold">{day.name}</h2>
      <ul>
        {day.assignedTasks.map((task) => (
          <li className="my-2 py-2" key={task.task}>
            <p className="capitalize">
              {tasks.find((t) => t.id === task.task)?.name}
            </p>
            <p className="capitalize text-slate-300">
              {people.find((p) => p.id === task.person)?.name}
            </p>
          </li>
        ))}
      </ul>
    </div>
  )
}

export default Day
