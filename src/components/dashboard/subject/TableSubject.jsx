import { Axios } from '@/lib/axios'
import { revalidatePath } from 'next/cache'
import Link from 'next/link'

export const TableSubject = async ({ dataSubjects }) => {
  async function handleDeleteSubject(formData) {
    'use server'

    const id = formData.get('id')

    Axios.delete(`/api/dashboard/subject/${id}`)
      .then((res) => {
        console.log(res)
      })
      .catch((err) => {
        console.log(err)
      })
      .finally(() => {})

    revalidatePath('/dashboard/subject')
  }

  return (
    <section className='relative overflow-x-auto shadow-md sm:rounded-lg'>
      <div className='flex gap-x-4 pb-4'>
        <div className='relative'>
          <div className='absolute inset-y-0 rtl:inset-r-0 start-0 flex items-center ps-3 pointer-events-none'>
            <svg
              className='w-4 h-4 text-gray-500'
              aria-hidden='true'
              xmlns='http://www.w3.org/2000/svg'
              fill='none'
              viewBox='0 0 20 20'
            >
              <path
                stroke='currentColor'
                stroke-linecap='round'
                stroke-linejoin='round'
                stroke-width='2'
                d='m19 19-4-4m0-7A7 7 0 1 1 1 8a7 7 0 0 1 14 0Z'
              />
            </svg>
          </div>
          <input
            type='text'
            id='table-search'
            className='block p-2 ps-10 text-sm text-gray-900 border border-gray-300 rounded-lg w-80 bg-gray-50 outline-none'
            placeholder='Search for items'
          />
        </div>

        <Link
          href='/dashboard/subject/create'
          className='text-black font-semibold rounded-lg text-sm px-5 py-2.5 text-center inline-flex items-center bg-amber-500 transition-colors hover:bg-amber-200'
        >
          Crear Materia
          <svg
            className='rtl:rotate-180 w-3.5 h-3.5 ms-2'
            aria-hidden='true'
            xmlns='http://www.w3.org/2000/svg'
            fill='none'
            viewBox='0 0 14 10'
          >
            <path
              stroke='currentColor'
              stroke-linecap='round'
              stroke-linejoin='round'
              stroke-width='2'
              d='M1 5h12m0 0L9 1m4 4L9 9'
            />
          </svg>
        </Link>
      </div>
      <table className='w-full text-sm text-left rtl:text-right text-gray-500'>
        <thead className='text-xs text-gray-700 uppercase bg-gray-50'>
          <tr>
            {/* <th
              scope='col'
              className='p-4'
            >
              <div className='flex items-center'>
                <input
                  id='checkbox-all-search'
                  type='checkbox'
                  className='w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 rounded focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-800 dark:focus:ring-offset-gray-800 focus:ring-2 dark:bg-gray-700 dark:border-gray-600'
                />
                <label
                  for='checkbox-all-search'
                  className='sr-only'
                >
                  checkbox
                </label>
              </div>
            </th> */}
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
            >
              Acciones
            </th>
          </tr>
        </thead>
        <tbody>
          {dataSubjects.map((subject) => (
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
                  href='/dashboard/subject/update'
                  className='font-medium text-blue-600 hover:underline'
                >
                  Actualizar
                </Link>
                <form action={handleDeleteSubject}>
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
