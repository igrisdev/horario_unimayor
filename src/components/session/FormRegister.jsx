export const FormRegister = () => {
  return (
    <>
      <form className='flex flex-col gap-3'>
        <div className='flex items-center mt-2 gap-4'>
          <div className='block relative '>
            <label
              for='firstName'
              className='block text-gray-600 cursor-text text-sm leading-[140%] font-normal mb-2'
            >
                Nombre
            </label>
            <input
              type='text'
              id='firstName'
              name='firstName'
              className='rounded border border-gray-200 text-sm w-full font-normal leading-[18px] text-black tracking-[0px] appearance-none block h-11 m-0 p-[11px] focus:ring-2 ring-offset-2  ring-gray-900 outline-0'
            />
          </div>
          <div className='block relative'>
            <label
              for='lastName'
              className='block text-gray-600 cursor-text text-sm leading-[140%] font-normal mb-2'
            >
              Apellido/s
            </label>
            <input
              type='text'
              id='lastName'
              name='lastName'
              className='rounded border border-gray-200 text-sm w-full font-normal leading-[18px] text-black tracking-[0px] appearance-none block h-11 m-0 p-[11px] focus:ring-2 ring-offset-2  ring-gray-900 outline-0'
            />
          </div>
        </div>
        <div className='block relative'>
          <label
            for='email'
            className='block text-gray-600 cursor-text text-sm leading-[140%] font-normal mb-2'
          >
            Email
          </label>
          <input
            type='text'
            id='email'
            name='email'
            className='rounded border border-gray-200 text-sm w-full font-normal leading-[18px] text-black tracking-[0px] appearance-none block h-11 m-0 p-[11px] focus:ring-2 ring-offset-2  ring-gray-900 outline-0'
          />
        </div>
        <div className='block relative'>
          <label
            for='password'
            className='block text-gray-600 cursor-text text-sm leading-[140%] font-normal mb-2'
          >
            Contraseña
          </label>
          <input
            type='text'
            id='password'
            name='password'
            className='rounded border border-gray-200 text-sm w-full font-normal leading-[18px] text-black tracking-[0px] appearance-none block h-11 m-0 p-[11px] focus:ring-2 ring-offset-2 ring-gray-900 outline-0'
          />
        </div>

        <div className='block relative'>
          <label
            for='revalidatePassword'
            className='block text-gray-600 cursor-text text-sm leading-[140%] font-normal mb-2'
          >
            Misma contraseña
          </label>
          <input
            type='text'
            id='revalidatePassword'
            className='rounded border border-gray-200 text-sm w-full font-normal leading-[18px] text-black tracking-[0px] appearance-none block h-11 m-0 p-[11px] focus:ring-2 ring-offset-2 ring-gray-900 outline-0'
          />
        </div>

        <button
          type='submit'
          className='bg-[#7747ff] w-max m-auto px-6 py-2 rounded text-white text-sm font-normal'
        >
          Crear cuenta
        </button>
      </form>
      <div className='flex gap-1 items-center justify-center mt-3'>
        Ya tienes cuenta
        <a
          className='text-[#7747ff]'
          href='/login'
        >
          Inicia Sesión
        </a>
      </div>
    </>
  )
}
