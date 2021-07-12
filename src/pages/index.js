import SEO from '../components/SEO'

export default function Home() {
  return (
    <main>
      {/* seo */}
      <SEO
        title="Test Lab"
        description="Laboratorio de pruebas de MGN."
        url="https://wwww.mgn.social"
        image="/og/mgn_2.jpeg"
        alt="MGN: Logo oficial."
      />

      {/* hero */}
      <section>
        <div className="bg-gradient-3 bg-cover">
          <div className="flex flex-col-reverse lg:flex-row mx-auto space-y-6 py-6 md:mb-0 items-center">
            <div className="w-full">
              <img
                src="/techy/techy.png"
                alt="MGN: Techy."
                width="1080"
                height="1080"
              />
            </div>
            <div className="flex flex-col w-full p-6">
              <div className="mx-auto max-w-3xl p-12 space-y-10 rounded-3xl shadow-3xl border-b-8 lg:border-r-8 border-17-3930-42 bg-white">
                <div className="flex flex-nowrap">
                  <div className="rounded-full h-3 w-3 flex bg-red-500 mx-1"></div>
                  <div className="rounded-full h-3 w-3 flex bg-yellow-500 mx-1"></div>
                  <div className="rounded-full h-3 w-3 flex bg-green-500 mx-1"></div>
                </div>
                <div className="max-w-md md:max-w-lg lg:max-w-xl">
                  <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold tracking-wide">
                    mgn.social
                    <div className="blink inline-block w-1 h-7 md:h-14 mx-2 bg-black-5" />
                  </h1>
                </div>
                <div className="md:max-w-md lg:max-w-xl">
                  <p className="text-md md:text-2xl font-light">
                    Este es un sitio web de{' '}
                    <span className="text-299 font-semibold">pruebas.</span>
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </main>
  )
}
