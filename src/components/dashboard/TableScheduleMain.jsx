'use client'
import { useState } from 'react'

export function TableScheduleMain({ subjects }) {
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
                  const matchingSubject = subjects.find(
                    (materia) =>
                      materia.day === colIndex &&
                      parseInt(materia.hourStart.split(':')[0]) === index + 7 &&
                      parseInt(materia.hourEnd.split(':')[0]) > index + 7
                  )

                  if (matchingSubject) {
                    const endHour = parseInt(
                      matchingSubject.hourEnd.split(':')[0]
                    )
                    return (
                      <td
                        key={`${index}-${colIndex}`}
                        rowSpan={endHour - (index + 7)}
                        className='bg-red-500/10'
                      >
                        <div>{matchingSubject.subject}</div>
                        <div>{matchingSubject.day}</div>
                        <div>{matchingSubject.hourStart}</div>
                        <div>{matchingSubject.hourEnd}</div>
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
