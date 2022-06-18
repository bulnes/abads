import Head from 'next/head'

export const config = { amp: true }

export default function Social() {
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

      <section className="container mx-auto my-5">
        <h1 className="text-5xl font-thin grid grid-cols-1 grid-rows-1 mx-3.5 lg:grid-rows-1 lg:grid-cols-1 gap-5 items-center lg:mx-0 mb-5">
          <div>Redes Sociais</div>
          <div className="block h-px bg-black w-full"></div>
        </h1>

        <iframe src="https://www.r7.com/r7/media/abads.html" frameBorder="0" width="100%" scrolling="no" height="500" className="w-full h-screen lg:h-96"></iframe>
      </section>
    </>
  )
}