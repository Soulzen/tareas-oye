const PeopleTable = ({
  people
}: {
  people: {
    id: number
    name: string
    active: boolean
    last_week_work: number
  }[]
}) => {
  console.log(people)
  return (
    <div>
      <h2 className="flex flex-col justify-center items-center">People</h2>
      <table className="min-w-full bg-white border border-gray-200 rounded-lg shadow-lg">
        <thead>
          <tr className="bg-gray-100 text-left">
            <th className="px-6 py-3 border-b border-gray-200 text-gray-600 font-bold uppercase">
              Id
            </th>
            <th className="px-6 py-3 border-b border-gray-200 text-gray-600 font-bold uppercase">
              Name
            </th>
            <th className="px-6 py-3 border-b border-gray-200 text-gray-600 font-bold uppercase">
              Last week work
            </th>
          </tr>
        </thead>
        <tbody>
          {people
            .filter((person) => {
              return person.active
            })
            .map((person) => (
              <tr
                key={person.id}
                className={`hover:bg-gray-50 transition duration-150 ${
                  person.active ? "" : "bg-red-400"
                }`}
              >
                <td className="px-6 py-4 border-b border-gray-200 text-gray-700">
                  {person.id}
                </td>
                <td className="px-6 py-4 border-b border-gray-200 text-gray-700">
                  {person.name}
                </td>
                <td className="px-6 py-4 border-b border-gray-200 text-gray-700">
                  {person.last_week_work}
                </td>
              </tr>
            ))}
        </tbody>
      </table>
    </div>
  )
}

export default PeopleTable
