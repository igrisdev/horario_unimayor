import { Suspense } from 'react'

import { TableSubject } from '@/components/dashboard/subject/TableSubject'
import { Search } from '@/components/general/Search'

export default async function Subject({ searchParams }) {
  const search = searchParams?.search || ''

  const urlCreate = '/dashboard/subject/create'
  const labelCreate = 'Crear Materia'

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
        <TableSubject search={search} type={'subject'} />
      </Suspense>
    </main>
  )
}
