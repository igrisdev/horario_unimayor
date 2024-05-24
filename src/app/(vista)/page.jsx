'use client'
import { useState } from 'react'

export default function Home() {
  const [materias, setMaterias] = useState([
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
  ])

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

  const [schedule, setSchedule] = useState([
    ['horas', 'lunes', 'martes', 'miércoles', 'jueves', 'viernes', 'sábado'],
    ['07:00', '', '', '', '', '', ''],
    ['08:00', '', '', '', '', '', ''],
    ['09:00', '', '', '', '', '', ''],
    ['10:00', '', '', '', '', '', ''],
    ['11:00', '', '', '', '', '', ''],
    ['12:00', '', '', '', '', '', ''],
    ['13:00', '', '', '', '', '', ''],
    ['14:00', '', '', '', '', '', ''],
    ['15:00', '', '', '', '', '', ''],
    ['16:00', '', '', '', '', '', ''],
    ['17:00', '', '', '', '', '', ''],
    ['18:00', '', '', '', '', '', ''],
    ['19:00', '', '', '', '', '', ''],
    ['20:00', '', '', '', '', '', ''],
    ['21:00', '', '', '', '', '', ''],
    ['22:00', '', '', '', '', '', ''],
  ])

  return (
    <main className=''>
      <h2>Horario de este semestre</h2>
      <section>
        <table className='w-full'>
          <thead>
            <tr>
              {schedule[0].map((subject) => (
                <th key={subject}>{subject}</th>
              ))}
            </tr>
          </thead>
          <tbody>
            {schedule.slice(1).map((row, index) => (
              <tr key={index}>
                <td>{row[0]}</td>
                {row.slice(1).map((_, colIndex) => {
                  const matchingSubject = materias.find(
                    (materia) =>
                      materia.day === colIndex &&
                      parseInt(materia.hoursStart.split(':')[0]) ===
                        index + 7 &&
                      parseInt(materia.hoursEnd.split(':')[0]) > index + 7
                  )

                  if (matchingSubject) {
                    const endHour = parseInt(
                      matchingSubject.hoursEnd.split(':')[0]
                    )
                    return (
                      <td
                        key={`${index}-${colIndex}`}
                        rowSpan={endHour - (index + 7)}
                        className='bg-red-500/10'
                      >
                        {matchingSubject.subject}
                      </td>
                    )
                  }
                  return <td key={`${index}-${colIndex}`}></td>
                })}
              </tr>
            ))}
          </tbody>
        </table>
      </section>
    </main>
  )
}
