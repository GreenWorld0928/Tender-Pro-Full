import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faEnvelope, faPhone, faLocationDot } from '@fortawesome/free-solid-svg-icons'
import SubmitForm from "./common/SubmitForm";

export default function ContactUs() {


    return (
        <main className="w-full h-full mt-1 mb-[195px]">
            <section className="tender-container pt-16">
                <div className="btn-secondary">Contact Us</div>
                <div
                    className="pt-[22px] flex flex-col md:flex-row items-start justify-between"
                >
                    <div className="w-full md:max-w-[568px] lg:w-1/2">
                        <h1 className="hero-title2">
                            Unlock business potential with TenderPro’s data-powered solutions.
                        </h1>
                        <div className="max-w-[564px] py-5">
                            <p className="paragraph">
                                Discover how TenderPro can revolutionise your business by
                                harnessing the predictive power of our data products and
                                solutions with a 20-minute demo with one of our experts
                                today.
                            </p>
                        </div>
                        <div className="pt-[50px] flex flex-col items-start gap-3 w-full">
                            <div><FontAwesomeIcon icon={faEnvelope} className="me-5" />sales@tenderpro.com</div>
                            <div><FontAwesomeIcon icon={faPhone} className="me-5" />(480) 555-0103</div>
                            <div className="flex flex-row"><FontAwesomeIcon icon={faLocationDot} style={{ fontSize: '20px' }} className="me-5" /><div>8502 Preston Rd. Inglewood,
                                <br />Maine 98380</div></div>
                        </div>
                    </div>
                    <div className="w-full lg:w-1/2 pt-10 md:pt-0 md:pl-10">
                        <h1 className="heading1">
                            Get in Touch
                        </h1>
                        <div className="max-w-[564px] py-5">
                            <p className="paragraph1">
                                We’re excited to deliver an informative experience on how TenderPro
                                can be the data catalyst for change within your business and look
                                forward to embarking on this journey with you.
                            </p>
                        </div>
                    <SubmitForm/>
                    </div>
                </div>
            </section>
        </main>
    );
}