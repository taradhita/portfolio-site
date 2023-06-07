import '../styles/globals.css'
import { config } from '@fortawesome/fontawesome-svg-core'
import '@fortawesome/fontawesome-svg-core/styles.css'
import Navbar from '../components/Navbar'
import Head from 'next/head'
import { useEffect } from 'react'

config.autoAddCss = false

export default function App ({ Component, pageProps }) {

  return (
    <>
    <Head>
      <title>Nadia Taradhita | Back End Developer</title>
    </Head>
    <Navbar />
    <Component {...pageProps} />
    </>
  )
}