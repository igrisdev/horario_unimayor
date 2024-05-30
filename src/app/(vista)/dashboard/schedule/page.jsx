import { Suspense } from 'react'

import { Search } from '@/components/general/Search'
import { TableSchedule } from '@/components/dashboard/schedule/TableSchedule'

export default async function SchoolTerm({ searchParams }) {
  const search = searchParams?.search || ''
  const schedule = searchParams?.schedule || ''

  console.log(schedule)

  const urlCreate = '/dashboard/schedule/create'
  const labelCreate = 'Crear Horario'

  return (
    <main>
      <Search
        url={urlCreate}
        label={labelCreate}
      />
      <Suspense
        key={search}
        fallback={<p>Loading...</p>}
      >
        <TableSchedule
          search={search}
          schedule={schedule}
          type={'schedule'}
        />
      </Suspense>
    </main>
  )
}
