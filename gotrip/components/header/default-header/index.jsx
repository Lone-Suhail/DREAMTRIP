'use client';

import Link from "next/link";
import Image from "next/image";
import { useEffect, useState, useCallback } from "react";
import MainMenu from "../MainMenu";
import CurrenctyMegaMenu from "../CurrenctyMegaMenu";
import LanguageMegaMenu from "../LanguageMegaMenu";
import MobileMenu from "../MobileMenu";

const Header1 = () => {
  const [navbar, setNavbar] = useState(false);

  // Memoize the scroll event handler
  const changeBackground = useCallback(() => {
    if (window.scrollY >= 10) {
      setNavbar(true);
    } else {
      setNavbar(false);
    }
  }, []);

  useEffect(() => {
    window.addEventListener("scroll", changeBackground);
    return () => {
      window.removeEventListener("scroll", changeBackground);
    };
  }, [changeBackground]);

  return (
    <header className={`header bg-white ${navbar ? "is-sticky" : ""}`}>
      <div className="header__container px-30 sm:px-20">
        <div className="row justify-between items-center">
          {/* Logo and Main Menu */}
          <div className="col-auto">
            <div className="d-flex items-center">
              <Link href="/" className="header-logo mr-20">
                <Image
                  src="/img/general/logo-dark.svg"
                  alt="Website Logo"
                  width={250}
                  height={200}
                  priority // Ensures the logo loads quickly
                />
              </Link>
              {/* End logo */}

              <nav className="header-menu" aria-label="Main navigation">
                <div className="header-menu__content">
                  <MainMenu style="text-dark-1" />
                </div>
              </nav>
              {/* End header-menu */}
            </div>
          </div>
          {/* End col */}

          {/* Currency, Language, and Mobile Menu Icon */}
          <div className="col-auto">
            <div className="d-flex items-center">
              {/* Currency and Language Selectors */}
              <div className="row x-gap-20 items-center xxl:d-none">
                <CurrenctyMegaMenu textClass="text-dark-1" />
                {/* End Megamenu for Currency */}

                {/* Vertical Divider */}
                <div className="col-auto">
                  <div className="w-1 h-20 bg-white-20" />
                </div>
                {/* End vertical divider */}

                <LanguageMegaMenu textClass="text-dark-1" />
                {/* End Megamenu for Language */}
              </div>
              {/* End language and currency selector */}

              {/* Start mobile menu icon */}
              <div className="d-none xl:d-flex x-gap-20 items-center pl-30 text-dark-1">
                <div>
                  <Link
                    href="/login"
                    className="d-flex items-center icon-user text-inherit text-22"
                  />
                </div>
                <div>
                  <button
                    className="d-flex items-center icon-menu text-inherit text-20"
                    data-bs-toggle="offcanvas"
                    aria-controls="mobile-sidebar_menu"
                    data-bs-target="#mobile-sidebar_menu"
                  />

                  <div
                    className="offcanvas offcanvas-start mobile_menu-contnet"
                    tabIndex="-1"
                    id="mobile-sidebar_menu"
                    aria-labelledby="offcanvasMenuLabel"
                    data-bs-scroll="true"
                  >
                    <MobileMenu />
                    {/* End MobileMenu */}
                  </div>
                </div>
              </div>
              {/* End mobile menu icon */}
            </div>
          </div>
          {/* End col-auto */}
        </div>
        {/* End .row */}
      </div>
      {/* End header_container */}
    </header>
  );
};

export default Header1;
