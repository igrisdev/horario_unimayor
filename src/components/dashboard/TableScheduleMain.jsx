'use client'
import { useState } from 'react'

export function TableScheduleMain({ subjects }) {
  const [schedule] = useState([
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
        <table className='w-full border-collapse border'>
          <thead>
            <tr>
              {schedule[0].map((subject) => (
                <th
                  key={subject}
                  className='border border-slate-600'
                >
                  {subject}
                </th>
              ))}
            </tr>
          </thead>
          <tbody>
            {schedule.slice(1).map((row, index) => (
              <tr key={index}>
                <td className='border border-slate-600'>{row[0]}</td>
                {row.slice(1).map((_, colIndex) => {
                  const matchingSubject = subjects.find((materia) => {
                    return (
                      materia.day === colIndex &&
                      materia.hourStart === row[0] &&
                      parseInt(materia.hourEnd.split(':')[0]) >
                        row[0].split(':')[0]
                    )
                  })

                  if (matchingSubject) {
                    const endHour = parseInt(
                      matchingSubject.hourEnd.split(':')[0] -
                        matchingSubject.hourStart.split(':')[0]
                    )

                    return (
                      <td
                        key={`${index}-${colIndex}`}
                        rowSpan={endHour}
                        className='bg-green-500/10 text-center'
                      >
                        <div className='font-bold'>
                          {matchingSubject.subject}
                        </div>
                        <div className='flex gap-2 justify-center w-full mt-2 font-medium'>
                          <div>Docente</div>-
                          <div>{matchingSubject.teacher}</div>
                        </div>
                        <div className='flex gap-2 justify-center w-full mt-2'>
                          <div>{matchingSubject.hourStart}</div>-
                          <div>{matchingSubject.hourEnd}</div>
                        </div>
                      </td>
                    )
                  }
                  return (
                    <td
                      key={`${index}-${colIndex}`}
                      className='border border-slate-600'
                    ></td>
                  )
                })}
              </tr>
            ))}
          </tbody>
        </table>
      </section>
    </main>
  )
}
