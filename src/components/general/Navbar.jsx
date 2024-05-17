'use client'
import Image from 'next/image'
import Link from 'next/link'
import { usePathname } from 'next/navigation'
import { useState } from 'react'

const adminLinks = [
  { href: '/dashboard/user', label: 'Usuario' },
  { href: '/dashboard/subject', label: 'Materias' },
  { href: '/dashboard/environment', label: 'Ambiente' },
  { href: '/dashboard/schoolterm', label: 'Periodo Académico' },
  { href: '/dashboard/schedule', label: 'Horario' },
]

const AdminLink = ({ href, label, ...pros }) => {
  const pathname = usePathname()

  return (
    <li {...pros}>
      <Link
        className={`hover:underline hover:text-amber-500 ${
          pathname.includes(href) && 'text-amber-500'
        }`}
        href={href}
      >
        {label}
      </Link>
    </li>
  )
}

const AdminLinkPhone = ({ href, label, handleToggle, ...pros }) => {
  const pathname = usePathname()

  return (
    <li {...pros}>
      <Link
        href={href}
        onClick={handleToggle}
        className={`block px-4 py-2 ${
          pathname.includes(href) && 'text-amber-600'
        }`}
      >
        {label}
      </Link>
    </li>
  )
}

export const Navbar = () => {
  const pathname = usePathname()

  const [toggle, setToggle] = useState(false)

  const isSession = true

  function handleToggle() {
    setToggle(!toggle)
  }

  if (pathname === '/register') return null
  if (pathname === '/login') return null

  return (
    <header className='relative flex justify-between items-center h-20 px-4'>
      <h1 className='text-xl font-semibold'>
        <Link href='/'>
          Horario <span className='text-amber-500'>UniMayor</span>
        </Link>
      </h1>

      <nav>
        <ul className='flex gap-x-4'>
          {isSession === false && (
            <li>
              <picture>
                <Image
                  className='rounded-md'
                  src='/logo.jpeg'
                  alt='logo'
                  width={70}
                  height={70}
                  objectFit='cover'
                />
              </picture>
            </li>
          )}
          {isSession === true &&
            adminLinks.map((link) => (
              <AdminLink
                key={link.href + link.label}
                {...link}
                className='hidden lg:block'
              />
            ))}
        </ul>
      </nav>

      {toggle && (
        <nav className='absolute right-4 top-20 z-10 bg-slate-200 divide-y divide-gray-100 rounded-lg shadow w-44 block lg:hidden'>
          <div className='px-4 py-3 text-sm text-gray-900'>
            <div>Bonnie Green</div>
            <div className='font-medium truncate'>name@flowbite.com</div>
          </div>
          <div className='block sm:hidden'>
            <form className='max-w-sm mx-auto'>
              <select
                className='text-gray-900 text-sm rounded-lg block w-full p-3 outline-none'
                defaultValue='default'
              >
                <option value='default'>Periodo Académico</option>
                <option value='1'>2023-1</option>
                <option value='2'>2023-2</option>
              </select>
            </form>
          </div>
          <ul className='py-2 text-sm text-gray-700'>
            {isSession === true &&
              adminLinks.map((link) => (
                <AdminLinkPhone
                  key={link.href + link.label}
                  {...link}
                  handleToggle={handleToggle}
                />
              ))}
          </ul>
          <div className='py-2'>
            <a
              href='#'
              className='block px-4 py-2 text-sm text-gray-700'
            >
              Sign out
            </a>
          </div>
        </nav>
      )}
      <div className='flex gap-x-6 items-center'>
        <div className='hidden sm:block'>
          <form className='max-w-sm mx-auto'>
            <select
              className='text-gray-900 text-sm rounded-lg block w-full p-2 outline-none'
              defaultValue='default'
            >
              <option value='default'>Periodo Académico</option>
              <option value='1'>2023-1</option>
              <option value='2'>2023-2</option>
            </select>
          </form>
        </div>
        <div className='flex items-center justify-center size-10 bg-amber-100 rounded-full font-semibold text-black text-xl'>
          J
        </div>
        <div className='lg:hidden flex items-center bg-slate-200/40  rounded-lg text-black p-1'>
          <button onClick={handleToggle}>
            <svg
              xmlns='http://www.w3.org/2000/svg'
              width='32'
              height='32'
              viewBox='0 0 24 24'
            >
              <path
                fill='currentColor'
                d='M3 18h18v-2H3zm0-5h18v-2H3zm0-7v2h18V6z'
              />
            </svg>
          </button>
        </div>
      </div>
    </header>
  )
}
