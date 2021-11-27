import Head from 'next/head'
import Index from './index'
import Info from './info'
import Bank from './bank'
import Phone from './phone'
import Footer from './footer'
import Social from './social'

export default function Full() {
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

      <Index />

      <Phone />

      <Bank />

      <Info />

      <Footer />

      <Social />
    </>
  )
}
