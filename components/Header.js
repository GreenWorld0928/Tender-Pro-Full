export default function Header() {
    return (
      <header
        className="tender-container flex items-center justify-between h-20 py-5"
      >
        <a href="/">
          <div className="tender-icon">TenderPro</div>
        </a>
        <div className="lg:hidden"><i className="fa-solid fa-bars text-[32px]"></i></div>
        <ul className="lg:flex items-center justify-end space-x-[30px] hidden">
          <li className="relative menu">
            <button
              className="header-link outline-none flex items-center space-x-3.5"
            >
              <span>Products</span>
              <i className="fa-solid fa-chevron-down"></i>
            </button>
            <div className="absolute top-0 -right-[30px] pt-10">
              <div className="submenu-container paragraph">
                <div className="submenu-up-arrow"></div>
                <ul className="submenu">
                  <li>
                    <a
                      href="/area-data-platform"
                      className="inline-block w-full p-2 hover:bg-[#EAEDFD] hover:text-blue-primary rounded-lg"
                      >AREA Data Platform</a
                    >
                  </li>
                </ul>
              </div>
            </div>
          </li>
          <li><a className="header-link" href="/about">About</a></li>
          <li><a className="btn-primary-outlined" href="/contact-us">Get In Touch</a></li>
          <li><a className="btn-primary" href="#">Book A Demo</a></li>
        </ul>
      </header>
    )
  }