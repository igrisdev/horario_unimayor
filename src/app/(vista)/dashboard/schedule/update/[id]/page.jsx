import { FormSchedule } from '@/components/dashboard/schedule/FormSchedule'
import { Axios } from '@/lib/axios'

export default async function SubjectUpdate({ params }) {
  const { id } = params
  let dataSubject = []

  if (id !== null) {
    const { data } = await Axios.get(`/api/dashboard/schedule/${id}`)

    const rows =
      [data].map((row) => {
        return {
          id: row.id,
          day: row.day,
          hours: row.subject.hours,
          hourStart: row.hourStart.substring(0, 10),
          hourEnd: row.hourEnd.substring(0, 10),
          schoolTermId: row.schoolTerm.id,
          schoolTerm: row.schoolTerm.name,
          userId: row.user.id,
          user: row.user.firstName + ' ' + row.user.lastName,
          environmentId: row.environment.id,
          environment: row.environment.typeEnvironment,
          subjectId: row.subject.id,
          subject: row.subject.name,
          workId: row.work?.id,
          work: row.work?.name,
        }
      }) || []

    const { data: schoolterm } = await Axios.get(
      `/api/dashboard/schoolterm?search`
    )

    const { data: user } = await Axios.get(`/api/dashboard/user?search`)

    const { data: environment } = await Axios.get(
      `/api/dashboard/environment?search`
    )

    const { data: subject } = await Axios.get(`/api/dashboard/subject?search`)

    const { data: work } = await Axios.get(`/api/dashboard/work?search`)

    rows.push({
      allSchoolTerm: schoolterm,
      allUser: user,
      allEnvironment: environment,
      allSubject: subject,
      allWork: work,
    })

    dataSubject = rows
  }

  return (
    <main className='grid place-content-center h-[calc(100vh-100px)]'>
      <div className='max-w-md relative flex flex-col p-4 rounded-md text-black bg-white'>
        <h2 className='text-2xl font-bold mb-2 text-[#1e0e4b] text-center'>
          Actualizar <span className='text-[#7747ff]'>Horario</span>
        </h2>
        <FormSchedule
          isEdit={true}
          label={'Actualizar Horario'}
          id={id}
          data={dataSubject}
        />
      </div>
    </main>
  )
}
