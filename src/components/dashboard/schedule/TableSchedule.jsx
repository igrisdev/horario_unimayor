import { Axios } from '@/lib/axios'

import { THead } from '@/components/general/table/THead'
import { TBody } from '@/components/general/table/TBody'

export const TableSchedule = async ({ search, schedule, type }) => {
  const columns = [
    {
      label: 'Dia de la semana',
    },
    {
      label: 'Cantidad de horas',
    },
    {
      label: 'Hora de inicio',
    },
    {
      label: 'Hora de fin',
    },
    {
      label: 'periodo académico',
    },
    {
      label: 'Usuario',
    },
    {
      label: 'Ambiente',
    },
    {
      label: 'Materia',
    },
    {
      label: 'Labor',
    },
    {
      label: '',
    },
  ]

  const urlUpdate = '/dashboard/schedule/update/'
  const labelDelete = 'Eliminar Horario'

  async function filterSearch(search) {
    try {
      const { data } = await Axios.get(
        `/api/dashboard/schedule?search=${search}&schedule=${schedule}`
      )
      return data
    } catch (error) {
      console.log(error)
    }
  }

  const rows =
    (await filterSearch(search)).map((row) => {
      return {
        id: row.id,
        day: row.day,
        hours: row.subject.hours,
        hourStart: row.hourStart.substring(0, 10),
        hourEnd: row.hourEnd.substring(0, 10),
        schoolTermId: row.schoolTerm.name,
        userId: row.user.firstName + ' ' + row.user.lastName,
        environmentId: row.environment.typeEnvironment,
        subjectId: row.subject.name,
        workId: row.work?.name,
      }
    }) || []

  return (
    <section className='relative overflow-x-auto shadow-md sm:rounded-lg'>
      <table className='w-full text-sm text-left rtl:text-right text-gray-500'>
        <THead columns={columns} />
        <TBody
          rows={rows}
          url={urlUpdate}
          label={labelDelete}
          type={type}
        />
      </table>
    </section>
  )
}
