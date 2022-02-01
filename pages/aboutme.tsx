import type { NextPage } from 'next'
import Image from 'next/image';
import RotatingImage from '../components/rotating-images/RotatingImage';
import me from "../public/assets/pictures/ME.jpg";
import anime from "../public/assets/pictures/anime.jpg";
import Description from '../components/aboutme/Description';


const AboutMe: NextPage = () => {


    return (
        <div className="h-screen w-screen flex justify-center items-center relative bg-main">

            <Description />

        </div>
    )
}

export default AboutMe