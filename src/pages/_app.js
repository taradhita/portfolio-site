import '../styles/globals.css'
import '@fortawesome/fontawesome-svg-core/styles.css'
import Navbar from '../components/Navbar'
import Head from 'next/head'
import { ThemeProvider } from 'next-themes'

export default function App ({ Component, pageProps }) {

  return (
    <>
      <Head>
        <title>Nadia Taradhita | Back End Developer</title>
      </Head>
        <ThemeProvider attribute="class">
        <Navbar />
        <Component {...pageProps} />
      </ThemeProvider>
    </>
  )
}