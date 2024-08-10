import { assignTasks } from "@/services/assignTasks"
import { people, tasks, week } from "@/data/constants"
import { assignDays } from "@/services/assignDays"
import Schedule from "@/components/schedule"
import TaskDistribution from "@/components/taskDistribution"

export default function Home() {
  const assignments = assignTasks(tasks, people, week)
  // Make a copy of the assignments array to avoid mutating the original
  const devAssignments = JSON.parse(JSON.stringify(assignments))
  const wokrWeek = assignDays(week, devAssignments)

  return (
    <main>
      <h1>Hello World!</h1>
      <Schedule workWeek={wokrWeek} tasks={tasks} people={people} />
      <TaskDistribution assignments={assignments} />
    </main>
  )
}
