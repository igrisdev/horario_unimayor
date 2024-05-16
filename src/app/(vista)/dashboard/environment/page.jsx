import { Suspense } from 'react'

import { TableSubject } from '@/components/dashboard/subject/TableSubject'
import { Search } from '@/components/general/Search'

export default async function Environment({ searchParams }) {
  const search = searchParams?.search || ''

  const urlCreate = '/dashboard/environment/create'
  const labelCreate = 'Crear Ambiente'

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
        <TableSubject search={search} />
      </Suspense>
    </main>
  )
}
