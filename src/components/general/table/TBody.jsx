import Link from 'next/link'
import { FormDelete } from '../form/FormDelete'

const TableRow = ({ item, keys, url, label, type }) => {
  return (
    <tr className='bg-white border-b hover:bg-gray-200 text-black'>
      {keys.map((key) => (
        <td
          key={`${item.id}-${key}`}
          className='px-6 py-4'
        >
          {item[key]}
        </td>
      ))}

      <td className='px-6 py-4 flex gap-2 flex-wrap'>
        <Link
          href={`${url}${item.id}`}
          className='font-medium text-blue-600 hover:underline'
        >
          Actualizar
        </Link>
        <FormDelete
          id={item.id}
          label={label}
          type={type}
        />
      </td>
    </tr>
  )
}

export const TBody = ({ rows = [], url, label, type }) => {
  const keys = Object.keys(rows[0] || {}).filter((key) => key !== 'id')

  return (
    <tbody>
      {rows.map((row) => (
        <TableRow
          key={row.id}
          item={row}
          url={url}
          label={label}
          keys={keys}
          type={type}
        />
      ))}
    </tbody>
  )
}
