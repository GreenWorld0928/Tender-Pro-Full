import React, { useState, useEffect, useRef } from "react";
import ReCAPTCHA from "react-google-recaptcha";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faEnvelope, faPhone, faLocationDot } from '@fortawesome/free-solid-svg-icons'
import Select from "react-select";

export default function ContactUs() {
    const inputStyle = "mt-1 w-full px-3 py-2 bg-white border border-slate-300 rounded-sm text-sm focus:outline-none focus:border-sky-500 focus:ring-1 focus:ring-sky-500"
    const options = [
        { value: "0", label: "industry 1" },
        { value: "1", label: "industry 2" },
        { value: "2", label: "industry 3" },
        { value: "3", label: "industry 4" },
        { value: "4", label: "industry 5" },
    ];
    const capchaRef = useRef();
    const [recapchaToken, setRecapchaToken] = useState("");
	useEffect(()=>{
		if(capchaRef){
			capchaRef.current.reset(); 
		}
	}, [capchaRef]); 

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
                        <form>
                            <div className="flex flex-row justify-between">
                                <div className="me-2">
                                    <span className="paragraph1">First Name</span>
                                    <input type="text" className={inputStyle} />
                                </div>
                                <div className="ms-2">
                                    <span className="paragraph1">Last Name</span>
                                    <input type="text" className={inputStyle} />
                                </div>
                            </div>
                            <div className="my-4">
                                <span className="paragraph1">Email</span>
                                <input type="text" className={inputStyle} />
                            </div>
                            <div className="my-4">
                                <span className="paragraph1">Company Name</span>
                                <input type="text" className={inputStyle} />
                            </div>
                            <div className="my-4">
                                <span className="paragraph1">What is your industry?</span>
                                <Select
                                    options={options}
                                    placeholder="Select the industry you work in"
                                />
                            </div>
                            <div className="my-4">
                                <span className="paragraph1">Message</span>
                                <textarea
                                    className={inputStyle}
                                    onChange={(e) => {
                                    }}
                                    rows="3"
                                ></textarea>
                            </div>
                            <div className="my-3 d-flex justify-content-center">
                                <ReCAPTCHA
                                    ref={capchaRef}
                                    sitekey={`6LfjNzQkAAAAALmsm9-KscQIO3Q6-9gIDx1bGaua`}
                                    onChange={(token) => setRecapchaToken(token)}
                                />
                            </div>
                            <a className="btn-primary w-full text-sm" href="#">Submit</a>
                        </form>


                    </div>
                </div>
            </section>
        </main>
    );
}