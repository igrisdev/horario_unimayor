import { FormSubject } from '@/components/dashboard/subject/FormSubject'

export default function SubjectCreate() {
  return (
    <main className='mt-32 grid place-content-center'>
      <h2 className='text-3xl mb-5 text-center text-white'>Crear Materia</h2>
      <FormSubject
        isEdit={false}
        label={'Crear Materia'}
      />
    </main>
  )
}
