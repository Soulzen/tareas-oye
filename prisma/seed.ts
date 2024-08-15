import { Prisma, PrismaClient } from "@prisma/client"
import { tasks, week, people } from "../src/data/constants"

const prisma = new PrismaClient()

const seedPeople: Prisma.peopleCreateInput[] = people.map((person) => ({
  name: person.name,
  last_week_work: person.lastWeekWork,
  active: person.active
}))

const seedWeek: Prisma.daysCreateInput[] = week.map((day) => ({
  name: day.name,
  tasks: {
    connectOrCreate: day.tasks.map((taskId) => ({
      where: { id: taskId },
      create: {
        name: tasks.find((task) => task.id === taskId)?.name || "",
        weight: tasks.find((task) => task.id === taskId)?.weight || 0
      }
    }))
  }
}))

async function main() {
  console.log("Start seeding ...")

  for (const person of seedPeople) {
    const newPerson = await prisma.people.create({
      data: person
    })
    console.log(`Created person with id: ${newPerson.id}`)
  }

  for (const day of seedWeek) {
    const newDay = await prisma.days.create({
      data: day
    })
    console.log(`Created day with id: ${newDay.id}`)
  }
}
main()
  .then(async () => {
    await prisma.$disconnect()
  })
  .catch(async (e) => {
    console.error(e)
    await prisma.$disconnect()
    process.exit(1)
  })
