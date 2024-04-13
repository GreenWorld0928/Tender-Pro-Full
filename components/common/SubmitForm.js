import React, { useState, useEffect, useRef } from "react";
import Select from "react-select";
import Link from 'next/link';
import ReCAPTCHA from "react-google-recaptcha";
const SubmitForm = () => {
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
        <form>
            <div className="flex flex-row justify-between">
                <div className="me-2">
                    <span className="paragraph1">First Name</span>
                    <input type="text" className="primary-input" />
                </div>
                <div className="ms-2">
                    <span className="paragraph1">Last Name</span>
                    <input type="text" className="primary-input" />
                </div>
            </div>
            <div className="my-4">
                <span className="paragraph1">Email</span>
                <input type="text" className="primary-input" />
            </div>
            <div className="my-4">
                <span className="paragraph1">Company Name</span>
                <input type="text" className="primary-input" />
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
                    className="primary-input"
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
            <Link className="btn-primary w-full text-sm" href="#">Submit</Link>
        </form>
    )
}

export default SubmitForm