import Image from 'next/image'
import Link from 'next/link'

import { SocialIcon } from 'react-social-icons'

const Footer = () => {
  return (
    <div className="text-sm px-4 pt-8 md:pt-16 mx-auto sm:max-w-full md:px-24 lg:px-52 bg-white-5">
      <div className="grid gap-16 row-gap-10 mb-8 xl:grid-cols-7">
        <div className="flex flex-col md:max-w-md lg:col-span-2 space-y-4">
          <div className="mx-auto md:mx-0 w-44">
            <img src="/logo/mgn_black_2.png" alt="MGN logo oscuro." />
            {/* <Image
              src="/logo/mgn_black_2.png"
              alt="MGN logo oscuro."
              width={3751}
              height={1113}
              objectFit="cover"
              objectPosition="center"
              loading="eager"
              priority="true"
            /> */}
          </div>
          <div className="px-2 md:px-0 max-w-md text-left space-y-4 font-light">
            <p>
              MGN es una empresa 100% comprometida con la legalidad, la
              transparencia y el ambiente. Conocé sobre nuestros pilares en la
              sección de{' '}
              <Link href="/politicas">
                <a className="underline hover:text-178">
                  Políticas Empresariales
                </a>
              </Link>
              .
            </p>
            <p>
              Nuestro interés está en en el aprendizaje, en el valor y la
              innovación. Si deseas aprender más de cómo trabajan las
              tecnologías que ofrecemos, visita nuestra:{' '}
              <Link href="/zona-de-aprendizaje">
                <a className="underline hover:text-178">Zona de Aprendizaje</a>
              </Link>
              .
            </p>
          </div>
        </div>
        <div className="grid grid-cols-2 gap-5 row-gap-8 lg:col-span-5 md:grid-cols-4">
          {/* servicios */}
          <div>
            <Link href="/servicios">
              <a className="font-bold tracking-wide uppercase hover:text-299">
                Servicios
              </a>
            </Link>
            <ul className="mt-2 space-y-2">
              <li>
                <Link href="/servicios">
                  <a className="hover:text-178 font-light">
                    Infraestructura de TI
                  </a>
                </Link>
              </li>
              <li>
                <Link href="/servicios">
                  <a className="hover:text-178 font-light">
                    Consultoría & Análisis
                  </a>
                </Link>
              </li>
              <li>
                <Link href="/servicios">
                  <a className="hover:text-178 font-light">Suscripciones</a>
                </Link>
              </li>
              <li>
                <Link href="/servicios">
                  <a className="hover:text-178 font-light">Colaboración</a>
                </Link>
              </li>
              <li>
                <Link href="/servicios">
                  <a className="hover:text-178 font-light">Seguridad</a>
                </Link>
              </li>
              <li>
                <Link href="/servicios">
                  <a className="hover:text-178 font-light">Soporte</a>
                </Link>
              </li>
            </ul>
          </div>
          {/* soluciones */}
          <div>
            <Link href="/soluciones">
              <a className="font-bold tracking-wide uppercase hover:text-299">
                Soluciones
              </a>
            </Link>
            <ul className="mt-2 space-y-2">
              <li>
                <Link href="/soluciones/infraestructura">
                  <a className="hover:text-178 font-light">Infraestructura</a>
                </Link>
              </li>
              <li>
                <Link href="/soluciones/seguridad">
                  <a className="hover:text-178 font-light">Seguridad</a>
                </Link>
              </li>
              <li>
                <Link href="/soluciones/colaboracion">
                  <a className="hover:text-178 font-light">Colaboración</a>
                </Link>
              </li>
              <li>
                <Link href="/soluciones/nube">
                  <a className="hover:text-178 font-light">Nube</a>
                </Link>
              </li>
              <li>
                <Link href="/soluciones/licenciamiento">
                  <a className="hover:text-178 font-light">Licenciamiento</a>
                </Link>
              </li>
              <li>
                <Link href="/soluciones/energia">
                  <a className="hover:text-178 font-light">Energía</a>
                </Link>
              </li>
              <li>
                <Link href="/soluciones/accesorios">
                  <a className="hover:text-178 font-light">Accesorios</a>
                </Link>
              </li>
            </ul>
          </div>
          {/* socios */}
          <div>
            <Link href="/socios">
              <a className="font-bold tracking-wide uppercase hover:text-299">
                Socios
              </a>
            </Link>
            <ul className="mt-2 space-y-2">
              <li>
                <Link href="/socios">
                  {/* <Link href="/socios/cisco"> */}
                  <a className="hover:text-178 font-light">Cisco</a>
                </Link>
              </li>
              <li>
                <Link href="/socios">
                  {/* <Link href="/socios/pure-storage"> */}
                  <a className="hover:text-178 font-light">Pure Storage</a>
                </Link>
              </li>
              <li>
                <Link href="/socios">
                  {/* <Link href="/socios/sophos"> */}
                  <a className="hover:text-178 font-light">Sophos</a>
                </Link>
              </li>
              <li>
                <Link href="/socios">
                  {/* <Link href="/socios/microsoft-365"> */}
                  <a className="hover:text-178 font-light">Microsoft 365</a>
                </Link>
              </li>
              <li>
                <Link href="/socios">
                  {/* <Link href="/socios/aruba"> */}
                  <a className="hover:text-178 font-light">Aruba</a>
                </Link>
              </li>
              <li>
                <Link href="/socios">
                  {/* <Link href="/socios/pulse-secure"> */}
                  <a className="hover:text-178 font-light">Pulse Secure</a>
                </Link>
              </li>
              <li>
                <Link href="/socios">
                  <a className="hover:text-178 font-light">Ver más...</a>
                </Link>
              </li>
            </ul>
          </div>
          {/* contacto */}
          <div>
            <Link href="/contacto">
              <a className="font-bold tracking-wide uppercase hover:text-299">
                Contacto
              </a>
            </Link>
            <ul className="mt-2 space-y-2">
              <li>
                <a
                  className="font-light"
                  href="tel:+50622207900"
                  rel="noopener noreferrer"
                  target="_blank"
                >
                  Central: <br />
                  <span className="hover:text-178 font-light">
                    +506 2220-7900
                  </span>
                </a>
              </li>
              <li>
                <a
                  className="font-light"
                  href="mailto:comercial@mgn.tech"
                  rel="noopener noreferrer"
                  target="_blank"
                >
                  Correo: <br />
                  <span className="hover:text-178 font-light">
                    comercial@mgn.tech
                  </span>
                </a>
              </li>
              <li>
                <a
                  className="font-light"
                  href="https://ul.waze.com/ul?place=ChIJ6yX18mXhoI8RK5Y-mfAxcBk&ll=9.91279310%2C-83.97544280&navigate=yes&utm_campaign=default&utm_source=waze_website&utm_medium=lm_share_location"
                  rel="noopener noreferrer"
                  target="_blank"
                >
                  Dirección: <br />
                  <span className="hover:text-178 font-light">
                    Cartago, Costa Rica
                  </span>
                </a>
              </li>
              <li>
                <a
                  className="hover:text-178 underline font-light"
                  href="https://support.mgn.tech/hc/es-419/restricted?return_to=https%3A%2F%2Fsupport.mgn.tech%2Fhc%2Fes-419"
                  rel="noopener noreferrer"
                  target="_blank"
                >
                  Plataforma de Soporte
                </a>
              </li>
            </ul>
          </div>
        </div>
      </div>
      <div className="flex flex-col mx-auto items-center justify-between pt-5 pb-5 border-t sm:flex-row">
        <div className="text-xs text-center sm:text-left font-light space-y-2">
          <p>
            Diseño web elaborado por{' '}
            <a
              href="https://www.instagram.com/kardicr/"
              className="underline hover:text-178"
              rel="noopener noreferrer"
              target="_blank"
            >
              Kardí
            </a>
            <br className="inline-block xl:hidden" /> & desarrollado por Code
            MGN.
          </p>
          <p>
            © {new Date().getFullYear()} MGN | MARTINEZGROUP NET S.A.{' '}
            <br className="inline-block xl:hidden" />
            Todos los derechos reservados.
          </p>
        </div>
        <div className="flex items-center mt-4 space-x-4 sm:mt-0">
          <SocialIcon
            url="https://www.facebook.com/mgn.tech.cr"
            style={{ height: 35, width: 35 }}
            bgColor="#f0f0f1"
            fgColor="#4B5563"
          />
          <SocialIcon
            url="https://www.linkedin.com/company/mgn-tech"
            style={{ height: 35, width: 35 }}
            bgColor="#f0f0f1"
            fgColor="#4B5563"
          />
          <SocialIcon
            url="https://www.instagram.com/mgn_tech_cr/"
            style={{ height: 35, width: 35 }}
            bgColor="#f0f0f1"
            fgColor="#4B5563"
          />
          <SocialIcon
            url="https://twitter.com/mgn_tech_cr"
            style={{ height: 35, width: 35 }}
            bgColor="#f0f0f1"
            fgColor="#4B5563"
          />
          <SocialIcon
            url="https://www.youtube.com/channel/UCbIjSkFKDZscb18cShIsrGw"
            style={{ height: 35, width: 35 }}
            bgColor="#f0f0f1"
            fgColor="#4B5563"
          />
        </div>
      </div>
    </div>
  )
}

export default Footer
