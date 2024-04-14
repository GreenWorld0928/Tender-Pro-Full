import Image from "next/image";

const TestimonialCard = () => {
    return (
        <div
            className="pt-10 px-4 lg:px-0 flex flex-row items-stretch justify-start gap-6"
        >
            <div className="testimonial-card">
                <h5 className="tender-icon">TenderPro</h5>
                <p className="paragraph pt-5">
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit. Etiam
                    accumsan felis nec magna malesuada, a pharetra justo laoreet.
                    Maecenas dictum facilisis velit.
                </p>
                <Image
                    className="w-[70px] aspect-square rounded-full mx-auto mt-[30px]"
                    src="/images/man.png"
                    width={70}
                    height={70}
                    alt=""
                />
                <p className="pt-5 paragraph font-bold">John Doe</p>
                <p className="pt-1.5 paragraph">
                    Lorem ipsum dolor sit amet, consectetur
                </p>
            </div>
        </div>
    )
}

export default TestimonialCard