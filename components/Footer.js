import Image from 'next/image'

export default function Footer() {
  return (
    <footer
      className="bg-[#26282E] pt-[260px] sm:pt-[200px] lg:pt-[125px] pb-5 relative"
    >
      <section
        className="tender-container absolute left-0 right-0 -top-[111px] lg:-top-[75px]"
      >
        <div
          className="bg-[#D5DBFB] rounded-[10px] p-[44px_50px_42px] flex flex-col lg:flex-row items-start lg:items-center justify-between"
        >
          <div className="pb-8 lg:pb-0">
            <p className="heading2 pb-3">Unlock business potential</p>
            <p className="paragraph">
              Discover how Outra can revolutionise your business.
            </p>
          </div>
          <div
            className="flex flex-col sm:flex-row items-center gap-[30px] w-full md:w-auto"
          >
            <a className="btn-primary-outlined w-full sm:w-[172px]" href="#"
              >Get In Touch</a
            >
            <a className="btn-primary w-full sm:w-[172px]" href="#">Book A Demo</a>
          </div>
        </div>
      </section>
      <section className="tender-container">
        <div
          className="flex flex-col md:flex-row items-start justify-between pb-5 md:space-x-10 space-y-10 md:space-y-0"
        >
          <div className="mb-4 md:mb-0">
            <div className="tender-icon text-white">TenderPro</div>
            <p className="max-w-[270px] paragraph2 pt-5">
              We radically out perform. We deliver the best predictive data
            </p>
            <div className="flex items-center space-x-2.5 pt-2.5">
              <a href="#" target="_blank">
                <Image
                  className="w-8 h-8 rounded-full"
                  src="/images/linkedin.png"
                  width={32}
                  height={32}
                  alt=""
                />
              </a>
              <a href="#" target="_blank">
                <Image
                  className="w-8 h-8 rounded-full"
                  src="/images/youtube.png"
                  width={32}
                  height={32}
                  alt=""
                />
              </a>
            </div>
          </div>
          <div className="">
            <p className="paragraph2">Products</p>
            <ul className="pt-4 space-y-2">
              <li>
                <a className="footer-link" href="#">AREA Data Platform</a>
              </li>
              <li>
                <a className="footer-link" href="#">Build To Rent</a>
              </li>
              <li>
                <a className="footer-link" href="#">High Net Worth</a>
              </li>
              <li>
                <a className="footer-link" href="#">Landlord Identification</a>
              </li>
            </ul>
          </div>
          <div className="">
            <p className="paragraph2">Products</p>
            <ul className="pt-4">
              <li>
                <a className="footer-link" href="#">About us</a>
              </li>
            </ul>
          </div>
        </div>
        <hr className="h-[0.5px] w-full" />
        <div
          className="flex flex-col-reverse md:flex-row items-start justify-between pt-5"
        >
          <p className="paragraph2">
            © All content copyright TenderPro 2024. All rights reserved.
          </p>
          <p className="paragraph2 pb-4 md:pb-0">
            <a className="underline" href="#">Privacy policy</a> and
            <a className="underline" href="#">Terms of service</a>
          </p>
        </div>
      </section>
    </footer>
  )
}