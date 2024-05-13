import { Axios } from '@/lib/axios'

import { TableSubject } from '@/components/dashboard/subject/TableSubject'
import { revalidatePath } from 'next/cache'

export default async function Subject() {
  async function getSubjects() {
    const { data } = await Axios.get('/api/dashboard/subject')

    revalidatePath('/dashboard/subject')
    return data
  }

  const dataSubjects = await getSubjects()

  return (
    <main>
      <TableSubject dataSubjects={dataSubjects} />
    </main>
  )
}
