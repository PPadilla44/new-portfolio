import type { NextPage } from 'next'
import { motion } from "framer-motion";
import { useEffect, useState } from 'react';
import { Nav } from '../components/nav/Nav';


const Home: NextPage = () => {

  const [played, setPlayed] = useState(false);


  return (
    <div className="h-screen w-screen flex justify-center items-center relative overflow-hidden bg-main">
      LANDING PAGE
    </div>
  )
}

export default Home
