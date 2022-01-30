import type { NextPage } from 'next'
import bg from "../public/assets/pictures/temp.jpeg"

const Home: NextPage = () => {


  return (
    <div className="home h-screen w-screen overflow-hidden relative pt-[130px] flex justify-center">
      <div className="w-[1200px] ">
        <h1 className='text-6xl text-light mb-3'>Welcome, I'm Pablo Padilla</h1>
        <h3 className='text-2xl text-darkish mb-28' >I am a committed & enthusiastic full-stack software engineer </h3>
        <button className='bg-lightblue w-72 h-16 rounded-lg drop-shadow-light'>
          <h2 className='text-dark text-4xl'>Contact Me</h2>
        </button>
      </div>
    </div>
  )
}

export default Home
