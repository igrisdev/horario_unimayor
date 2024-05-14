import { SearchSubject } from '@/components/dashboard/subject/SearchSubject'
import { TableSubject } from '@/components/dashboard/subject/TableSubject'
import { Suspense } from 'react'

export default async function Subject() {
  return (
    <main>
      <SearchSubject />
      <Suspense
        key={1}
        fallback={<p>Loading...</p>}
      >
        <TableSubject />
      </Suspense>
    </main>
  )
}
