import prisma from "@/lib/db"

import PeopleTable from "@/components/peopleTable"
import { assignTasksToPeople } from "@/actions/assignments"

const Admin = async () => {
  const people = await prisma.people.findMany()

  return (
    <div>
      <h1>Admin</h1>
      {/* Table with the people info */}
      <PeopleTable people={people} />
      <form action={assignTasksToPeople}>
        <button type="submit">Assign Tasks</button>
      </form>
    </div>
  )
}

export default Admin
