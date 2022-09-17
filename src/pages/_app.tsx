import { AppProps } from 'next/app'
import Head from 'next/head'
import { ThemeProvider } from 'styled-components'
import { SnackbarProvider } from 'notistack'
import { NextSeo } from 'next-seo'
import { SessionProvider } from 'next-auth/react'

import GlobalStyles from 'styles/global'
import theme from 'styles/theme'

function App({ Component, pageProps: { session, ...pageProps } }: AppProps) {
  return (
    <SessionProvider session={session}>
      <SnackbarProvider
        maxSnack={1}
        // stPyle={{ fontSize: '1.6rem', fontFamily: theme.font.family }}
        autoHideDuration={2000}
        anchorOrigin={{
          vertical: 'bottom',
          horizontal: 'center'
        }}
      >
        <NextSeo
          title="1º congresso roraimense de trauma e emergências médicas"
          description="17, 18, 19 de novembro."
          canonical="https://congresso-roraimense-de-trauma-e-emergencias-medicas-web.vercel.app/"
          openGraph={{
            url: 'https://congresso-roraimense-de-trauma-e-emergencias-medicas-web.vercel.app/',
            title: '1º congresso roraimense de trauma e emergências médicas',
            description: '17, 18, 19 de novembro.',
            images: [
              {
                url: 'https://congrrmed.herokuapp.com/uploads/thumbnail_NAOAPAGAR_001ab42060.png?width=512&height=511',
                width: 492,
                height: 495,
                alt: 'Imagem do evento',
                type: 'image/jpeg'
              }
            ],
            site_name: '1º congresso roraimense de trauma e emergências médicas'
          }}
        />
        <ThemeProvider theme={theme}>
          <Head>
            <title>
              1º CONGRESSO RORAIMENSE DE TRAUMA E EMERGÊNCIAS MÉDICAS
            </title>
            <link rel="shortcut icon" href="/img/favicon.png" />
            <link rel="apple-touch-icon" href="/img/favicon.png" />
            <link
              rel="shortcut icon"
              href="/img/favicon.svg"
              type="image/x-icon"
            />
            {/* <link rel="manifest" href="/manifest.json" /> */}
            <meta name="theme-color" content="#B71E1A" />
            <meta name="description" content="17, 18, 19 de novembro." />
          </Head>
          <GlobalStyles />
          <Component {...pageProps} />
        </ThemeProvider>
      </SnackbarProvider>
    </SessionProvider>
  )
}

export default App
