import Image from "next/image"

interface Props {
    src: string | StaticImageData;

}

const SelectedItem: React.FC<Props> = ({ src }) => {



    return (
        <>
            <div className='drop-shadow-light'>
                <Image className='rounded-lg' src={src} alt="imgers" width={"300px"} height={"300px"} objectFit='cover' objectPosition="center" />
            </div>
            <h1 className='text-6xl text-light drop-shadow-2xl mt-16'>Lorem ipsum dolor sit</h1>
            <h3 className='text-4xl text-center text-light drop-shadow-2xl mt-20'>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                Eleifend nullam nullam blandit sed platea at viverra a, dignissim.
                Velit nullam viverra erat eget lacus, diam. Orci urna sed leo etiam nibh etiam.
                Semper sed quis dui enim quisque ac varius venenatis bibendum.
            </h3>
        </>
    )
}

export default SelectedItem