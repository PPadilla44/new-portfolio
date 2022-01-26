import '../styles/globals.css'
import type { AppProps } from 'next/app'
import { motion, Variants } from "framer-motion";
import { Nav } from '../components/nav/Nav';

const pageAnimations: Variants = {
  pageInitial: {
    opacity: 0
  },
  pageAnimate: {
    opacity: 1
  }
}

function MyApp({ Component, pageProps, router }: AppProps) {
  return (
    <div>
      <Nav />
      <motion.div key={router.route} initial="pageInitial" animate="pageAnimate" variants={pageAnimations}>
        <Component {...pageProps} />
      </motion.div>
    </div>
  )
}

export default MyApp
