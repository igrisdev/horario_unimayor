import { FormSubject } from '@/components/dashboard/subject/FormSubject'
import { Axios } from '@/lib/axios'

export default async function SubjectUpdate({ params }) {
  const { id } = params
  let dataSubject = []

  if (id !== null) {
    const { data } = await Axios.get(`/api/dashboard/subject/${id}`)
    dataSubject = data
  }

  return (
    <main className='mt-32 grid place-content-center'>
      <h2 className='text-3xl mb-5 text-center text-white'>
        Actualizar Materia
      </h2>
      <FormSubject
        isEdit={true}
        label={'Actualizar Materia'}
        id={id}
        dataSubject={dataSubject}
      />
    </main>
  )
}
