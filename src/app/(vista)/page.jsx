import { TableScheduleMain } from '@/components/dashboard/TableScheduleMain'
import { getUser, isLoggedIn } from '@/lib/actions/session/actionSession'
import prisma from '@/lib/prisma'
import React from 'react'

export default async function Home({ searchParams }) {
  const schedule = searchParams?.schedule || ''

  const id = await isLoggedIn()

  const user = await getUser(id)

  const schedules = await prisma.schedule.findMany({
    where: {
      ...(user.role === 'admin'
        ? {}
        : {
            user: {
              id: user.id,
            },
          }),
      schoolTerm: {
        ...(schedule === ''
          ? {}
          : {
              name: schedule,
            }),
      },
    },
    include: {
      schoolTerm: true,
      user: true,
      environment: true,
      subject: true,
    },
  })

  const subjects = schedules.map((item) => ({
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
      <TableScheduleMain
        subjects={subjects}
        user={user}
      />
    </div>
  )
}
