import { Suspense } from 'react'

import { Search } from '@/components/general/Search'
import { TableSchoolTerm } from '@/components/dashboard/schoolterm/TableSchoolTerm'

export default async function SchoolTerm({ searchParams }) {
  const search = searchParams?.search || ''

  const urlCreate = '/dashboard/schoolterm/create'
  const labelCreate = 'Crear Periodo Académico'

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
        <TableSchoolTerm
          search={search}
          type={'schoolterm'}
        />
      </Suspense>
    </main>
  )
}
