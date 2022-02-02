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
            <div className='drop-shadow-light'>
                <Image className='rounded-lg' src={src} alt="imgers" width={"300px"} height={"300px"} objectFit='cover' objectPosition="center" />
            </div>
            <h1 className='text-6xl text-light drop-shadow-2xl mt-16'>{ description.title }</h1>
            <h3 className='text-4xl text-center text-light drop-shadow-2xl mt-20'>{ description.paragraph }</h3>
        </>
    )
}

export default SelectedItem