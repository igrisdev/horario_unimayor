import { Axios } from '@/lib/axios'

import { THead } from '@/components/general/table/THead'
import { TBody } from '@/components/general/table/TBody'

export const TableUser = async ({ search, type }) => {
  const columns = [
    {
      label: 'Nombre Usuario',
    },
    {
      label: 'Apellido Usuario',
    },
    {
      label: 'Email',
    },
    {
      label: 'Rol',
    },
    {
      label: '',
    },
  ]

  const urlUpdate = '/dashboard/user/update/'
  const labelDelete = 'Eliminar Docente'

  async function filterSearch(search) {
    try {
      const { data } = await Axios.get(
        `/api/dashboard/user?search=${search}`
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
          type={type}
        />
      </table>
    </section>
  )
}
