import Image from "next/image"

interface Props {
    src: string | StaticImageData;
    description: {
        paragraph: string;
        title: string;
    }
}

const SelectedItem: React.FC<Props> = ({ src, description }) => {

    return (
        <>
            <div className='drop-shadow-light w-52 h-52 sm:w-80 sm:h-80 lg:w-96 lg:h-96 relative'>
                <Image className='rounded-lg' src={src} alt="mainImg" layout="fill" objectFit='cover' objectPosition="center" />
            </div>
            <h1 className='text-4xl sm:text-5xl lg:text-64 text-light drop-shadow-2xl'>{ description.title }</h1>
            <h3 className='text-lg sm:text-2xl lg:text-4xl text-center text-light drop-shadow-2xl'>{ description.paragraph }</h3>
        </>
    )
}

export default SelectedItem