import { Axios } from '@/lib/axios'
import Link from 'next/link'

export const TableSubject = ({ dataSubjects }) => {
  return (
    <section class='relative overflow-x-auto shadow-md sm:rounded-lg'>
      <div class='flex gap-x-4 pb-4'>
        <div class='relative'>
          <div class='absolute inset-y-0 rtl:inset-r-0 start-0 flex items-center ps-3 pointer-events-none'>
            <svg
              class='w-4 h-4 text-gray-500'
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
            class='block p-2 ps-10 text-sm text-gray-900 border border-gray-300 rounded-lg w-80 bg-gray-50 outline-none'
            placeholder='Search for items'
          />
        </div>

        <Link
          href='/dashboard/subject/create'
          class='text-black font-semibold rounded-lg text-sm px-5 py-2.5 text-center inline-flex items-center bg-amber-500 transition-colors hover:bg-amber-200'
        >
          Crear Materia
          <svg
            class='rtl:rotate-180 w-3.5 h-3.5 ms-2'
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
      <table class='w-full text-sm text-left rtl:text-right text-gray-500'>
        <thead class='text-xs text-gray-700 uppercase bg-gray-50'>
          <tr>
            {/* <th
              scope='col'
              class='p-4'
            >
              <div class='flex items-center'>
                <input
                  id='checkbox-all-search'
                  type='checkbox'
                  class='w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 rounded focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-800 dark:focus:ring-offset-gray-800 focus:ring-2 dark:bg-gray-700 dark:border-gray-600'
                />
                <label
                  for='checkbox-all-search'
                  class='sr-only'
                >
                  checkbox
                </label>
              </div>
            </th> */}
            <th
              scope='col'
              class='px-6 py-3'
            >
              Nombre Materia
            </th>
            <th
              scope='col'
              class='px-6 py-3'
            >
              Código
            </th>
            <th
              scope='col'
              class='px-6 py-3'
            >
              # Horas
            </th>
            <th
              scope='col'
              class='px-6 py-3'
            >
              Descripción
            </th>
            <th
              scope='col'
              class='px-6 py-3'
            >
              Acciones
            </th>
          </tr>
        </thead>
        <tbody>
          {dataSubjects.map((subject) => (
            <tr
              key={subject.id}
              class='bg-white border-b hover:bg-gray-50 '
            >
              <th
                scope='row'
                class='px-6 py-4 font-medium text-gray-900 whitespace-nowrap'
              >
                {subject.name}
              </th>
              <td class='px-6 py-4'>{subject.code}</td>
              <td class='px-6 py-4'>{subject.hours}</td>
              <td class='px-6 py-4'>{subject.description}</td>
              <td class='px-6 py-4'>
                <a
                  href='#'
                  class='font-medium text-blue-600 hover:underline'
                >
                  Edit
                </a>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </section>
  )
}
