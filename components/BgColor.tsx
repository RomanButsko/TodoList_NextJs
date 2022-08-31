import Image from 'next/image'

const BgColor = () => {
    return (
            <Image
                alt="Mountains"
                src="/bg.jpeg"
                layout="fill"
                objectFit="cover"
                quality={100}
                className='z-[-1]'
      />
    )
}

export default BgColor

