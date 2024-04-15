import Image from "next/image";
import Link from 'next/link';
import React, { useState, useEffect, useRef } from "react";
import ModalDialog from './common/ModalDialog';
import TestimonialCard from "./common/TestimonialCard";
import Marquee from "react-fast-marquee";

export default function Home() {
  const [modalIsOpen, setIsOpen] = useState(false);
  const openModal = () => {
    setIsOpen(true);
  };
  return (
    <main className="w-full h-full mt-1 mb-[195px]">
      {modalIsOpen && <ModalDialog modalIsOpen={modalIsOpen} setIsOpen={setIsOpen} />}
      <section className="hero-container px-3 mx-3 md:mx-[30px] pt-[56px]">
        <div className="max-w-[858px] text-center mx-auto">
          <h1 className="hero-title">
            <span>Unlock the transformative power</span>
            <span>of data with TenderPro’s next-</span>
            <span>generation AI.</span>
          </h1>
          <p className="paragraph text-[#4D4D4D] py-5 pb-[30px]">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Etiam
            accumsan felis nec
          </p>
          <button className="btn-primary" onClick={openModal}>Book A Demo</button>
          <Image
            className="mx-auto w-full aspect-[516/537] max-w-[516px] mt-[69px]"
            src="/images/hero.png"
            alt=""
            width={516}
            height={537}
          />
        </div>
      </section>

      <section className="mx-auto py-[100px] overflow-hidden">
        <div className="flex justify-center items-center flex-nowrap space-x-14 z-0">
          <Marquee className="-z-40" speed={50} autoFill={true}>
            <Image className="px-12" src="/images/news1.png" width={250} height={40} alt="" />
            <Image className="px-12" src="/images/news2.png" width={250} height={40} alt="" />
            <Image className="px-12" src="/images/news3.png" width={250} height={40} alt="" />
            <Image className="px-12" src="/images/news4.png" width={250} height={40} alt="" />
          </Marquee>
        </div>
      </section>

      <section className="px-4">
        <div className="flex flex-col items-center">
          <div className="btn-secondary">Use our data, science and AI to..</div>
          <div
            className="flex items-center justify-center space-x-3 lg:space-x-8 heading pt-[22px]"
          >
            <div>Connect.</div>
            <div>Amplify.</div>
            <div>Convert.</div>
          </div>
          <p className="paragraph pt-3 text-center">
            We radically out perform. We deliver the best predictive data.
          </p>
        </div>

        <div
          className="max-w-[800px] pt-10 pb-[100px] flex flex-wrap justify-center items-center mx-auto gap-x-11 sm:gap-x-[75px] gap-y-10"
        >
          <div className="text-center">
            <p className="matrix pb-3">30.8m</p>
            <p className="paragraph">Households</p>
          </div>
          <div className="text-center">
            <p className="matrix pb-3">60+</p>
            <p className="paragraph">Data sources</p>
          </div>
          <div className="text-center">
            <p className="matrix pb-3">2,300+</p>
            <p className="paragraph">Attributes per record</p>
          </div>
          <div className="text-center">
            <p className="matrix pb-3">81%</p>
            <p className="paragraph">Market listing coverage</p>
          </div>
          <div className="text-center">
            <p className="matrix pb-3">75b</p>
            <p className="paragraph">Data points</p>
          </div>
          <div className="text-center">
            <p className="matrix pb-3">90%</p>
            <p className="paragraph">Address match accuracy</p>
          </div>
          <div className="text-center">
            <p className="matrix pb-3">GDPR</p>
            <p className="paragraph">Compliant</p>
          </div>
        </div>
      </section>

      <section className="py-10 bg-[#EAEDFD]">
        <div className="tender-container">
          <div className="btn-secondary">Feature</div>
          <div
            className="flex flex-col md:flex-row items-center justify-between pt-[22px]"
          >
            <div className="w-full md:max-w-[588px] md:min-w-[588px]">
              <div className="">
                <h2 className="max-w-[475px] heading text-[#393C45] pb-3">
                  Our machine learning tools identify households most likely to
                  move.
                </h2>
                <p className="paragraph">
                  Outra simplifies the complex process of forecasting life cycle
                  events through our pre-mover and home mover models.
                </p>
              </div>
              <div className="mt-[50px]">
                <div className="pb-2.5 pl-[23px] relative">
                  <div>
                    <h3 className="heading2">Environment</h3>
                    <p className="paragraph pt-1.5">
                      Process and analyse all UK residential listings for sale
                      and rent.
                    </p>
                  </div>
                  <div
                    className="absolute top-0 left-0 w-[3px] h-full bg-[#FF4400]/20"
                  ></div>
                </div>
                <div className="py-2.5 pl-[23px] relative">
                  <div>
                    <h3 className="heading2">Enrichment</h3>
                    <p className="paragraph pt-1.5">
                      Blend this event information with other household and
                      demographic attributes, depending on the use case.
                    </p>
                  </div>
                  <div
                    className="absolute top-0 left-0 w-[3px] h-full bg-[#FF4400]/20"
                  ></div>
                </div>
                <div className="py-2.5 pl-[23px] relative">
                  <div>
                    <h3 className="heading2">Event Series</h3>
                    <p className="paragraph pt-1.5">
                      Quantify and categorise home mover data into a series of
                      events that can help us to understand the customer journey
                      and predict their next action.
                    </p>
                  </div>
                  <div
                    className="absolute top-0 left-0 w-[3px] h-full bg-[#FF4400]"
                  ></div>
                </div>
                <div className="pt-2.5 pl-[23px] relative">
                  <div>
                    <h3 className="heading2">Prediction</h3>
                    <p className="paragraph pt-1.5">
                      Predict properties that will experience a moving or
                      listings event within the next 6 months.
                    </p>
                  </div>
                  <div
                    className="absolute top-0 left-0 w-[3px] h-full bg-[#FF4400]/20"
                  ></div>
                </div>
              </div>
            </div>
            <div className="w-full pt-10 md:pt-0">
              <Image
                className="aspect-[516/537] w-[516px] mx-auto md:mr-0"
                src="/images/tools.png"
                width={516}
                height={537}
                alt=""
              />
            </div>
          </div>
        </div>
      </section>

      <section className="tender-container py-[100px]">
        <div
          className="max-w-[882px] mx-auto flex flex-col items-center text-center"
        >
          <div className="btn-secondary">Feature</div>
          <h2 className="heading pt-[30px]">
            Accelerate your business growth with TenderPro’s home mover product
            suite
          </h2>
          <p className="paragraph max-w-[808px] mx-auto pt-5">
            Outra simplifies the complex process of forecasting lifecycle events
            through our pre mover and home mover models  for enhanced results.
          </p>
        </div>

        <div
          className="pt-[50px] flex flex-col md:flex-row items-center justify-between"
        >
          <div className="flex items-center justify-start w-full">
            <div
              className="w-[368px] h-[263px] product-card relative overflow-hidden flex flex-col"
            >
              <h3 className="heading2 text-white">AREA Data Platform</h3>
              <p className="paragraph text-white flex-grow pt-3">
                Predict properties that will experience a moving or listings
                event within the next 6 months.
              </p>
              <div
                className="text-white font-semibold text-base space-x-2.5 cursor-pointer w-min whitespace-nowrap"
              >
                <span>Learn more</span
                ><i className="fa-solid fa-arrow-right text-lg"></i>
              </div>
              <div
                className="w-full h-1.5 absolute bottom-0 left-0 bg-[#D9D9D9] rounded-b-[5px]"
              >
                <div className="w-[91px] h-full bg-[#717171]"></div>
              </div>
            </div>
          </div>

          <div className="w-full pt-10 md:pt-0">
            <Image
              className="aspect-[474/493] w-[474px] mx-auto md:mr-0"
              src="/images/tools.png"
              width={474}
              height={493}
              alt=""
            />
          </div>
        </div>
      </section>

      <section className="w-full h-full">
        <h2 className="heading text-center">Our Testimonials</h2>
        <div
          className="pt-10 px-4 lg:px-0 flex flex-row items-stretch justify-start gap-6"
        >
          <TestimonialCard />
        </div>
        <div className="pt-[72px] flex flex-row items-center justify-center">
          <i className="fa-solid fa-chevron-left text-3xl cursor-pointer"></i>
          <div
            className="flex flex-row items-center justify-center space-x-5 mx-20"
          >
            <div
              className="w-3.5 h-3.5 rounded-full bg-[#D9D9D9] cursor-pointer"
            ></div>
            <div
              className="w-[18px] h-[18px] rounded-full bg-blue-primary cursor-pointer"
            ></div>
            <div
              className="w-3.5 h-3.5 rounded-full bg-[#D9D9D9] cursor-pointer"
            ></div>
          </div>
          <i className="fa-solid fa-chevron-right text-3xl cursor-pointer"></i>
        </div>
      </section>
    </main>
  )
}
