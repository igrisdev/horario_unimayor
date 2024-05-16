import Link from 'next/link'
import { FormDelete } from '../form/FormDelete'

export const TBody = ({ rows = [], url, label }) => {
  return (
    <tbody>
      {rows.map((row) => (
        <tr
          key={row.id}
          className='bg-white border-b hover:bg-gray-50 '
        >
          <th
            scope='row'
            className='px-6 py-4 font-medium text-gray-900 whitespace-nowrap'
          >
            {row.name}
          </th>
          <td className='px-6 py-4'>{row.code}</td>
          <td className='px-6 py-4'>{row.hours}</td>
          <td className='px-6 py-4'>{row.description}</td>
          <td className='px-6 py-4 flex gap-2 flex-wrap'>
            <Link
              href={`${url}${row.id}`}
              className='font-medium text-blue-600 hover:underline'
            >
              Actualizar
            </Link>
            <FormDelete
              id={row.id}
              label={label}
            />
          </td>
        </tr>
      ))}
    </tbody>
  )
}
