import { Suspense } from 'react'

import { Search } from '@/components/general/Search'
import { TableUser } from '@/components/dashboard/user/TableUser'

export default async function User({ searchParams }) {
  const search = searchParams?.search || ''

  const urlCreate = '/dashboard/user/create'
  const labelCreate = 'Crear Usuario'

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
        <TableUser search={search} type={'user'} />
      </Suspense>
    </main>
  )
}
