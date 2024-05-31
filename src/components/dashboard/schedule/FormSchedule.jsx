'use client'

import { ButtonLoading } from '@/components/general/ButtonLoading'
import {
  createSchedule,
  updateSchedule,
} from '@/lib/actions/schedule/actionSchedule'

import { useRef } from 'react'
import { toast } from 'sonner'

export function FormSchedule({ isEdit, label, id = null, data = [] }) {
  const ref = useRef()

  const handleSchedule = async (formData) => {
    const subject = createSchedule(formData)

    toast.promise(subject, {
      loading: 'Creando ...',
      success: () => {
        ref.current.reset()
        return `Periodo Académico Creado ✅`
      },
      error: 'Error al crear la materia',
      duration: 1000,
    })
  }

  return (
    <form
      ref={ref}
      action={isEdit ? updateSchedule : handleSchedule}
      className='flex flex-col gap-y-8 w-96'
    >
      {isEdit && (
        <input
          type='hidden'
          name='id'
          value={id}
        />
      )}
      <div className='flex flex-col max-w-96'>
        <label htmlFor='day'>Dia de la semana</label>
        <select
          id='day'
          name='day'
          defaultValue={isEdit ? data[0].day : 'default'}
          className='text-gray-900 text-sm rounded-lg block w-full p-2 outline-none'
        >
          <option value='default'>Seleccionar</option>
          <option value='lunes'>Lunes</option>
          <option value='martes'>Martes</option>
          <option value='miércoles'>Miércoles</option>
          <option value='jueves'>Jueves</option>
          <option value='viernes'>Viernes</option>
          <option value='sábado'>Sábado</option>
        </select>
      </div>

      <div className='flex flex-col max-w-96'>
        <label htmlFor='subjectId'>Materia</label>
        <select
          id='subjectId'
          name='subjectId'
          defaultValue={isEdit ? data[0].subjectId : 'default'}
          className='text-gray-900 text-sm rounded-lg block w-full p-2 outline-none'
        >
          <option value='default'>Seleccionar</option>

          {data.map((item) => {
            return item.allSubject?.map((subject) => {
              return (
                <option
                  key={subject.id}
                  value={subject.id}
                >
                  {subject.name} ({subject.hours} horas)
                </option>
              )
            })
          })}
        </select>
      </div>

      <div className='flex flex-col max-w-96'>
        <label htmlFor='hourStart'>Hora de inicio</label>
        <input
          id='hourStart'
          type='time'
          name='hourStart'
          defaultValue={isEdit ? data[0]?.hourStart : ''}
          className='bg-transparent border-b-[1px] border-gray-300 py-2  outline-none focus:border-b-amber-500'
        />
      </div>

      <div className='flex flex-col max-w-96'>
        <label htmlFor='hourEnd'>Hora de finalización</label>
        <input
          id='hourEnd'
          type='time'
          name='hourEnd'
          defaultValue={isEdit ? data[0]?.hourEnd : ''}
          className='bg-transparent border-b-[1px] border-gray-300 py-2  outline-none focus:border-b-amber-500'
        />
      </div>

      <div className=''>
        <label htmlFor='schoolTermId'>
          Periodo académico {data[0]?.schoolTerm}
        </label>
        <input
          type='hidden'
          name='schoolTermId'
          value={data[0]?.schoolTermId}
        />
      </div>

      <div className='flex flex-col max-w-96'>
        <label htmlFor='userId'>Usuario</label>
        <select
          id='userId'
          name='userId'
          defaultValue={isEdit ? data[0].userId : 'default'}
          className='text-gray-900 text-sm rounded-lg block w-full p-2 outline-none'
        >
          <option value='default'>Seleccionar</option>

          {data.map((item) => {
            return item.allUser?.map((user) => {
              return (
                <option
                  key={user.id}
                  value={user.id}
                >
                  {user.firstName + ' ' + user.lastName}
                </option>
              )
            })
          })}
        </select>
      </div>

      <div className='flex flex-col max-w-96'>
        <label htmlFor='environmentId'>Ambiente</label>
        <select
          id='environmentId'
          name='environmentId'
          defaultValue={isEdit ? data[0].environmentId : 'default'}
          className='text-gray-900 text-sm rounded-lg block w-full p-2 outline-none'
        >
          <option value='default'>Seleccionar</option>

          {data.map((item) => {
            return item.allEnvironment?.map((environment) => {
              return (
                <option
                  key={environment.id}
                  value={environment.id}
                >
                  {environment.typeEnvironment}
                </option>
              )
            })
          })}
        </select>
      </div>

      <div className='flex flex-col max-w-96'>
        <label htmlFor='workId'>Labor para esta materia</label>
        <select
          id='workId'
          name='workId'
          defaultValue={isEdit ? data[0].workId : 'default'}
          className='text-gray-900 text-sm rounded-lg block w-full p-2 outline-none'
        >
          <option value='default'>Seleccionar</option>

          {data.map((item) => {
            return item.allWork?.map((work) => {
              return (
                <option
                  key={work.id}
                  value={work.id}
                >
                  {work.name}
                </option>
              )
            })
          })}
        </select>
      </div>

      <ButtonLoading label={label} />
    </form>
  )
}
