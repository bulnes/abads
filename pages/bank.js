import Head from 'next/head'

export const config = { amp: true }

export default function Bank() {
  const dadosBancarios = [{
    agencia: '0584-3',
    conta: '11.000-0',
    banco: 'Banco do Brasil'
  },{
    agencia: '0108',
    conta: '13-002525-9',
    banco: 'Banco Santander'
  },{
    agencia: '0312',
    conta: '0320839-7',
    banco: 'Banco Bradesco'
  },{
    agencia: '0001',
    conta: '0241280-2',
    banco: 'Banco Digimais'
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
        style={{ backgroundImage: 'url("/church-of-the-king-j9jZSqfH5YI-unsplash.jpg")' }}
        className="bg-cover bg-no-repeat bg-center w-full h-full relative flex items-center justify-center after:bg-blue-500 after:bg-opacity-50 after:w-full after:h-full after:z-0 after:absolute after:top-0 after:left-0 after:right-0 after:bottom-0">

        <main className="container mx-auto z-50 relative p-10 m-10 md:mx-0 bg-black bg-opacity-70 text-white w-11/12 md:w-full h-full overflow-y-auto md:h-auto">

          <div>
            <h1 className="text-4xl uppercase border-b border-white pb-3 mb-5 font-bold">
              Doe pelo seu banco
            </h1>

            <div className="flex items-start justify-center flex-col gap-3 p-5 text-lg boder border-white border hover:bg-white hover:text-black hover:border-black">
              <div>CNPJ: <span className="font-bold block md:inline-block">60.805.975/0001-19</span></div>
              <div>Favorecido: <span className="font-bold block md:inline-block">Associação Brasileira de Assistência e Desenvolvimento Social – ABADS</span></div>
            </div>

            <div className="grid grid-cols-1 grid-rows-4 gap-5 md:grid-cols-4 md:grid-rows-1 py-3">

              {dadosBancarios.map((d,k) => (
                <div key={k} className="pt-5 px-5 grid grid-cols-1 grid-rows-3 gap-3 text-lg boder border-white border hover:bg-white hover:text-black hover:border-black">
                  <div>Agência <span className="font-bold block">{d.agencia}</span></div>
                  <div>C/C <span className="font-bold block">{d.conta}</span></div>
                  <div className="font-bold">{d.banco}</div>
                </div>
              ))}

            </div>            
          </div>

        </main>

      </section>

    </>
  )
}