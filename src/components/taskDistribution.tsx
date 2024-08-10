import { WorkingPerson, Task } from "@/types"
import Assignmeet from "./assignment"

interface TaskDistributionProps {
  assignments: WorkingPerson[]
}

const TaskDistribution = ({ assignments }: TaskDistributionProps) => {
  return (
    <div className="py-24">
      <h2 className="text-center text-2xl font-semibold">Taks Distribution</h2>
      {assignments.map((assignment) => (
        <Assignmeet key={assignment.id} assignment={assignment} />
      ))}
    </div>
  )
}

export default TaskDistribution
