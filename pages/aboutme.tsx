import type { NextPage } from 'next'
import { Nav } from '../components/nav/Nav';


const AboutMe: NextPage = () => {

    return (
        <div className="h-screen w-screen flex justify-center items-center relative bg-main">
            <Nav />
        </div>
    )
}

export default AboutMe