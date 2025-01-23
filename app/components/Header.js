import { useState } from 'react'

/* import Image from 'next/image' */
import Link from 'next/link'
import { useRouter } from 'next/router'

import { Transition, Menu } from '@headlessui/react'

/* component */
const SelectPartnership = ({ handle, router }) => {
  return (
    <Menu>
      <Menu.Button className="hover:text-opacity-100 focus:outline-none font-light">
        <a
          className={
            router.pathname == '/socios' || router.pathname == '/socios/otros'
              ? 'active'
              : ''
          }
        >
          Socios
        </a>
      </Menu.Button>

      <Transition
        enter="transition ease-out duration-100"
        enterFrom="transform opacity-0 scale-95"
        enterTo="transform opacity-100 scale-100"
        leave="transition ease-in duration-75"
        leaveFrom="transform opacity-100 scale-100"
        leaveTo="transform opacity-0 scale-95"
      >
        <Menu.Items className="flex flex-col relative lg:absolute overflow-hidden mt-2 p-5 space-y-2 divide-y rounded-lg lg:rounded-md lg:shadow-md lg:border-b-4 lg:border-299 divide-gray-300 bg-white">
          <Menu.Item>
            <div>
              <Link href="/socios">
                <a
                  className={`${
                    router.pathname == '/socios' ? 'active' : ''
                  } select`}
                  onClick={handle}
                >
                  Principales
                </a>
              </Link>
            </div>
          </Menu.Item>
          <Menu.Item>
            <div className="pt-2">
              <Link href="/socios/complementarios">
                <a
                  className={`${
                    router.pathname == '/socios/otros' ? 'active' : ''
                  } select`}
                  onClick={handle}
                >
                  Complementarios
                </a>
              </Link>
            </div>
          </Menu.Item>
        </Menu.Items>
      </Transition>
    </Menu>
  )
}

const Header = () => {
  const [active, setActive] = useState(false)
  const router = useRouter()

  const handleClick = () => {
    setActive(!active)
    let button = document.getElementById('btnMenu')
    button.classList.toggle('opened')
    button.setAttribute('aria-expanded', button.classList.contains('opened'))
  }

  return (
    <header className="sticky top-0 z-50 body-font bg-white">
      <div className="flex flex-wrap flex-col lg:flex-row mx-auto px-3 lg:px-10 pt-5 lg:py-5 lg:items-center">
        <div className="flex items-center align-middle">
          {/* MGN logo & title */}
          <Link href="/">
            <a className="flex items-center mb-4 lg:mb-0">
              <div className="w-32 mt-2">
                <img src="/logo/mgn.png" alt="MGN logo oficial." />
                {/* <Image
                  src="/logo/mgn.png"
                  alt="MGN logo oficial."
                  width={3751}
                  height={1113}
                  objectFit="cover"
                  objectPosition="center"
                  priority="true"
                /> */}
              </div>
              <div className="mx-6 h-10 border border-black-5" />
              <div className="flex flex-col text-md font-bold leading-none">
                <span>Valor</span>
                <span>e Innovación</span>
              </div>
            </a>
          </Link>

          {/* hamburger */}
          <button
            className="btn lg:hidden hover:text-white"
            onClick={handleClick}
            aria-label="Menu"
            id="btnMenu"
          >
            <svg
              width="40"
              height="40"
              viewBox="0 0 100 100"
              fill="none"
              stroke="currentColor"
            >
              <path
                className="line line1"
                d="M 20,29.000046 H 80.000231 C 80.000231,29.000046 94.498839,28.817352 94.532987,66.711331 94.543142,77.980673 90.966081,81.670246 85.259173,81.668997 79.552261,81.667751 75.000211,74.999942 75.000211,74.999942 L 25.000021,25.000058"
              />
              <path className="line line2" d="M 20,50 H 80" />
              <path
                className="line line3"
                d="M 20,70.999954 H 80.000231 C 80.000231,70.999954 94.498839,71.182648 94.532987,33.288669 94.543142,22.019327 90.966081,18.329754 85.259173,18.331003 79.552261,18.332249 75.000211,25.000058 75.000211,25.000058 L 25.000021,74.999942"
              />
            </svg>
          </button>
        </div>

        {/*  desktop && mobile */}
        <nav className="flex flex-wrap text-md text-center font-light space-x-5 mr-5 lg:ml-auto items-center justify-center">
          <div
            className={`${active ? 'fade-in' : 'fade-out'}
            w-full lg:inline-flex lg:flex-grow lg:w-auto`}
          >
            <div
              className="w-full flex flex-col gap-5 px-10 lg:px-0 lg:gap-0 h-screen 
            lg:inline-flex lg:flex-row lg:ml-auto lg:w-auto lg:items-center lg:h-auto
            divide-y divide-gray-300 lg:divide-y-0"
            >
              <Link href="/servicios">
                <a
                  className={`${
                    router.pathname == '/servicios' ? 'active' : ''
                  } select`}
                  onClick={handleClick}
                >
                  Servicios
                </a>
              </Link>
              <Link href="/soluciones">
                <a
                  className={`${
                    router.pathname == '/soluciones' ? 'active' : ''
                  } select`}
                  onClick={handleClick}
                >
                  Soluciones
                </a>
              </Link>
              <div className="px-3 pt-3">
                <SelectPartnership handle={handleClick} router={router} />
              </div>
              <Link href="/politicas">
                <a
                  className={`${
                    router.pathname == '/politicas' ? 'active' : ''
                  } select`}
                  onClick={handleClick}
                >
                  Políticas
                </a>
              </Link>
              <Link href="/contacto">
                <a
                  className={`${
                    router.pathname == '/contacto' ? 'active' : ''
                  } select`}
                  onClick={handleClick}
                >
                  Contacto
                </a>
              </Link>
              <button className="inline-flex items-center border-0 py-2 px-3 rounded-full text-base mt-3 text-white bg-2286 hover:bg-178 focus:outline-none">
                <a
                  className="text-center mx-auto"
                  href="https://support.mgn.tech/hc/es-419/restricted?return_to=https%3A%2F%2Fsupport.mgn.tech%2Fhc%2Fes-419"
                  rel="noopener noreferrer"
                  target="_blank"
                >
                  Soporte
                </a>
              </button>
            </div>
          </div>
        </nav>
      </div>
    </header>
  )
}

export default Header
