import '../styles/globals.css'
import '@fortawesome/fontawesome-svg-core/styles.css'
import Navbar from '../components/Navbar'
import Head from 'next/head'
import { ThemeProvider } from 'next-themes'
import { AnimatePresence, motion } from 'framer-motion'
import { useRouter } from 'next/router'
import { useRef } from 'react'

export default function App ({ Component, pageProps }) {
  const router = useRouter()
  const pageKey = router.asPath
  return (
    <>
      <Head>
        <title>Nadia Taradhita | Back End Developer</title>
        <link rel="apple-touch-icon" sizes="180x180" href="/apple-touch-icon.png"></link>
        <link rel="icon" type="image/png" sizes="32x32" href="/favicon-32x32.png"></link>
        <link rel="icon" type="image/png" sizes="16x16" href="/favicon-16x16.png"></link>
        <link rel="manifest" href="/site.webmanifest"></link>
      </Head>
      <ThemeProvider attribute="class">
        <Navbar />
        <AnimatePresence initial={false} mode='wait'>
          <motion.div key={pageKey}>
            <Component key={pageKey} {...pageProps} />
          </motion.div>
        </AnimatePresence>
      </ThemeProvider>
    </>
  )
}