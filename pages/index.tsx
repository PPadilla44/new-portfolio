import type { NextPage } from 'next'
import { SlashVideo } from '../components/slash/SlashVideo'
import { motion } from "framer-motion";
import { useEffect, useState } from 'react';


const Home: NextPage = () => {

  const [played, setPlayed] = useState(false);


  return (
    <div className="h-screen w-screen flex justify-center items-center relative overflow-hidden">

      <SlashVideo setPlayed={setPlayed} />

      {
        played && 
        <motion.div className='h-96 w-96 rounded-full bg-black' initial={{ visibility: "hidden" }} animate={ { scale: [0,10], visibility: "visible" } } transition={{ delay: 3.1, duration: .5 }} >
        </motion.div>
      }

    </div>
  )
}

export default Home
