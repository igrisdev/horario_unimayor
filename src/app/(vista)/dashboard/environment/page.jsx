import { Suspense } from 'react'

import { Search } from '@/components/general/Search'
import { TableEnvironment } from '@/components/dashboard/environment/TableEnvironment'

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
        <TableEnvironment search={search} type='environment' />
      </Suspense>
    </main>
  )
}
