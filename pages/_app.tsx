import '@styles/globals.css'
import type { AppProps } from 'next/app'
import Navbar from '@components/Navbar'
import Footer from '@components/Footer'
import Head from 'next/head'
import styled from 'styled-components'
import { Provider } from 'react-redux'
import store from 'redux/store'

const Main = styled.div`
  min-height: 100vh;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
`

export default function App({ Component, pageProps }: AppProps) {
  return (
    <Provider store={store}>
      <Main>
        <Head>
          <title>Marvel Comics Store</title>
          <meta name="description" content="Mock website by Arthur tabbal" />
          <meta name="viewport" content="width=device-width, initial-scale=1" />
          <link rel="icon" href="/favicon.ico" />
        </Head>
        <Navbar />
        <Component {...pageProps} />
        <Footer />
      </Main>
    </Provider>
  )
}
