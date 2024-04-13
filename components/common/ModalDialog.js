import React, { useState, useEffect, useRef } from "react";

import Modal from 'react-modal';
import SubmitForm from "./SubmitForm";
const customStyles = {
    content: {
        top: '50%',
        left: '50%',
        right: '-20%',
        bottom: 'auto',
        padding: '20px',
        transform: 'translate(-50%, -50%)',
        borderRadius: '10px'
    },
};
const ModalDialog = (props) => {
    const { modalIsOpen, setIsOpen } = props;
    function closeModal() {
        setIsOpen(false);
    }
    return (

        <Modal
            isOpen={modalIsOpen}
            onRequestClose={closeModal}
            style={customStyles}
            contentLabel="Example Modal"
        >
            <div
                className="pt-[22px] flex flex-col md:flex-row items-start justify-between"
            >
                <div className="w-full md:max-w-[364px] lg:w-1/2 mx-5">
                    <h1 className="heading2">
                        Book a Demo
                    </h1>
                    <div className="max-w-[364px] py-5">
                        <p className="paragraph">
                            Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.
                        </p>
                    </div>
                </div>
                <div className="w-full lg:w-1/2 mx-5"><SubmitForm /></div>
            </div>
        </Modal>

    )
}

export default ModalDialog