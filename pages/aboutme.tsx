import type { NextPage } from 'next'
import Description from '../components/aboutme/Description';
import DescriptionMobile from '../components/aboutme/mobile/DescriptionMobile';


const AboutMe: NextPage = () => {

    return (
        <div className="h-screen w-screen flex justify-center items-center relative bg-darkish">

            <DescriptionMobile />
            <Description />

        </div>
    )
}

export default AboutMe