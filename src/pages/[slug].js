import React from 'react'

import { useRouter } from 'next/router'

import { LazyLoadImage } from 'react-lazy-load-image-component'
import 'react-lazy-load-image-component/src/effects/blur.css'

import SEO from '../components/SEO'

import { PortableText } from '@portabletext/react'
import { sanityClient, urlFor } from '../lib/sanity'

const PortableTextComponents = {
  types: {
    image: (post) => {
      return (
        <LazyLoadImage
          className="w-3/4 mx-auto object-cover object-center rounded-3xl"
          src={post.value.asset.url}
          alt={post.value.alt}
          effect="blur"
        />
      )
    },
  },
}

export default function Activades({ activities }) {
  const router = useRouter()

  if (router.isFallback) {
    return (
      <div className="flex flex-col space-y-2">
        <div className="inline-flex mx-auto items-center justify-center space-x-2 animate-pulse">
          <div className="w-8 h-8 bg-2286 rounded-full"></div>
          <div className="w-8 h-8 bg-299 rounded-full"></div>
          <div className="w-8 h-8 bg-2112 rounded-full"></div>
        </div>
        <div className="mx-auto animate-pulse">
          <span>Cargando... </span>
        </div>
      </div>
    )
  }
  return (
    <main>
      {/* seo */}
      <SEO
        title={activities.title}
        description={activities.preview}
        url={`https://wwww.mgn.tech/aprendizaje/actividades/${activities.slug}`}
        image={urlFor(activities.mainImage).url()}
        alt={activities.preview}
      />

      {/* actividad */}
      <section>
        <div className="bg-gradient-3 bg-cover">
          <article className="max-w-4xl flex flex-col mx-auto px-5 py-6 items-center justify-center">
            <div className="flex flex-col px-5 py-12 mx-auto space-y-12">
              <div>
                <div className="mx-auto text-center">
                  <h1 className="mx-auto text-5xl md:text-6xl lg:text-7xl xl:text-8xl font-bold">
                    {activities.title}
                  </h1>
                </div>
                <div className="mx-auto w-1/2 rounded-lg overflow-hidden">
                  <LazyLoadImage
                    className="w-full mx-auto object-cover object-center"
                    src={urlFor(activities.mainImage).url()}
                    alt={activities.title}
                    effect="blur"
                  />
                </div>
                <div className="flex flex-col sm:flex-row mt-10">
                  <div className="sm:w-1/3 text-center sm:pr-8 sm:py-8">
                    <div className="w-32 h-32 rounded-full inline-flex items-center justify-center bg-gray-50 border-1 border-2112">
                      <LazyLoadImage
                        className="p-4 rounded object-cover object-center"
                        src={urlFor(activities.secondaryImage).url()}
                        alt={activities.title}
                        effect="blur"
                      />
                    </div>
                    <div className="flex flex-col items-center text-center justify-center space-y-2">
                      <h2 className="font-medium title-font mt-4 text-lg">
                        {activities.title}
                      </h2>
                      <div className="w-12 h-1 bg-2112 rounded mt-2 mb-4"></div>
                      <div className="text-left space-y-2">
                        <p>
                          <span className="font-semibold">Fecha:</span>{' '}
                          {new Date(activities.date).toLocaleDateString()}
                        </p>
                        <p>
                          <span className="font-semibold">Lugar:</span>{' '}
                          {activities.place}
                        </p>
                        <p>
                          <span className="font-semibold">Descripción:</span>{' '}
                          {activities.preview}
                        </p>
                        <p>
                          <span className="font-semibold">Etiquetas:</span>{' '}
                          {activities.categories.join(' ')}
                        </p>
                      </div>
                    </div>
                  </div>
                  <div className="sm:w-2/3 sm:pl-8 sm:py-8 sm:border-l sm:border-t-0 border-t mt-2 pt-2 sm:mt-0 prose lg:prose-xl max-w-full">
                    <PortableText
                      value={activities.body}
                      components={PortableTextComponents}
                    />
                  </div>
                </div>
              </div>
            </div>
          </article>
        </div>
      </section>
    </main>
  )
}

export async function getStaticPaths() {
  const paths = await sanityClient.fetch(
    `*[_type == "activity" && defined(slug.current)]{
        "params": {
            "slug": slug.current
        }
    }`
  )

  return {
    paths,
    fallback: true,
  }
}

export async function getStaticProps({ params }) {
  const { slug } = params
  const activities = await sanityClient.fetch(
    `*[_type == "activity" && slug.current == $slug][0] {
        _id,
        title,
        released,
        slug,
        mainImage,
        secondaryImage,
        categories,
        date,
        preview,
        body,
        categories,
        place,
    }`,
    { slug }
  )

  return {
    props: { activities },
    revalidate: 10,
  }
}
