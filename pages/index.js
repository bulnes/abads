import Head from 'next/head'

export default function Home() {
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

      <main className="container mx-auto mb-5">
        <h1 className="text-5xl font-thin grid grid-cols-1 grid-rows-2 lg:grid-rows-1 lg:grid-cols-2 gap-5 items-center">
          <div>Faça sua doação <span className="font-light">e Abrace a ABADS</span></div>
          <div className="block h-px bg-black w-full"></div>
        </h1>
      </main>
    </>
  )
}
