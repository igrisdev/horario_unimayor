import { Axios } from '@/lib/axios'

import { THead } from '@/components/general/table/THead'
import { TBody } from '@/components/general/table/TBody'

export const TableWork = async ({ search, type }) => {
  const columns = [
    {
      label: 'Nombre de Labor',
    },
    {
      label: 'Tipo de Labor',
    },
    {
      label: 'Descripción',
    },
    {
      label: 'Disponibilidad',
    },
    {
      label: '',
    },
  ]

  const urlUpdate = '/dashboard/work/update/'
  const labelDelete = 'Eliminar Labor'

  async function filterSearch(search) {
    try {
      const { data } = await Axios.get(`/api/dashboard/work?search=${search}`)
      return data
    } catch (error) {
      console.log(error)
    }
  }

  const rows = await filterSearch(search)

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
