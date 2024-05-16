'use client'
import Image from 'next/image'
import Link from 'next/link'
import { usePathname } from 'next/navigation'

const adminLinks = [
  { href: '/dashboard/users', label: 'Docente' },
  { href: '/dashboard/subject', label: 'Materias' },
  { href: '/dashboard/environment', label: 'Ambiente' },
  { href: '/dashboard/schoolTerm', label: 'Periodo Académico' },
  { href: '/dashboard/schedule', label: 'Horario' },
]

const AdminLink = ({ href, label }) => {
  const pathname = usePathname()

  return (
    <li>
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

export const Navbar = () => {
  const pathname = usePathname()

  const isSession = true

  if (pathname === '/register') return null
  if (pathname === '/login') return null

  return (
    <header className='flex justify-between items-center h-20 px-4'>
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
              />
            ))}
        </ul>
      </nav>

      <div className='flex gap-x-2 items-center'>
        <div>
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
      </div>
    </header>
  )
}
