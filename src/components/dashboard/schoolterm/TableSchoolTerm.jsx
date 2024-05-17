import { Axios } from '@/lib/axios'

import { THead } from '@/components/general/table/THead'
import { TBody } from '@/components/general/table/TBody'

export const TableSchoolTerm = async ({ search, type }) => {
  const columns = [
    {
      label: 'Nombre Periodo Académico',
    },
    {
      label: 'Fecha fin del semestre',
    },
    {
      label: 'Fecha fin del semestre',
    },
    {
      label: 'Estado',
    },
    {
      label: '',
    },
  ]

  const urlUpdate = '/dashboard/schoolterm/update/'
  const labelDelete = 'Eliminar Periodo Académico'

  async function filterSearch(search) {
    try {
      const { data } = await Axios.get(
        `/api/dashboard/schoolterm?search=${search}`
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
        name: row.name,
        dateStart: row.dateStart.substring(0, 10),
        dateEnd: row.dateEnd.substring(0, 10),
        state: row.state ? 'Activo' : 'Inactivo',
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
