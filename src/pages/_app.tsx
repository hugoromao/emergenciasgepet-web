import { AppProps } from 'next/app'
import Head from 'next/head'
import { ThemeProvider } from 'styled-components'
import { SnackbarProvider } from 'notistack'
import { NextSeo } from 'next-seo'

import GlobalStyles from 'styles/global'
import theme from 'styles/theme'

function App({ Component, pageProps }: AppProps) {
  return (
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
        description="24, 25, 26 de novembro."
        openGraph={{
          url: 'https://congresso-roraimense-de-trauma-e-emergencias-medicas-web.vercel.app/',
          title: '1º congresso roraimense de trauma e emergências médicas',
          description: 'Open Graph Description',
          images: [
            {
              url: 'https://congrrmed.herokuapp.com/uploads/Whats_App_Image_2022_07_20_at_15_15_05_b835f2d84e.jpeg?updated_at=2022-08-04T19:42:02.703Z',
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
          <title>1º CONGRESSO RORAIMENSE DE TRAUMA E EMERGÊNCIAS MÉDICAS</title>
          <link rel="shortcut icon" href="/img/favicon.png" />
          <link rel="apple-touch-icon" href="/img/favicon.png" />
          <link
            rel="shortcut icon"
            href="/img/favicon.svg"
            type="image/x-icon"
          />
          {/* <link rel="manifest" href="/manifest.json" /> */}
          <meta name="theme-color" content="#B71E1A" />
          <meta name="description" content="24, 25, 26 de novembro." />
        </Head>
        <GlobalStyles />
        <Component {...pageProps} />
      </ThemeProvider>
    </SnackbarProvider>
  )
}

export default App
