import { Axios } from '@/lib/axios'

import { THead } from '@/components/general/table/THead'
import { TBody } from '@/components/general/table/TBody'

export const TableEnvironment = async ({ search }) => {
  const columns = [
    {
      label: 'Tipo de ambiente',
    },
    {
      label: 'Sede',
    },
    {
      label: 'Ambiente',
    },
    {
      label: '',
    },
  ]

  const urlUpdate = '/dashboard/environment/update/'
  const labelDelete = 'Eliminar Ambiente'

  async function filterSearch(search) {
    try {
      const { data } = await Axios.get(
        `/api/dashboard/environment?search=${search}`
      )
      return data
    } catch (error) {
      console.log(error)
    }
  }

  const rows = (await filterSearch(search)) || []

  return (
    <section className='relative overflow-x-auto shadow-md sm:rounded-lg'>
      <table className='w-full text-sm text-left rtl:text-right text-gray-500'>
        <THead columns={columns} />
        <TBody
          rows={rows}
          url={urlUpdate}
          label={labelDelete}
        />
      </table>
    </section>
  )
}
