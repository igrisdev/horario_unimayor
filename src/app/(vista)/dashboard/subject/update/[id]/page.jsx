import { FormSubject } from '@/components/dashboard/subject/FormSubject'

export default async function SubjectUpdate({ params }) {
  const { id } = params

  return (
    <main className='mt-32 grid place-content-center'>
      <h2 className='text-3xl mb-5 text-center text-white'>
        Actualizar Materia
      </h2>
      <FormSubject
        isEdit={true}
        label={'Actualizar Materia'}
        id={id}
      />
    </main>
  )
}
