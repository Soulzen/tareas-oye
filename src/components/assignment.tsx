import { WorkingPerson, Task } from "@/types"

interface AssignmeetProps {
  assignment: WorkingPerson
}

const Assignmeet = ({ assignment }: AssignmeetProps) => {
  return (
    <div className="p-2 w-50 bg-slate-700 rounded-xl basis-40 flex-1">
      <h2 className="capitalize mb-3 text-lg font-bold">{assignment.name}</h2>
      <ul>
        <li className="my-1 py-1 capitalize text-sm">
          Last Week Deviation {parseFloat(assignment.lastWeekWork.toFixed(2))}{" "}
          min
        </li>
        {assignment.tasks.map((task: Task) => (
          <li key={task.id} className="my-1 py-1 capitalize text-sm">
            {task.name} {task.weight} min
          </li>
        ))}
      </ul>
      <p className="mt-2 text-slate-400 text-lg">
        {assignment.currentWeight} min
      </p>
    </div>
  )
}

export default Assignmeet
