import '../styles/globals.css'
import type { AppProps } from 'next/app'
import { motion, Variants, AnimatePresence, useCycle } from "framer-motion";
import { Nav } from '../components/nav/Nav';
import { NavMobile } from '../components/nav/mobile/NavMobile';

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

  const [isOpen, toggleOpen] = useCycle(false, true);


  return (
    <div className='overflow-hidden bg-main relative'>

      <NavMobile page={router.route} isOpen={isOpen} toggleOpen={() => toggleOpen()} />
      <Nav page={router.route}/>

      <AnimatePresence>
        <motion.div
          key={router.route}
          initial="pageInitial"
          animate="pageAnimate"
          exit={"exit"}
          variants={pageAnimations}
        >
          <Component {...pageProps} isOpen={isOpen} />
        </motion.div>
      </AnimatePresence>
    </div>
  )
}

export default MyApp
