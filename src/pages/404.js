import { useEffect } from 'react'

/* import Image from 'next/image' */
import { useRouter } from 'next/router'

import SEO from '../components/SEO'

/* import Error404 from '../../public/404/404.png' */

export default function NotFound() {
  const router = useRouter()

  useEffect(() => {
    setTimeout(() => {
      router.push('/')
    }, 5000)
  }, [])

  return (
    <main>
      {/* seo */}
      <SEO
        title="Error: 404"
        description="Error 404."
        url="https://wwww.mgn.tech"
        image="/og/mgn.jpeg"
        alt="MGN: Error 404."
      />

      {/* hero */}
      <section>
        <div className="flex flex-col md:flex-row mx-auto p-6 md:py-0 items-center">
          <div className="flex flex-col text-center items-center w-full space-y-8 py-5 md:py-20">
            <div>
              <h1 className="text-4xl md:text-5xl lg:text-7xl font-bold">
                ¡Oh no! Error 404.
              </h1>
            </div>
          </div>
        </div>
      </section>

      {/* techy */}
      <section>
        <div className="flex flex-col mx-auto px-5 pb-12 items-center justify-center space-y-4">
          <div className="max-w-md mx-auto">
            <img
              src="/404/404.png"
              alt="MGN: Error 404."
              width="1215"
              height="1126"
            />
            {/*  <Image
              src={Error404}
              alt="MGN: Error 404."
              width={1215}
              height={1126}
              objectFit="cover"
              objectPosition="center"
              loading="eager"
              priority="true"
              placeholder="blur"
            /> */}
          </div>
          <div className="text-center w-full lg:w-3/4 mx-auto">
            <p className="leading-relaxed text-md md:text-xl px-4 py-2 font-semibold text-178">
              Lo sentimos, algo ha salido mal.
              <br className="hidden lg:inline-block" /> En unos segundos serás
              redirigido a la página de Inicio.
            </p>
          </div>
        </div>
      </section>
    </main>
  )
}
