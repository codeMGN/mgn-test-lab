import React, { useState } from 'react'

import Link from 'next/link'

import { LazyLoadImage } from 'react-lazy-load-image-component'
import 'react-lazy-load-image-component/src/effects/blur.css'

import { useKeenSlider } from 'keen-slider/react'
import 'keen-slider/keen-slider.min.css'

import SEO from '../components/SEO'

import { sanityClient, urlFor } from '../lib/sanity'

export default function Actividades({ activities, news }) {
  const [currentSlide, setCurrentSlide] = useState(0)
  const [loaded, setLoaded] = useState(false)
  const [sliderRef, instanceRef] = useKeenSlider(
    {
      initial: 0,
      loop: true,
      slideChanged(slider) {
        setCurrentSlide(slider.track.details.rel)
      },
      created() {
        setLoaded(true)
      },
      dragStart: () => {
        setPause(true)
      },
      dragEnd: () => {
        setPause(false)
      },
    },
    [
      (instanceRef) => {
        let timeout
        let mouseOver = false

        function clearNextTimeout() {
          clearTimeout(timeout)
        }

        function nextTimeout() {
          clearTimeout(timeout)
          if (mouseOver) return
          timeout = setTimeout(() => {
            instanceRef.next()
          }, 5000)
        }

        instanceRef.on('created', () => {
          instanceRef.container.addEventListener('mouseover', () => {
            mouseOver = true
            clearNextTimeout()
          })
          instanceRef.container.addEventListener('mouseout', () => {
            mouseOver = false
            nextTimeout()
          })
          nextTimeout()
        })
        instanceRef.on('dragStarted', clearNextTimeout)
        instanceRef.on('animationEnded', nextTimeout)
        instanceRef.on('updated', nextTimeout)
      },
    ]
  )

  return (
    <main>
      {/* seo */}
      <SEO
        title="Actividades"
        description="MGN presenta la sección oficial de Zona de Aprendizaje. Un departamento encargado 
        de distintas actividades de enseñaza de la tecnología de nuestros socios comerciales. 
        De la manos de los expertos de MGN."
        url="https://wwww.mgn.tech/aprendizaje/actividades"
        image="/og/techy.jpeg"
        alt="MGN: Zona de Aprendizaje."
      />

      {/* carousel */}
      <section>
        <div className="relative">
          <div ref={sliderRef} className="keen-slider">
            {news?.length > 0 &&
              news.map((data, index) => {
                return (
                  <div key={data._id} id={index}>
                    <div className="keen-slider__slide bg-gradient-5 bg-cover">
                      <div className="flex flex-col md:flex-row mx-auto space-y-6 p-12 md:py-0 mb-2 md:mb-0 items-center max-w-7xl">
                        <div className="w-3/4 lg:max-w-2xl">
                          <LazyLoadImage
                            className="rounded object-cover object-center"
                            src={urlFor(data.mainImage).url()}
                            alt={data.title}
                            effect="blur"
                          />
                        </div>
                        <div className="flex flex-col text-center md:text-left items-center md:max-w-4xl md:items-start md:w-1/2 lg:w-full md:pl-8 lg:pl-12 md:py-6 space-y-6">
                          <div>
                            <h1 className="text-4xl sm:text-5xl font-bold">
                              {data.title}
                            </h1>
                          </div>
                          <div>
                            <h3 className="text-xl sm:text-3xl inline-block font-bold bg-white rounded-2xl px-2 mx-1">
                              {data.subtitle}
                            </h3>
                          </div>
                          <div>
                            <p className="mx-auto md:mx-max leading-relaxed text-md md:text-xl font-light">
                              {data.announcement}
                            </p>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                )
              })}
          </div>
          {loaded && instanceRef.current && (
            <>
              <Arrow
                left
                onClick={(e) =>
                  e.stopPropagation() || instanceRef.current?.prev()
                }
              />

              <Arrow
                onClick={(e) =>
                  e.stopPropagation() || instanceRef.current?.next()
                }
              />
            </>
          )}
        </div>
        {loaded && instanceRef.current && (
          <div className="flex py-6 justify-center space-x-4">
            {[
              ...Array(instanceRef.current.track.details.slides.length).keys(),
            ].map((idx) => {
              return (
                <button
                  key={idx}
                  onClick={() => {
                    instanceRef.current?.moveToIdx(idx)
                  }}
                  className={
                    'w-3 h-3 rounded-full cursor-pointer focus:outline-none bg-[#c5c5c5] hover:bg-2286' +
                    (currentSlide === idx ? ' bg-2112' : '')
                  }
                ></button>
              )
            })}
          </div>
        )}
      </section>

      {/* descripcion */}
      <section>
        <div className="">
          <div className="px-6 py-12 mx-auto">
            <div className="flex flex-col text-center w-full space-y-12">
              <div>
                <h1 className="max-w-sm sm:max-w-3xl mx-auto text-3xl sm:text-5xl font-bold">
                  Te presentamos nuestras próximas actividades
                </h1>
              </div>
              <div>
                <p className="md:max-w-3xl mx-auto leading-relaxed text-md md:text-xl font-light">
                  A continuación te mostramos nuestro listado de actividades de
                  <span className="font-bold text-299">
                    {' '}
                    Zona de Aprendizaje
                  </span>
                  . Dale click para obtener más información e inscribirse.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* actividades */}
      <section>
        <div className="max-w-7xl px-5 mx-auto grid grid-cols-1 gap-y-12 lg:grid-cols-2 xl:grid-cols-3 mt-12 mb-24">
          {/*  */}
          {activities?.length > 0 &&
            activities.map((data, index) => {
              return (
                <div key={data._id} id={index}>
                  <div className="max-w-sm h-auto shadow-md rounded-3xl mx-auto pt-0.5 pb-9 duration-300 transform hover:-translate-y-2 bg-white-5">
                    <div className="flex flex-nowrap my-5 mx-5 place-content-between">
                      <div className="flex flex-row">
                        <div className="rounded-full h-2 w-2 flex bg-red-500 mx-1"></div>
                        <div className="rounded-full h-2 w-2 flex bg-yellow-500 mx-1"></div>
                        <div className="rounded-full h-2 w-2 flex bg-green-500 mx-1"></div>
                      </div>
                      <h2 className="tracking-widest text-xs title-font font-medium text-gray-400 mb-1">
                        {new Date(data.date).toLocaleDateString('en-GB')}
                      </h2>
                    </div>
                    <div className="py-2 px-8 mb-2">
                      <div className="flex flex-wrap space-y-6">
                        <div className="text-center">
                          <h2 className="text-xl sm:text-2xl font-bold mx-auto">
                            {data.title}
                          </h2>
                        </div>
                        <div>
                          <LazyLoadImage
                            className="rounded object-cover object-center"
                            src={urlFor(data.mainImage).url()}
                            alt={data.title}
                            effect="blur"
                          />
                        </div>
                        <div>
                          <p className="text-md text-justify">{data.preview}</p>
                        </div>
                        <div className="flex hover:underline mx-auto text-299">
                          <Link href={`/aprendizaje/${data.slug.current}`}>
                            <a className="inline-flex space-x-2 items-center">
                              <span>Ver más</span>
                              <svg
                                xmlns="http://www.w3.org/2000/svg"
                                className="h-6 w-6 animate-pulse"
                                fill="none"
                                viewBox="0 0 24 24"
                                stroke="currentColor"
                              >
                                <path
                                  strokeLinecap="round"
                                  strokeLinejoin="round"
                                  strokeWidth={2}
                                  d="M17 8l4 4m0 0l-4 4m4-4H3"
                                />
                              </svg>
                            </a>
                          </Link>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              )
            })}
          {/*  */}
        </div>
      </section>
    </main>
  )
}

function Arrow(props) {
  return (
    <svg
      onClick={props.onClick}
      className={
        `${props.left ? 'left-1' : 'right-1 left-auto'}` +
        'h-8 w-8 absolute cursor-pointer top-1/2 hover:animate-pulse'
      }
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
    >
      {props.left && (
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth={2}
          d="M10 19l-7-7m0 0l7-7m-7 7h18"
        />
      )}
      {!props.left && (
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth={2}
          d="M14 5l7 7m0 0l-7 7m7-7H3"
        />
      )}
    </svg>
  )
}

export async function getStaticProps() {
  const activities = await sanityClient.fetch(
    `*[_type == "activity"] | order(date desc){
      _id,
      title,
      released,
      slug,
      mainImage,
      categories,
      date,
      preview
    }`
  )

  const news = await sanityClient.fetch(
    `*[_type == "news"] | order(date desc){
      _id,
      title,
      subtitle,
      mainImage,
      announcement,
    }`
  )

  return {
    props: { activities, news },
    revalidate: 10,
  }
}
