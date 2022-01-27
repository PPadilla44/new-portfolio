import type { NextPage } from 'next'
import Image from 'next/image';
import RotatingImage from '../components/rotating-images/RotatingImage';
import me from "../public/assets/images/ME.jpg";
import anime from "../public/assets/images/anime.jpg";


const AboutMe: NextPage = () => {


    return (
        <div className="h-screen w-screen flex justify-center items-center relativ">

            <div className='w-[1200px] flex flex-col justify-center items-center'>

                <RotatingImage
                    xRange={["50%", "100%", "50%", "0%", "75%", "50%"]}
                    yRange={["50%", "25%", "100%", "75%", "100%", "50%"]}
                    size={150}
                    time={15}
                    rotateRange={[0, 145, 35, 0]}
                    src={anime}
                    className={`h-[300px] w-[300px] left-10 cursor-pointer`}
                />

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