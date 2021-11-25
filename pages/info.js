import Head from 'next/head'

export default function Info() {
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
        style={{ backgroundImage: 'url("/girl-g648dbe2ea_1920.jpg")' }}
        className="bg-cover bg-no-repeat bg-center w-full h-screen relative flex items-center justify-center after:bg-yellow-500 after:bg-opacity-50 after:w-full after:h-screen after:z-0 after:absolute after:top-0 after:left-0 after:right-0 after:bottom-0">

        <main className="container mx-auto z-50 relative p-10 w-full h-full overflow-y-auto md:w-full md:h-auto">

          <div className="flex flex-col items-center justify-between gap-10 lg:grid lg:grid-cols-2 lg:grid-rows-1 lg:flex-row">

            <div className="bg-black bg-opacity-70 text-white p-7">
              {/* Doação pelo Cartão */}
              <h2 className="text-4xl uppercase border-b border-white pb-3 mb-5 font-bold">
                CARTÃO DE CRÉDITO
              </h2>

              <p className="text-xl mb-5">
                Doe diretamente na fatura de seu cartão de crédito. Você pode doar mensalmente ou em única parcela.
              </p>

              <p className="text-xl mb-16">
                <a className="font-bold border-b pb-px" target="_blank" title="Clique aqui para doar com cartão de cŕedito" href="https://abads.app.vindi.com.br/customer/pages/187084c7-746f-4783-bf52-459ad4c5d406/subscriptions/new">Clique aqui</a> para fazer a sua doação.
              </p>

              {/* Doação de Bens */}
              <h2 className="text-4xl uppercase border-b border-white pb-3 mb-5 font-bold">
                DOAÇÃO DE BENS
              </h2>

              <p className="text-xl mb-5">
                Caso tenha alguma doação a fazer (mobiliário, equipamentos, roupas, alimentos, material de limpeza, etc), entre em contato com nosso setor administrativo e receba as orientações pelo <a href="tel:1129053048" title="(11) 2905-3048" className="font-bold border-b pb-px">(11) 2905-3048</a>
              </p>

              <p className="text-xl mb-5">
                Se preferir, você pode <a href="https://abads.org.br/contato/" title="Escreva aqui a sua mensagem" target="_blank" className="font-bold border-b pb-px">escrevar aqui sua mensagem</a> que retornaremos em breve.
              </p>
            </div>

            {/* Vídeo */}
            <div className="bg-black bg-opacity-70 text-white p-7">
              <h2 className="text-4xl uppercase border-b border-white pb-3 mb-5 font-bold">
                Quem somos
              </h2>

              <p className="mb-5">
                A Associação Brasileira de Assistência e Desenvolvimento Social – ABADS (antiga Pestalozzi de São Paulo), fundada em 1952, é uma Instituição sem fins lucrativos, que atende pessoas com Deficiência Intelectual e Autismo. Oferece seus atendimentos beneficentes, para mais de 980 famílias.
              </p>

              <div className="text-center">
                <div className="spect-w-16 aspect-h-9">
                  <iframe width="560" height="315" src="https://www.youtube.com/embed/0aTyj_VPSLc" title="YouTube video player" frameBorder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
                </div>
              </div>
            </div>

          </div>

        </main>

      </section>
    </>
  )
}
