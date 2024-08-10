import { WorkingPerson, Task } from "@/types"

interface TaskDistributionProps {
  assignments: WorkingPerson[]
}

const TaskDistribution = ({ assignments }: TaskDistributionProps) => {
  return (
    <div className="flex flex-wrap min-h-screen items-center justify-between p-24">
      {assignments.map((assignment) => (
        <div key={assignment.name} className="m-1 p-3 w-50 bg-slate-700">
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
  )
}

export default TaskDistribution
