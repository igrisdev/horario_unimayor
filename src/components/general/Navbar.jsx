'use client'

import { useEffect, useState } from 'react'

import Image from 'next/image'
import Link from 'next/link'
import { usePathname, useSearchParams } from 'next/navigation'
import { useRouter } from 'next/navigation'

import { logout } from '@/lib/actions/session/actionSession'

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

export const Navbar = ({ isLogged, user, userInfo, schoolterms, teachers }) => {
  const searchParams = useSearchParams()
  const pathname = usePathname()
  const { replace } = useRouter()

  const [IsSession] = useState(isLogged)
  const [toggle, setToggle] = useState(false)

  const handleSearch = (term) => {
    const params = new URLSearchParams(searchParams)

    if (term !== '' && term !== 'default') {
      params.set('schedule', term)
    } else {
      params.delete('schedule')
    }

    replace(`${pathname}?${params.toString()}`)
  }

  useEffect(() => {
    function handleSearchStart() {
      const params = new URLSearchParams(searchParams)
      const activeSchoolterm = schoolterms.filter((item) => item.state)[0]?.name
      if (activeSchoolterm) {
        params.set('schedule', activeSchoolterm)
        replace(`${pathname}?${params.toString()}`)
      }
    }

    handleSearchStart()
  }, [])

  useEffect(() => {
    const handleIsLogged = () => {
      setToggle(false)
      if (
        IsSession === false &&
        pathname !== '/login' &&
        pathname !== '/register'
      ) {
        window.location.reload()
      }
    }

    handleIsLogged()
  }, [IsSession, pathname, user])

  function handleToggle() {
    setToggle(!toggle)
  }

  if (pathname === '/register') return null
  if (pathname === '/login') return null

  console.log(teachers)

  return (
    <header className='relative flex justify-between items-center h-20 px-4'>
      <h1 className='text-xl font-semibold'>
        <Link href='/'>
          Horario <span className='text-amber-500'>UniMayor</span>
        </Link>
      </h1>

      <nav>
        <ul className='flex gap-x-4'>
          {user === 'docente' && (
            <li>
              <picture>
                <Link href='/'>
                  <Image
                    className='rounded-md'
                    src='/logo.jpeg'
                    alt='logo'
                    width={70}
                    height={70}
                    objectFit='cover'
                  />
                </Link>
              </picture>
            </li>
          )}
          {user === 'admin' &&
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
            <div>
              {userInfo.firstName} {userInfo.lastName}
            </div>
            <div className='font-medium truncate'>{userInfo.email}</div>
          </div>
          <div className='block sm:hidden'>
            <form className='max-w-sm mx-auto'>
              <select
                className='text-gray-900 text-sm rounded-lg block w-full p-3 outline-none'
                defaultValue={
                  schoolterms.filter((item) => item.state)[0]?.name || 'default'
                }
                name='schedule'
                onChange={(e) => handleSearch(e.target.value)}
              >
                <option value='default'>Periodo Académico</option>
                {schoolterms.map((item) => (
                  <option
                    key={item.id}
                    value={item.name}
                  >
                    {item.name}
                  </option>
                ))}
              </select>
            </form>
          </div>
          <ul className='py-2 text-sm text-gray-700'>
            {user === 'admin' &&
              adminLinks.map((link) => (
                <AdminLinkPhone
                  key={link.href + link.label}
                  {...link}
                  handleToggle={handleToggle}
                />
              ))}
          </ul>
          <form
            action={logout}
            className='block px-4 py-2 text-sm text-gray-700'
          >
            <button>Cerrar Sesión</button>
          </form>
        </nav>
      )}
      <div className='flex gap-x-6 items-center'>
        {IsSession === false && user !== 'docente' ? (
          <Link
            href='/login'
            className='text-amber-500'
          >
            Iniciar Sesión
          </Link>
        ) : (
          <>
            <div className='hidden sm:flex gap-x-2'>
              <form className='flex flex-row gap-x-2'>
                <select
                  className='text-gray-900 text-sm rounded-md block w-full p-2 outline-none'
                  defaultValue={teachers[0]?.id || 'default'}
                  name='schedule'
                  onChange={(e) => handleSearch(e.target.value)}
                >
                  <option value='default'>Docente</option>
                  {teachers.map((item) => (
                    <option
                      key={item.id}
                      value={item.id}
                    >
                      {item.firstName} {item.lastName}
                    </option>
                  ))}
                </select>
              </form>

              <form className='flex flex-row gap-x-2'>
                <select
                  className='text-gray-900 text-sm rounded-md block w-full p-2 outline-none'
                  defaultValue={
                    schoolterms.filter((item) => item.state)[0]?.name ||
                    'default'
                  }
                  name='schedule'
                  onChange={(e) => handleSearch(e.target.value)}
                >
                  <option value='default'>Periodo Académico</option>
                  {schoolterms.map((item) => (
                    <option
                      key={item.id}
                      value={item.name}
                    >
                      {item.name}
                    </option>
                  ))}
                </select>
              </form>
            </div>
            <form
              action={logout}
              className='hidden lg:block p-2 text-sm hover:bg-amber-400 rounded-lg hover:text-black font-medium'
            >
              <button>Cerrar Sesión</button>
            </form>
          </>
        )}
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
