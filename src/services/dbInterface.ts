"use server"

import { WorkingPerson } from "@/types"
import { sql } from "@vercel/postgres"

export const getPeople = async () => {
  const { rows } =
    await sql`SELECT id, name, last_week_work AS lastWeekWork FROM people ORDER BY id ASC;`
  return rows.map((person) => ({
    id: person.id,
    name: person.name,
    lastWeekWork: parseInt(person.lastweekwork)
  }))
}

export const getTasks = async () => {
  const { rows } = await sql`SELECT * FROM tasks ORDER BY id ASC`
  return rows
}

export const getWeek = async () => {
  const { rows } = await sql`SELECT
    d.id,
    d.name,
    json_agg(t.id ORDER BY t.id) AS tasks
    FROM 
    days d
    JOIN 
    day_tasks dt ON d.id = dt.day_id
    JOIN 
    tasks t ON dt.task_id = t.id
    GROUP BY 
    d.id, d.name
    ORDER BY 
    d.id;
`
  return rows
}

export const writeAssignments = async (assignments: WorkingPerson[]) => {
  // console.log(assignments)

  // const values = assignments.map((assignment) => [
  //   assignment.id,
  //   assignment.tasks.map((task) => task.id) as any,
  //   assignment.currentWeight,
  //   assignment.deviation
  // ])

  // console.log(values)

  // const query = `INSERT INTO assignments (person, tasks, current_weight, deviation) VALUES ${values.map(
  //   (value) => `(${value})`
  // )} returning id;
  // `

  // const query = sql`
  //   INSERT INTO assignments (person, tasks, current_weight, deviation)
  //   VALUES ${assignments
  //     .map(
  //       (assignment) =>
  //         sql`(${assignment.id},
  //        ${assignment.tasks as any},
  //         ${assignment.currentWeight},
  //       ${assignment.deviation})`
  //     )
  //     .join(", ")}
  //   RETURNING id;
  // `

  const query = sql`
    INSERT INTO assignments (person, tasks, current_weight, deviation)
    VALUES ${assignments
      .map(
        (assignment) =>
          sql`(${assignment.id}, ARRAY[${
            assignment.tasks as any
          }]::integer[], ${assignment.currentWeight}, ${assignment.deviation})`
      )
      .join(", ")}  -- Join using a regular comma and space
    RETURNING id;
  `

  // console.log(query)

  // Execute the query
  try {
    const result = await query
    console.log(result)
  } catch (error) {
    console.error("Error executing query:", error)
  }
}

export const writeAssignments2 = (assignments: WorkingPerson[]) => {
  assignments.forEach(async (assignment) => {
    const query = await sql`INSERT INTO assignments (
      person, tasks, current_weight, deviation) VALUES (
      ${assignment.id},
       ${assignment.tasks.map((task) => task.id) as any},
        ${assignment.currentWeight},
     ${assignment.deviation})
       returning id;`

    // try {
    //   const result = await query
    //   console.log(result)
    // } catch (error) {
    //   console.error("Error executing query:", error)
    // }
  })
}
