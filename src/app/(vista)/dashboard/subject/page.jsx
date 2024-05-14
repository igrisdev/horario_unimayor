import { SearchSubject } from '@/components/dashboard/subject/SearchSubject'
import { TableSubject } from '@/components/dashboard/subject/TableSubject'

export default async function Subject() {
  return (
    <main>
      <SearchSubject />
      <TableSubject />
    </main>
  )
}
