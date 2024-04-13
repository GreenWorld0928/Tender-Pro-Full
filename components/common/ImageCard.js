import Image from "next/image";

const ImageCard = () => {
    return (
        <div className="text-center">
            <Image
                className="mx-auto w-full aspect-[516/537] max-w-[206px] mt-[69px]"
                src="/images/valueimage.png"
                alt=""
                width={206}
                height={180}
            />
            <div className="heading2 p-5">Transparency</div>
            <div className="paragraph px-5">We are unafraid to experiment as we strive to have a broad and deep impact in the world</div>
        </div>
    )

}

export default ImageCard