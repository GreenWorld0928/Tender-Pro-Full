import Image from "next/image";

export default function AboutUs() {
    return (
        <main className="w-full h-full mt-1 mb-[195px]">
            <section className="tender-container pt-16">
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

            <section
                className="tender-container pt-[100px] w-full flex flex-col items-start text-center"
            >
                <h3 className="max-w-[1032px] heading pt-[30px]">
                    Executive Team
                </h3>
                <div></div>
            </section>

            <section className="mt-20 bg-[#EAEDFD] pt-10 pb-[128px]">
                <div className="tender-container">
                    <h2 className="heading text-center">Privacy by Design</h2>
                    <div>
                        <p className="paragraph text-center">
                            We take the Data Protection Act seriously at TenderPro by staying at the forefront of regulation and thinking<br />
                            through numerous approaches to control the collection, processing, access and uses of our data.
                        </p>
                    </div>
                    <div
                        className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-3 sm:gap-5 xl:gap-[23px] pt-10"
                    >
                        <div className="benifits-card">
                            <div className="heading2 serial">01</div>
                            <div className="benifit-details">
                                <h4 className="heading2">Maximise Investment</h4>
                                <p className="paragraph pt-2.5">
                                    Harness advanced housing market analytics and diverse data
                                    sources to gain a comprehensive understanding of the market
                                    landscape, enable more informed decisions based on your
                                    desired development objectives or investment opportunities.
                                </p>
                            </div>
                        </div>
                        <div className="benifits-card">
                            <div className="heading2 serial">02</div>
                            <div className="benifit-details">
                                <h4 className="heading2">Maximise Investment</h4>
                                <p className="paragraph pt-2.5">
                                    Harness advanced housing market analytics and diverse data
                                    sources to gain a comprehensive understanding of the market
                                    landscape, enable more informed decisions based on your
                                    desired development objectives or investment opportunities.
                                </p>
                            </div>
                        </div>
                        <div className="benifits-card">
                            <div className="heading2 serial">03</div>
                            <div className="benifit-details">
                                <h4 className="heading2">Maximise Investment</h4>
                                <p className="paragraph pt-2.5">
                                    Harness advanced housing market analytics and diverse data
                                    sources to gain a comprehensive understanding of the market
                                    landscape, enable more informed decisions based on your
                                    desired development objectives or investment opportunities.
                                </p>
                            </div>
                        </div>
                        <div className="benifits-card">
                            <div className="heading2 serial">04</div>
                            <div className="benifit-details">
                                <h4 className="heading2">Maximise Investment</h4>
                                <p className="paragraph pt-2.5">
                                    Harness advanced housing market analytics and diverse data
                                    sources to gain a comprehensive understanding of the market
                                    landscape, enable more informed decisions based on your
                                    desired development objectives or investment opportunities.
                                </p>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            <section
                className="tender-container pt-[130px] w-full flex flex-col items-start text-center"
            >
                <h3 className="maw-w-[1032px] heading pt-[30px]">                    
                    Talent
                </h3>
                <div>
                    <p className="paragraph text-center py-5">
                        Outra is always on the lookout for exceptional talent to join our team. Check out Linkedin for our latest roles.
                    </p>
                </div>
                <a className="btn-primary mt-3" href="#">View Roles</a>

            </section>
        </main>
    );
}