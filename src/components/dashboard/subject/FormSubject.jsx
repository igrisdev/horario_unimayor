'use client'

export const FormSubject = () => {
  const handleSubmit = (event) => {
    event.preventDefault()
    const data = new FormData(event.target)
    const subject = Object.fromEntries(data)
    console.log(subject)
  }

  return (
    <form
      onSubmit={handleSubmit}
      className='flex flex-col gap-y-8 w-96'
    >
      <div className='flex flex-col max-w-96'>
        <label htmlFor='name'>Nombre de la materia</label>
        <input
          id='name'
          type='text'
          name='name'
          placeholder='Calculo, Ingles ...'
          autoFocus
          className='bg-transparent border-b-[1px] border-gray-300 py-2  outline-none focus:border-b-amber-500'
        />
      </div>
      <div className='flex flex-col max-w-96'>
        <label htmlFor='code'>Código de la materia</label>
        <input
          id='code'
          type='text'
          name='code'
          placeholder='10D0F, FD4 ...'
          autoFocus
          className='bg-transparent border-b-[1px] border-gray-300 py-2  outline-none focus:border-b-amber-500'
        />
      </div>
      <div className='flex flex-col max-w-96'>
        <label htmlFor='hours'>Cantidad de horas de la materia</label>
        <input
          id='hours'
          type='text'
          name='hours'
          placeholder='2, 3, 1 ...'
          autoFocus
          className='bg-transparent border-b-[1px] border-gray-300 py-2  outline-none focus:border-b-amber-500'
        />
      </div>
      <div className='flex flex-col max-w-96'>
        <label htmlFor='description'>Descripción de la materia</label>
        <textarea
          style={{
            'field-sizing': 'content',
            resize: 'none',
            'max-height': '300px',
          }}
          name='description'
          id='description'
          placeholder='lorem ...'
          className='bg-transparent border-b-[1px] border-gray-300 py-2  outline-none focus:border-b-amber-500 min-h-10'
        ></textarea>
      </div>

      <button>da</button>
    </form>
  )
}
