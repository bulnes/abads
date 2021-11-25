import Head from 'next/head'

export default function Phone() {
  const phones = [{
    tel: '0500 508 0707',
    value: '7,00',
  },{
    tel: '0500 508 0720',
    value: '20,00',
  },{
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
        className="bg-cover bg-no-repeat bg-center w-full h-screen relative flex items-center justify-center after:bg-green-500 after:bg-opacity-50 after:w-full after:h-screen after:z-0 after:absolute after:top-0 after:left-0 after:right-0 after:bottom-0">

        <main className="container mx-auto z-50 relative p-10 w-full h-full overflow-y-auto md:w-full md:h-auto">

          <div className="flex flex-col items-center justify-between gap-10 lg:grid lg:grid-cols-2 lg:grid-rows-1 lg:flex-row">

            {/* Doação pelo PIX */}
            <div className="bg-black bg-opacity-70 text-white p-7">
              <h2 className="text-4xl uppercase border-b border-white pb-3 mb-5 font-bold">
                Doe pelo PIX
              </h2>

              <p className="text-xl mb-5">
                Faça suas doações pelo <span className="font-bold border-b pb-px">PIX</span> utilizando a chave: <span className="inline-block font-bold text-2xl border border-px p-3 mt-3 mx-auto hover:bg-white hover:text-black hover:border-black">abads@abads.org.br</span>
              </p>

              <p className="text-xl">
                Em casa de dúvidas, fala conosco pelo e-mail <a href="mail:doador@abads.org.br" title="doador@abads.org.br" className="font-bold text-2xl border-b pb-px">doador@abads.org.br</a>
              </p>
            </div>

            {/* DOação pelo telefone */}
            <div className="bg-black bg-opacity-70 text-white p-7">
              <h2 className="text-4xl uppercase border-b border-white pb-3 mb-5 font-bold">
                Doe pelo telefone
              </h2>

              <div className="grid grid-rows-3 grid-cols-1 lg:grid-rows-1 lg:grid-cols-3 gap-3 mb-5 text-center">
                {phones.map(p => (
                  <p className="bg-black bg-opacity-40 rounded border border-white p-5 hover:bg-white hover:text-black hover:border-black">
                    <a href="tel:0500 508 0707" title="0500 508 0707" className="inline-block text-center font-bold border-b pb-px text-2xl mb-3">{p.tel}</a> PARA DOAR <span className="font-bold border-b pb-px">R$ {p.value}</span>
                  </p>
                ))}
              </div>

              <p className="text-sm">
                Custo por chamada = R$ 0,39, para chamadas originadas em terminais fixos de telecomunicações e R$ 0,71, para chamadas originadas de terminais móveis de telecomunicações.
              </p>
            </div>

          </div>
          
        </main>

      </section>

    </>
  )
}