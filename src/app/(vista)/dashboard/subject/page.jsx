import { TableSubject } from '@/components/dashboard/subject/TableSubject'
import { Axios } from '@/lib/axios'

export default async function Subject() {
  async function getSubjects() {
    const { data } = await Axios.get('/api/dashboard/subject')

    return data
  }

  const dataSubjects = await getSubjects()

  return (
    <main>
      <TableSubject dataSubjects={dataSubjects} />
    </main>
  )
}
