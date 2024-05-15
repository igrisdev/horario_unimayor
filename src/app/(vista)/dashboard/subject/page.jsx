import { SearchSubject } from '@/components/dashboard/subject/SearchSubject'
import { TableSubject } from '@/components/dashboard/subject/TableSubject'
import { Suspense } from 'react'

export default async function Subject({ searchParams }) {
  const search = searchParams?.search || ''

  return (
    <main>
      <SearchSubject />
      <Suspense
        key={search}
        fallback={<p>Loading...</p>}
      >
        <TableSubject search={search} />
      </Suspense>
    </main>
  )
}
