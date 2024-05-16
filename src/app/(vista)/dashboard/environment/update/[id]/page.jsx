import { FormEnvironment } from '@/components/dashboard/environment/FormEnvironment'
import { Axios } from '@/lib/axios'

export default async function SubjectUpdate({ params }) {
  const { id } = params
  let dataEnvironment = []

  if (id !== null) {
    const { data } = await Axios.get(`/api/dashboard/environment/${id}`)
    dataEnvironment = data
  }

  return (
    <main className='grid place-content-center h-[calc(100vh-100px)]'>
      <div className='max-w-md relative flex flex-col p-4 rounded-md text-black bg-white'>
        <h2 className='text-2xl font-bold mb-2 text-[#1e0e4b] text-center'>
          Actualizar <span className='text-[#7747ff]'>Ambiente</span>
        </h2>
        <FormEnvironment
          isEdit={true}
          label={'Actualizar Materia'}
          id={id}
          data={dataEnvironment}
        />
      </div>
    </main>
  )
}
