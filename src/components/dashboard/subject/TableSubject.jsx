import Link from 'next/link'

import { Axios } from '@/lib/axios'
import { deleteSubject } from '@/lib/actions/subject/actionSubject'

export const TableSubject = async ({ search }) => {
  async function filterSearch(search) {
    try {
      const { data } = await Axios.get(
        `/api/dashboard/subject?search=${search}`
      )
      return data
    } catch (error) {
      console.log(error)
    }
  }

  const data = (await filterSearch(search)) || []

  return (
    <section className='relative overflow-x-auto shadow-md sm:rounded-lg'>
      <table className='w-full text-sm text-left rtl:text-right text-gray-500'>
        <thead className='text-xs text-gray-700 uppercase bg-gray-50'>
          <tr>
            <th
              scope='col'
              className='px-6 py-3'
            >
              Nombre Materia
            </th>
            <th
              scope='col'
              className='px-6 py-3'
            >
              Código
            </th>
            <th
              scope='col'
              className='px-6 py-3'
            >
              # Horas
            </th>
            <th
              scope='col'
              className='px-6 py-3'
            >
              Descripción
            </th>
            <th
              scope='col'
              className='px-6 py-3'
            ></th>
          </tr>
        </thead>
        <tbody>
          {data.map((subject) => (
            <tr
              key={subject.id}
              className='bg-white border-b hover:bg-gray-50 '
            >
              <th
                scope='row'
                className='px-6 py-4 font-medium text-gray-900 whitespace-nowrap'
              >
                {subject.name}
              </th>
              <td className='px-6 py-4'>{subject.code}</td>
              <td className='px-6 py-4'>{subject.hours}</td>
              <td className='px-6 py-4'>{subject.description}</td>
              <td className='px-6 py-4 flex gap-2 flex-wrap'>
                <Link
                  href={`/dashboard/subject/update/${subject.id}`}
                  className='font-medium text-blue-600 hover:underline'
                >
                  Actualizar
                </Link>
                <form action={deleteSubject}>
                  <input
                    type='hidden'
                    name='id'
                    value={subject.id}
                  />
                  <button
                    type='submit'
                    className='font-medium text-red-600 hover:underline'
                  >
                    Eliminar
                  </button>
                </form>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </section>
  )
}
