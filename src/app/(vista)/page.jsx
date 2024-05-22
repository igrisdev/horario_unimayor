'use client'

import { useState } from 'react'

export default function Home() {
  const [materias, setMaterias] = useState([
    {
      day: parseIntDay('sábado'),
      subject: 'Calculo',
      hours: 3,
      hoursStart: '08:00 PM',
      docente: 'Juan',
    },
    /* {
      day: parseIntDay('lunes'),
      subject: 'Fisica',
      hours: 1,
      hoursStart: '02:00 PM	',
      docente: 'Juan',
    }, */
  ])

  function parseIntDay(day) {
    if (day === 'lunes') {
      return 0
    }
    if (day === 'martes') {
      return 1
    }
    if (day === 'miércoles') {
      return 2
    }
    if (day === 'jueves') {
      return 3
    }
    if (day === 'viernes') {
      return 4
    }
    if (day === 'sábado') {
      return 5
    }
  }

  const [schedule, setSchedule] = useState([
    ['horas', 'lunes', 'martes', 'miércoles', 'jueves', 'viernes', 'sábado'],
    ['07:00 AM', '', '', '', '', '', ''],
    ['08:00 AM', '', '', '', '', '', ''],
    ['09:00 AM', '', '', '', '', '', ''],
    ['10:00 AM', '', '', '', '', '', ''],
    ['11:00 AM', '', '', '', '', '', ''],
    ['12:00 PM', '', '', '', '', '', ''],
    ['01:00 PM', '', '', '', '', '', ''],
    ['02:00 PM', '', '', '', '', '', ''],
    ['03:00 PM', '', '', '', '', '', ''],
    ['04:00 PM', '', '', '', '', '', ''],
    ['05:00 PM', '', '', '', '', '', ''],
    ['06:00 PM', '', '', '', '', '', ''],
    ['07:00 PM', '', '', '', '', '', ''],
    ['08:00 PM', '', '', '', '', '', ''],
    ['09:00 PM', '', '', '', '', '', ''],
    ['10:00 PM', '', '', '', '', '', ''],
  ])

  function addSubjectIntoSchedule(subject) {}

  return (
    <main className=''>
      <h2>Horario de este semestre</h2>

      <section>
        <table>
          <thead>
            <tr>
              {schedule[0].map((subject) => (
                <th key={subject}>{subject}</th>
              ))}
            </tr>
          </thead>
          <tbody>
            {schedule.slice(1).map((row, index) => {
              return (
                <tr key={index}>
                  <td>{row[0]}</td>
                  {row.slice(1).map((subject, indexSubject) => {
                    return materias.map((materia) => {
                      if (
                        materia.hoursStart == row[0] &&
                        materia.day == indexSubject
                      ) {
                        return (
                          <td
                            key={subject}
                            rowSpan={materia.hours}
                            className='bg-red-500'
                          >
                            {materia.subject}
                          </td>
                        )
                      }
                      return <td key={subject}></td>
                    })
                  })}
                </tr>
              )
            })}
          </tbody>
        </table>
      </section>
    </main>
  )
}
