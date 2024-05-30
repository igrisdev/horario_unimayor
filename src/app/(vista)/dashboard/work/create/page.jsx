import { FormWork } from '@/components/dashboard/work/FormWork'
export default function SubjectCreate() {
  return (
    <main className='grid place-content-center h-[calc(100vh-100px)]'>
      <div className='max-w-md relative flex flex-col p-4 rounded-md text-black bg-white'>
        <h2 className='text-2xl font-bold mb-2 text-[#1e0e4b] text-center'>
          Crear <span className='text-[#7747ff]'>Labor</span>
        </h2>

        <FormWork
          isEdit={false}
          label={'Crear Labor'}
        />
      </div>
    </main>
  )
}
