import '../styles/globals.css'
import type { AppProps } from 'next/app'
import { motion, Variants, AnimatePresence } from "framer-motion";
import { Nav } from '../components/nav/Nav';

const pageAnimations: Variants = {

  pageInitial: {
    opacity: 0
  },
  pageAnimate: {
    opacity: 1,
    transition: {
      type: "spring",
      delay: 0.5
    }
  },
  exit: {
    opacity: 0,
    transition: { ease: "easeInOut" }
  }
}

function MyApp({ Component, pageProps, router }: AppProps) {
  return (
    <div className='overflow-hidden bg-main'>

      <Nav />

      <AnimatePresence>
        <motion.div
          key={router.route}
          initial="pageInitial"
          animate="pageAnimate"
          exit={"exit"}
          variants={pageAnimations}
        >
          <Component {...pageProps} />
        </motion.div>
      </AnimatePresence>
    </div>
  )
}

export default MyApp
