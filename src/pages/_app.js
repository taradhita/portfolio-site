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
  const wrapperRef = useRef(null);

  return (
    <>
      <Head>
        <title>Nadia Taradhita | Back End Developer</title>
      </Head>
      <ThemeProvider attribute="class">
        <Navbar />
        <AnimatePresence initial={false} custom={pageKey} mode='wait'>
          <motion.div key={pageKey} 
            initial={{ opacity: 0 }} 
            animate={{ opacity: 1 }} 
            exit={{ opacity: 0 }} 
            ref={wrapperRef}
          >
            <Component {...pageProps} />
          </motion.div>
        </AnimatePresence>
      </ThemeProvider>
    </>
  )
}