import { FormUser } from '@/components/dashboard/user/FormUser'

export default function UserCreate() {
  return (
    <main className='grid place-content-center h-[calc(100vh-100px)]'>
      <div className='max-w-md relative flex flex-col p-4 rounded-md text-black bg-white'>
        <h2 className='text-2xl font-bold mb-2 text-[#1e0e4b] text-center'>
          Crear <span className='text-[#7747ff]'>Usuario</span>
        </h2>

        <FormUser
          isEdit={false}
          label={'Crear Usuario'}
        />
      </div>
    </main>
  )
}
