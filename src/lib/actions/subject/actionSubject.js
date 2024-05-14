'use server'

import { Axios } from '@/lib/axios'
import prisma from '@/lib/prisma'
import { revalidatePath } from 'next/cache'

export async function deleteSubject(formData) {
  const id = formData.get('id')

  await prisma.subject.delete({
    where: { id },
  })

  /* Axios.delete('/api/dashboard/subject/', id).then((res) => {
    console.log(res)
  }) */
  revalidatePath('/dashboard/subject')
}
