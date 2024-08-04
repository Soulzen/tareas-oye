import { assignTasks } from "@/services/assignTasks"
import { Task } from "@/types"
import { people, tasks } from "@/data/constants"

export default function Home() {
  const assignments = assignTasks(tasks, people)
  return (
    <main>
      <h1>Hello World!</h1>
      <div className="flex flex-wrap min-h-screen items-center justify-between p-24">
        {assignments.map((assignment) => (
          <div key={assignment.name} className="p-3 w-50 bg-slate-700">
            <h2>{assignment.name}</h2>
            <ul>
              {assignment.tasks.map((task: Task) => (
                <li key={task.id}>
                  {task.name} {task.weight}min
                </li>
              ))}
            </ul>
            <p>{assignment.currentWeight}min</p>
          </div>
        ))}
      </div>
    </main>
  )
}
