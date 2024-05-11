import Image from 'next/image'
import Link from 'next/link'

const adminLinks = [
  { href: '/dashboard/schedule', label: 'Horario' },
  { href: '/dashboard/users', label: 'Usuarios' },
  { href: '/dashboard/subject', label: 'Materias' },
  { href: '/dashboard/SchoolTerm', label: 'Periodo Académico' },
  { href: '/dashboard/Environment', label: 'Ambiente' },
]

const AdminLink = ({ href, label }) => {
  return (
    <li>
      <Link
        className='hover:underline hover:text-amber-500'
        href={href}
      >
        {label}
      </Link>
    </li>
  )
}

export const Navbar = () => {
  const isSession = true

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
          <form class='max-w-sm mx-auto'>
            <select class='text-gray-900 text-sm rounded-lg block w-full p-2 outline-none'>
              <option selected>Periodo Académico</option>
              <option value=''>2023-1</option>
              <option value=''>2023-2</option>
            </select>
          </form>
        </div>
        <div className='flex items-center justify-center size-10 bg-amber-100 rounded-full'>
          J
        </div>
      </div>
    </header>
  )
}
