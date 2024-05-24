import { TableScheduleMain } from '@/components/dashboard/TableScheduleMain'
import { Axios } from '@/lib/axios'
import React from 'react'

export default async function Home() {
  const { data } = await Axios.get('/api/dashboard/schedule?search=')

  const subjects = data.map((item) => ({
    id: item.id,
    day: parseIntDay(item.day),
    subject: item.subject.name,
    hourStart: item.hourStart.substring(0, 10),
    hourEnd: item.hourEnd.substring(0, 10),
  }))

  /* const materias = [
    {
      day: parseIntDay('sábado'),
      subject: 'Cálculo 1',
      hoursStart: '07:00',
      hoursEnd: '10:00',
      docente: 'Juan',
    },
    {
      day: parseIntDay('lunes'),
      subject: 'Ingles',
      hoursStart: '07:00',
      hoursEnd: '10:00',
      docente: 'Juan',
    },
    {
      day: parseIntDay('miércoles'),
      subject: 'Estadística',
      hoursStart: '15:00',
      hoursEnd: '18:00',
      docente: 'Juan',
    },
  ] */

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
