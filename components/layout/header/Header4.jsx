"use client";

import React, { useEffect, useState } from "react";
import Menu from "../components/Menu";
import Currency from "../components/Currency";
import MobileMenu from "../components/MobileMenu";
import Image from "next/image";
import Link from "next/link";
import { useRouter } from "next/navigation";
export default function Header4() {
  const router = useRouter();
  const pageNavigate = (pageName) => {
    router.push(pageName);
  };

  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [addClass, setAddClass] = useState(false);

  // Add a class to the element when scrolled 50px
  const handleScroll = () => {
    if (window.scrollY >= 50) {
      setAddClass(true);
    } else {
      setAddClass(false);
    }
  };

  useEffect(() => {
    window.addEventListener("scroll", handleScroll);

    // Cleanup the event listener when the component unmounts
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);
  return (
    <>
      <header
        className={`header -type-3 -page-5 js-header ${
          addClass ? "-is-sticky" : ""
        }`}
      >
        <div className="header__container container">
          <div className="headerMobile__right">
            <div>
              <Link href="/">
              <Image
                src={'/img/logo/logo.svg'}
                width={70}
                height={70}
                alt="logo"
                style={{ width: '70px', height: 'auto' }}
              />
            </Link>
            </div>
            <button
              onClick={() => setMobileMenuOpen(true)}
              className="header__menuBtn js-menu-button mt-5"
            >
              <i className="icon-main-menu"></i>
            </button>
          </div>

          <div className="header__logo">
            <Menu />
          </div>

          {/* <div className="headerMobile__right">
            <button
              onClick={() => pageNavigate("/tour-list-1")}
              className="d-flex"
            >
              <i className="icon-search text-18"></i>
            </button>

            <button
              onClick={() => pageNavigate("/login")}
              className="d-flex ml-20"
            >
              <i className="icon-person text-18"></i>
            </button>
          </div> */}

          <div className="header__right">
            {/* <div className="ml-30 dnStiky ">
              <Currency />
            </div> */}
            <div className="text-white ml-20 bg-accent-3-v rounded-200 px-20 py-5">
              <a href="/clinic-partnership">Clinic Partnership</a>
            </div>
            <div className="text-white ml-20 bg-accent-3-v rounded-200 px-20 py-5">
              <a href="/about">About us</a>
            </div>
            <div className="text-white ml-20 bg-accent-3-v rounded-200 px-20 py-5">
              <a href="/help-center">FAQ&apos;s</a>
            </div>
            {/* <div className="text-white ml-20">
              <a href="#">Join us</a>
            </div> */}

            {/* <Link href="/help-center" className="text-white ml-20">
              Help
            </Link>

            <Link href="/register" className="text-white ml-30">
              Sign up
            </Link>

            <Link
              href="/login"
              className="button -sm -outline-white rounded-200 text-white ml-30"
            >
              Log in
            </Link>

            <Link
              href="/login"
              className="button size-42 -outline-white rounded-200 text-white ml-30"
            >
              <i className="icon-search"></i>
            </Link> */}
          </div>
        </div>
      </header>
      <MobileMenu
        setMobileMenuOpen={setMobileMenuOpen}
        mobileMenuOpen={mobileMenuOpen}
      />
      
      <style jsx>{`
        /* Desktop - Above 1200px */
        @media (min-width: 1200px) {
          .header__logo {
            display: flex !important;
            align-items: center !important;
          }
          .header__right {
            display: flex !important;
            align-items: center !important;
          }
          .headerMobile__right {
            display: none !important;
          }
          .tablet-nav {
            display: none !important;
          }
        }

        /* Tablet - 768px to 1199px */
        @media (max-width: 1199px) and (min-width: 768px) {
          .header__logo {
            display: flex !important;
            align-items: center !important;
          }
          .header__right {
            display: none !important;
          }
          .headerMobile__right {
            display: flex !important;
            align-items: center !important;
          }
          .tablet-nav {
            display: none !important;
          }
        }

        /* Mobile - Below 768px */
        @media (max-width: 767px) {
          .header__logo {
            display: none !important;
          }
          .header__right {
            display: none !important;
          }
          .headerMobile__right {
            display: flex !important;
            align-items: center !important;
            width: 100% !important;
            justify-content: space-between !important;
          }
          .tablet-nav {
            display: none !important;
          }
        }

        /* Header container responsive height */
        @media (max-width: 767px) {
          .header__container {
            height: 57px !important;
          }
        }

        /* Ensure proper flex layout */
        .header__container {
          display: flex !important;
          align-items: center !important;
          justify-content: space-between !important;
        }

        .headerMobile__right {
          align-items: center !important;
          gap: 15px !important;
        }

        /* Fix logo sizing across devices */
        .headerMobile__right img {
          width: 50px !important;
          height: auto !important;
        }

        @media (min-width: 768px) {
          .headerMobile__right img {
            width: 70px !important;
          }
        }
        @media (max-width: 1199px) and (min-width: 991px){
          .headerMobile__right{
            gap: 52rem !important;
          }
        }        
      `}</style>
    </>
  );
}
