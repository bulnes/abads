import Head from 'next/head'

export const config = { amp: true }

export default function Phone() {
  const phones = [{
    tel: '0500 508 0707',
    value: '7,00',
  }, {
    tel: '0500 508 0720',
    value: '20,00',
  }, {
    tel: '0500 508 0740',
    value: '40,00',
  }]

  return (
    <>
      <Head>
        <meta name="robots" content="noindex,nofollow" />
        <meta name="description" content="Associação Brasileira de Assistência e Desenvolvimento Social" />
        <meta name="author" content="https://www.r7.com" />
        <meta name="publisher" content="https://www.r7.com" />

        <link rel="shortcut icon" type="image/vnd.microsoft.icon" href="/favicon.png" />

        <title>Associação Brasileira de Assistência e Desenvolvimento Social</title>
      </Head>

      <section
        style={{ backgroundImage: 'url("/kuanish-reymbaev-4uAmz2HyPKc-unsplash.jpg")' }}
        className="bg-cover bg-no-repeat bg-center w-full h-full relative flex items-center justify-center after:bg-green-500 after:bg-opacity-50 after:w-full after:h-full after:z-0 after:absolute after:top-0 after:left-0 after:right-0 after:bottom-0">

        <main className="container mx-auto z-50 relative m-10 md:mx-0 w-11/12 md:w-full h-96 md:h-auto">

          <div className="flex flex-col items-center justify-center gap-10 h-full">

            {/* Doação pelo PIX */}
            <div className="bg-black bg-opacity-70 text-white p-7 max-w-xl">
              <h2 className="text-4xl uppercase border-b border-white pb-3 mb-5 font-bold">
                Doe pelo PIX
              </h2>

              <p className="text-2xl">
                Faça suas doações pelo <span className="font-bold border-b pb-px">PIX</span> utilizando a chave: <span className="inline-block font-bold text-2xl border border-px p-3 mt-3 mx-auto hover:bg-white hover:text-black hover:border-black">doe@abads.org.br</span>
              </p>
            </div>

          </div>

        </main>

      </section>

    </>
  )
}