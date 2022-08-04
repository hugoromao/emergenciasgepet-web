import { AppProps } from 'next/app'
import Head from 'next/head'
import { ThemeProvider } from 'styled-components'
import { SnackbarProvider } from 'notistack'

import GlobalStyles from 'styles/global'
import theme from 'styles/theme'

function App({ Component, pageProps }: AppProps) {
  return (
    <SnackbarProvider
      maxSnack={1}
      // style={{ fontSize: '1.6rem', fontFamily: theme.font.family }}
      autoHideDuration={2000}
      anchorOrigin={{
        vertical: 'bottom',
        horizontal: 'center'
      }}
    >
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
          <link rel="manifest" href="/manifest.json" />
          <meta name="theme-color" content="#06092B" />
          <meta
            name="description"
            content="A simple project starter to work with TypeScript, React, NextJS and Styled Components"
          />
        </Head>
        <GlobalStyles />
        <Component {...pageProps} />
      </ThemeProvider>
    </SnackbarProvider>
  )
}

export default App
