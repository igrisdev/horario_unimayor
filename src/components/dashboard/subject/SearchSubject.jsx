'use client'

import Link from 'next/link'
import { usePathname, useRouter, useSearchParams } from 'next/navigation'

export function SearchSubject() {
  const searchParams = useSearchParams()
  const pathname = usePathname()
  const { replace } = useRouter()

  const handleSearch = (term) => {
    const params = new URLSearchParams(searchParams)

    if (term !== '') {
      params.set('search', term)
    } else {
      params.delete('search')
    }

    replace(`${pathname}?${params.toString()}`)
  }

  return (
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
          defaultValue={searchParams.get('search')}
          onChange={(event) => handleSearch(event.target.value)}
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
  )
}
