import Image from "next/image";
import Link from 'next/link';
import ImageCard from "./common/ImageCard";
import ProfileCard from "./common/ProfileCard";
import SimpleCard from "./common/SimpleCard";

export default function AboutUs() {
    return (
        <main className="w-full h-full mt-1 mb-[195px]">
            <section className="tender-container pt-16 pb-12">
                <div className="btn-secondary">About Us</div>
                <div
                    className="pt-[22px] md:flex-row items-start justify-between"
                >
                    <h1 className="hero-title">
                        Powerful property data
                    </h1>
                    <div>
                        <p className="paragraph">
                            TenderPro empowers brands to gain competitive advantage through its product suite. Combining  leading property<br />
                            data with powerful machine learning algorithms and event signals, TenderPro helps brands target and convert high-<br />
                            intent customers with market-leading efficiency and effectiveness.
                        </p>
                    </div>
                </div>
            </section>
            <section>
                <div
                    className="tender-container py-6 w-full flex flex-col"
                >
                    <h3 className="max-w-[1032px] heading pb-5">
                        Executive Team
                    </h3>
                    <div
                        className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-3 sm:gap-5 xl:gap-[23px]"
                    >
                        <ProfileCard />
                        <ProfileCard />
                        <ProfileCard />
                        <ProfileCard />
                        <ProfileCard />
                        <ProfileCard />
                    </div>
                </div>
            </section>
            <section>
                <div
                    className="tender-container pt-12 mb-6 pb-12 w-full flex flex-col"
                >
                    <h3 className="max-w-[1032px] heading pb-5">
                        Real Estate Advisory
                    </h3>
                    <div
                        className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-3 sm:gap-5 xl:gap-[23px]"
                    >
                        <SimpleCard />
                        <SimpleCard />
                        <SimpleCard />
                    </div>
                </div>
            </section>
            <section className="bg-[#EAEDFD] py-12">
                <div className="tender-container">
                    <h2 className="heading text-center py-5">Privacy by Design</h2>
                    <div>
                        <p className="paragraph text-center py-2">
                            We take the Data Protection Act seriously at TenderPro by staying at the forefront of regulation and thinking<br />
                            through numerous approaches to control the collection, processing, access and uses of our data.
                        </p>
                    </div>
                    <div
                        className="grid grid-cols-2 md:grid-cols-3 gap-3 sm:gap-5 xl:gap-[23px] pt-10"
                    >
                        <div className="privacy-card">
                            <div className="heading text-blue-700 pt-4">01</div>
                            <h4 className="heading2 pt-4">GDPR Compliance</h4>
                            <p className="paragraph pt-4">
                                Implementing the latest compliance to mitigate risk associated with working with large scale data sets through the training and certification of all staff to ensure best practices to stay ahead of both national and international rapidly changing policy and legislation. We are active in forums around data and privacy, ISO 27001 certification. Registered with ICO.
                            </p>
                        </div>
                        <div className="privacy-card">
                            <div className="heading text-blue-700 pt-4">02</div>
                            <h4 className="heading2 pt-4">GDPR Compliance</h4>
                            <p className="paragraph pt-4">
                                Implementing the latest compliance to mitigate risk associated with working with large scale data sets through the training and certification of all staff to ensure best practices to stay ahead of both national and international rapidly changing policy and legislation. We are active in forums around data and privacy, ISO 27001 certification. Registered with ICO.
                            </p>
                        </div>
                        <div className="privacy-card">
                            <div className="heading text-blue-700 pt-4">03</div>
                            <h4 className="heading2 pt-4">GDPR Compliance</h4>
                            <p className="paragraph pt-4">
                                Implementing the latest compliance to mitigate risk associated with working with large scale data sets through the training and certification of all staff to ensure best practices to stay ahead of both national and international rapidly changing policy and legislation. We are active in forums around data and privacy, ISO 27001 certification. Registered with ICO.
                            </p>
                        </div>
                    </div>
                </div>
            </section>
            <section className="bg-[#FFFFFF] py-12">
                <div className="tender-container">
                    <h2 className="heading text-center py-5">Our Values</h2>
                    <div>
                        <p className="paragraph text-center pt-2">
                            TenderPro simplifies the complex process of forecasting lifecycle events through our pre mover and home<br />mover models  for enhanced results.
                        </p>
                    </div>
                    <div
                        className="grid grid-cols-2 md:grid-cols-3 gap-3 sm:gap-5 xl:gap-[23px]"
                    >
                        <ImageCard />
                        <ImageCard />
                        <ImageCard />
                        <ImageCard />
                        <ImageCard />
                    </div>
                </div>
            </section>
            <section
                className=" bg-[#F5F5F5] w-full flex flex-col items-start py-12"
            >
                <div className="tender-container pt-[22px] flex flex-col md:flex-row items-start justify-between">
                    <div className="w-full md:w-5/6 lg:w-5/6">
                        <h3 className="maw-w-[1032px] heading pt-[30px]">Talent</h3>
                        <div>
                            <p className="paragraph py-5">Outra is always on the lookout for exceptional talent to join our team. Check out Linkedin for our latest roles.</p>
                        </div>
                        <Link className="btn-primary mt-3" href="#">View Roles</Link>
                    </div>
                    <div className="hidden md:block w-full md:w-1/6 lg:w-1/6">
                        <Image
                            className="aspect-[466/485] w-[300px] mx-auto md:mr-0"
                            src="/images/tools.png"
                            width={190}
                            height={207}
                            alt=""
                        />
                    </div>
                </div>
            </section>
        </main>
    );
}