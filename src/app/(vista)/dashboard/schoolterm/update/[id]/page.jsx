import { FormSchoolTerm } from '@/components/dashboard/schoolterm/FormSchoolTerm'
import { Axios } from '@/lib/axios'

export default async function SubjectUpdate({ params }) {
  const { id } = params
  let dataSubject = []

  if (id !== null) {
    const { data } = await Axios.get(`/api/dashboard/schoolterm/${id}`)
    dataSubject = data
  }

  return (
    <main className='grid place-content-center h-[calc(100vh-100px)]'>
      <div className='max-w-md relative flex flex-col p-4 rounded-md text-black bg-white'>
        <h2 className='text-2xl font-bold mb-2 text-[#1e0e4b] text-center'>
          Actualizar <span className='text-[#7747ff]'>Periodo Académico</span>
        </h2>
        <FormSchoolTerm
          isEdit={true}
          label={'Actualizar Periodo Académico'}
          id={id}
          data={dataSubject}
        />
      </div>
    </main>
  )
}
