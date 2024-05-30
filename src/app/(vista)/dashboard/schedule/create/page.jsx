import { Axios } from '@/lib/axios'

import { FormSchedule } from '@/components/dashboard/schedule/FormSchedule'

export default async function SubjectCreate() {
  let dataSubject = []

  const rows = []

  const { data: schoolterm } = await Axios.get(
    `/api/dashboard/schoolterm?search`
  )

  const { data: user } = await Axios.get(`/api/dashboard/user?search`)

  const { data: environment } = await Axios.get(
    `/api/dashboard/environment?search`
  )

  const { data: subject } = await Axios.get(`/api/dashboard/subject?search`)

  rows.push({
    schoolTerm: schoolterm.filter((item) => item.state),
    allUser: user.filter((item) => item.role === 'docente'),
    allEnvironment: environment,
    allSubject: subject,
  })

  dataSubject = rows

  return (
    <main className='grid place-content-center h-[calc(100vh-100px)]'>
      <div className='max-w-md relative flex flex-col p-4 rounded-md text-black bg-white'>
        <h2 className='text-2xl font-bold mb-2 text-[#1e0e4b] text-center'>
          Crear <span className='text-[#7747ff]'>Horario</span>
        </h2>

        <FormSchedule
          isEdit={false}
          label={'Crear Horario'}
          data={dataSubject}
        />
      </div>
    </main>
  )
}
