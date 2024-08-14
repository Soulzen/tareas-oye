import { assignTasks } from "@/services/assignTasks"
import { people, tasks } from "@/data/constants"
import { assignDays } from "@/services/assignDays"
import Schedule from "@/components/schedule"
import TaskDistribution from "@/components/taskDistribution"

export default async function Home() {
  const assignments = await assignTasks()
  // Make a copy of the assignments array to avoid mutating the original
  const devAssignments = JSON.parse(JSON.stringify(assignments))
  const wokrWeek = assignDays(devAssignments)

  return (
    <main>
      <h1 className="my-5 text-5xl font-bold text-center">School Tasks</h1>
      <Schedule workWeek={wokrWeek} tasks={tasks} people={people} />
      <TaskDistribution assignments={assignments} />
    </main>
  )
}
