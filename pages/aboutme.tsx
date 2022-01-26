import type { NextPage } from 'next'
import Image from 'next/image';
import { Nav } from '../components/nav/Nav';
import RotatingImage from '../components/rotating-images/RotatingImage';
import me from "../public/assets/images/ME.jpg";
import anime from "../public/assets/images/anime.jpg";


const AboutMe: NextPage = () => {

    return (
        <div className="h-screen w-screen flex justify-center items-center relative bg-main">
            <RotatingImage
                xRange={100}
                yRange={300}
                size={150}
                xTime={20}
                yTime={25} 
                src={anime}
                />
            <RotatingImage
                xRange={400}
                yRange={100}
                size={150}
                xTime={16}
                yTime={20} 
                src={me}
                />
            <div className='w-[1200px] flex flex-col justify-center items-center'>


                <div className='drop-shadow-3xl'>
                    <Image className='rounded-lg' src={me} alt="imgers" width={"300px"} height={"300px"} objectFit='cover' />
                </div>
                <h1 className='text-6xl text-light drop-shadow-2xl mt-16'>Lorem ipsum dolor sit</h1>
                <h3 className='text-4xl text-center text-light drop-shadow-2xl mt-20'>
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                    Eleifend nullam nullam blandit sed platea at viverra a, dignissim.
                    Velit nullam viverra erat eget lacus, diam. Orci urna sed leo etiam nibh etiam.
                    Semper sed quis dui enim quisque ac varius venenatis bibendum.
                </h3>
            </div>
        </div>
    )
}

export default AboutMe