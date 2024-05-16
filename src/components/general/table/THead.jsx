export function THead({ columns }) {
  return (
    <thead className='text-xs text-gray-700 uppercase bg-gray-50'>
      <tr>
        {columns.map((column) => (
          <th
            key={column.label}
            scope='col'
            className='px-6 py-3'
          >
            {column.label}
          </th>
        ))}
      </tr>
    </thead>
  )
}
