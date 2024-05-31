import { FormWork } from '@/components/dashboard/work/FormWork'
import { Axios } from '@/lib/axios'

export default async function SubjectUpdate({ params }) {
  const { id } = params
  let dataSubject = []

  if (id !== null) {
    const { data } = await Axios.get(`/api/dashboard/work/${id}`)
    dataSubject = data
  }

  return (
    <main className='grid place-content-center h-[calc(100vh-100px)]'>
      <div className='max-w-md relative flex flex-col p-4 rounded-md text-black bg-white'>
        <h2 className='text-2xl font-bold mb-2 text-[#1e0e4b] text-center'>
          Actualizar <span className='text-[#7747ff]'>Labor</span>
        </h2>
        <FormWork
          isEdit={true}
          label={'Actualizar Labor'}
          id={id}
          data={dataSubject}
        />
      </div>
    </main>
  )
}
