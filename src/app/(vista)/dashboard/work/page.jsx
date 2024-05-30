import { Suspense } from 'react'

import { Search } from '@/components/general/Search'
import { TableWork } from '@/components/dashboard/work/TableWork'

export default async function Work({ searchParams }) {
  const search = searchParams?.search || ''

  const urlCreate = '/dashboard/work/create'
  const labelCreate = 'Crear Labor'

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
        <TableWork
          search={search}
          type={'work'}
        />
      </Suspense>
    </main>
  )
}
