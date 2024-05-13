import { Axios } from '@/lib/axios'

import { TableSubject } from '@/components/dashboard/subject/TableSubject'

export default async function Subject() {
  async function getSubjects() {
    const { data } = await Axios.get('/api/dashboard/subject')
    console.log(data)
    return data
  }

  const dataSubjects = await getSubjects()
  console.log(dataSubjects)

  return (
    <main>
      <TableSubject dataSubjects={dataSubjects} />
    </main>
  )
}
