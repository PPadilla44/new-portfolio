import type { NextPage } from 'next'
import Description from '../components/aboutme/Description';


const AboutMe: NextPage = () => {

    return (
        <div className="h-screen w-screen flex justify-center items-center relative bg-main">

            <Description />

        </div>
    )
}

export default AboutMe