import React, { useState, useEffect, useRef } from "react";

import Modal from "react-modal";
import SubmitForm from "./SubmitForm";
const customStyles = {
    content: {
        borderRadius: '30px',
        left: '10%',
        width:'80%',
        top: '10%',
        height:'80%',
    },
};
const ModalDialog = (props) => {
    const { modalIsOpen, setIsOpen } = props;
    function closeModal() {
        setIsOpen(false);
    }
    return (
        <div className="">
            <Modal
                isOpen={modalIsOpen}
                onRequestClose={closeModal}
                style={customStyles}
                contentLabel="Example Modal"
            >
                <div
                    className="pt-[22px] flex flex-col lg:flex-row items-start justify-between"
                >
                    <div className="w-full lg:w-1/2 px-5">
                        <h1 className="heading2">
                            Book a Demo
                        </h1>
                        <p className="paragraph py-5">
                            Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry"s standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.
                        </p>
                    </div>
                    <div className="w-full lg:w-1/2 px-5"><SubmitForm /></div>
                </div>
            </Modal>
        </div>
    )
}

export default ModalDialog