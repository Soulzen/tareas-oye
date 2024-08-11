import { WorkingPerson, Task } from "@/types"
import Assignmeet from "./assignment"

interface TaskDistributionProps {
  assignments: WorkingPerson[]
}

const TaskDistribution = ({ assignments }: TaskDistributionProps) => {
  return (
    <div className="py-24">
      <h2 className="text-center text-2xl font-semibold">Taks Distribution</h2>
      <div className="m-auto flex flex-wrap gap-2 justify-center">
        {assignments.map((assignment) => (
          <Assignmeet key={assignment.id} assignment={assignment} />
        ))}
      </div>
    </div>
  )
}

export default TaskDistribution
