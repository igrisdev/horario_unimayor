import { TableScheduleMain } from '@/components/dashboard/TableScheduleMain'
import { Axios } from '@/lib/axios'
import React from 'react'

export default async function Home({ searchParams }) {
  const schedule = searchParams?.schedule || ''

  const { data } = await Axios.get(
    `/api/dashboard/schedule?search=&schedule=${schedule}`
  )

  const subjects = data.map((item) => ({
    id: item.id,
    day: parseIntDay(item.day),
    subject: item.subject.name,
    hourStart: item.hourStart.substring(0, 10),
    hourEnd: item.hourEnd.substring(0, 10),
    teacher: item.user.firstName + ' ' + item.user.lastName,
  }))

  function parseIntDay(day) {
    const dayMap = {
      lunes: 0,
      martes: 1,
      miércoles: 2,
      jueves: 3,
      viernes: 4,
      sábado: 5,
    }
    return dayMap[day]
  }

  return (
    <div>
      <TableScheduleMain subjects={subjects} />
    </div>
  )
}
