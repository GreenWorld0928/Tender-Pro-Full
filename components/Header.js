import React, { useState, useEffect, useRef } from "react";
import Link from 'next/link';
import ModalDialog from './common/ModalDialog';
import { useRouter } from 'next/router';

export default function Header() {
    const router = useRouter();
    const [modalIsOpen, setIsOpen] = useState(false);
    const openModal = () => {
        setIsOpen(true);
    };
    return (
        <>
            <header
                className="tender-container flex items-center justify-between h-20 py-5"
            >
                <Link href="/">
                    <div className="tender-icon">TenderPro</div>
                </Link>
                <div className="lg:hidden"><i className="fa-solid fa-bars text-[32px]"></i></div>
                <ul className="lg:flex items-center justify-end space-x-[30px] hidden">
                    <li className="relative menu">
                        <button
                            className="header-link outline-none flex items-center space-x-3.5"
                        >
                            <span className={`header-link ${router.pathname === '/area-data-platform' ? 'underline decoration-blue-700 decoration-2' : ''}`}>Products</span>
                            <i className="fa-solid fa-chevron-down"></i>
                        </button>
                        <div className="absolute top-0 -right-[30px] pt-10">
                            <div className="submenu-container paragraph">
                                <div className="submenu-up-arrow"></div>
                                <ul className="submenu">
                                    <li>
                                        <Link
                                            href="/area-data-platform"
                                            className="inline-block w-full p-2 hover:bg-[#EAEDFD] hover:text-blue-primary rounded-lg"
                                        >AREA Data Platform</Link>
                                    </li>
                                </ul>
                            </div>
                        </div>
                    </li>
                    <li><Link className={`header-link ${router.pathname === '/about' ? 'underline decoration-blue-700 decoration-2' : ''}`} href="/about">About</Link></li>
                    <li><Link className="btn-primary-outlined" href="/contact-us">Get In Touch</Link></li>
                    <li><button className="btn-primary" onClick={openModal}>Book A Demo</button></li>
                </ul>
            </header>
            {modalIsOpen && <ModalDialog modalIsOpen={modalIsOpen} setIsOpen={setIsOpen} />}
        </>

    )
}