import Head from 'next/head'

export const config = { amp: true }

export default function Footer() {
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
        style={{ backgroundImage: 'url("/mi-pham-FtZL0r4DZYk-unsplash.jpg")' }}
        className="bg-cover bg-no-repeat bg-center w-full h-full md:h-96 relative flex items-center justify-center after:bg-red-500 after:bg-opacity-50 after:w-full after:h-full after:z-0 after:absolute after:top-0 after:left-0 after:right-0 after:bottom-0">

        <main className="container mx-auto z-50 relative p-10 m-10 md:mx-0 bg-black bg-opacity-70 text-white w-11/12 md:w-full h-full overflow-y-auto md:h-auto">

          <div className="grid grid-rows-3 grid-cols-1 gap-5 md:grid-rows-1 md:grid-cols-3">

            <div>
              <h3 className="uppercase font-bold mb-5 text-xl">ONDE ESTAMOS</h3>

              <p>
                Av. Morvan Dias de Figueiredo, nº: 2801 – Vila Guilherme, São Paulo (SP) – 02063-000
              </p>
            </div>

            <div>
              <h3 className="uppercase font-bold mb-5 text-xl">FALE COM A ABADS</h3>

              <p className="mb-5">
                <a href="tel:551129053048" title="+ 55 11 2905-3048">+ 55 11 2905-3048</a>
              </p>

              <p className="mb-5">
                Email: <a href="mail:abads@abads.org.br" title="abads@abads.org.br">abads@abads.org.br</a>
              </p>

              <p>
                Atendimentos telefônicos de segunda a sexta (exceto feriados), das 8h00 às 12h00 e 13h00 às 17h00.
              </p>
            </div>

            <div>
              <h3 className="uppercase font-bold mb-5 text-xl">NOSSAS REDES</h3>

              <ul className="list-disc pl-5">
                <li><a href="https://pt-br.facebook.com/abads.org/" title="Facebook" target="_blank">Facebook</a></li>
                <li><a href="https://twitter.com/abads_brasil" title="Twitter" target="_blank">Twitter</a></li>
                <li><a href="https://www.instagram.com/abads_org/" title="Instagram" target="_blank">Instagram</a></li>
              </ul>
            </div>

          </div>

        </main>

      </section>
    </>
  )
}
