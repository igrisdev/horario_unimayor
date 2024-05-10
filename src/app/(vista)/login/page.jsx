export default function Login() {
  return (
    <main className='grid place-content-center h-screen'>
      <div class='max-w-md relative flex flex-col p-4 rounded-md text-black bg-white'>
        <div class='text-2xl font-bold mb-2 text-[#1e0e4b] text-center'>
          Iniciar sesión en <span class='text-[#7747ff]'>Horario UniMayor</span>
        </div>
        <form class='flex flex-col gap-3'>
          <div class='block relative'>
            <label
              for='email'
              class='block text-gray-600 cursor-text text-sm leading-[140%] font-normal mb-2'
            >
              Email
            </label>
            <input
              type='text'
              id='email'
              name='email'
              class='rounded border border-gray-200 text-sm w-full font-normal leading-[18px] text-black tracking-[0px] appearance-none block h-11 m-0 p-[11px] focus:ring-2 ring-offset-2  ring-gray-900 outline-0'
            />
          </div>
          <div class='block relative'>
            <label
              for='password'
              class='block text-gray-600 cursor-text text-sm leading-[140%] font-normal mb-2'
            >
              Contraseña
            </label>
            <input
              type='text'
              id='password'
              name='password'
              class='rounded border border-gray-200 text-sm w-full font-normal leading-[18px] text-black tracking-[0px] appearance-none block h-11 m-0 p-[11px] focus:ring-2 ring-offset-2 ring-gray-900 outline-0'
            />
          </div>

          <button
            type='submit'
            class='bg-[#7747ff] w-max m-auto px-6 py-2 rounded text-white text-sm font-normal'
          >
            Iniciar Sesión
          </button>
        </form>
        <div class='flex gap-1 items-center justify-center mt-3'>
          No tienes cuenta
          <a
            class='text-[#7747ff]'
            href='/register'
          >
            Crea una
          </a>
        </div>
      </div>
    </main>
  )
}
