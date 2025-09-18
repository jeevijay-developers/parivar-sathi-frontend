"use client";

import React, { useEffect, useState } from "react";
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
  const phoneNumber = process.env.NEXT_PUBLIC_COUNSELLOR_WHATSAPP_NUMBER;
  const message = encodeURIComponent(
    "Hi Parivar Sathi, I have some questions about fertility support. Can you help?"
  );
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
        className={`header -type-3 -page-5 js-header ${addClass ? "-is-sticky" : ""
          }`}
      >
        <div className="header__container container">
          {/* Mobile Header */}
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

          {/* Desktop Header - Logo */}
          <div className="header__logo">
            <Link href="/">
              <Image
                src={'/img/logo/logo.svg'}
                width={120}
                height={120}
                alt="logo"
                priority
                style={{ width: '120px', height: 'auto' }}
              />
            </Link>
          </div>

          {/* Desktop Navigation */}
          <div className="header__right" >
            <div className="text-white ml-20 bg-accent-3-v rounded-200 px-20 py-5">
              <Link href="/">Home</Link>
            </div>
            <div className="text-white ml-20 bg-accent-3-v rounded-200 px-20 py-5">
              <Link href={`https://wa.me/${phoneNumber}?text=${message}`} target="_blank">Counselling Support</Link>
            </div>
            <div className="text-white ml-20 bg-accent-3-v rounded-200 px-20 py-5">
              <Link href="/register-opd-camp">OPD Camp</Link>
            </div>
            <div className="text-white ml-20 bg-accent-3-v rounded-200 px-20 py-5">
              <Link href="/clinic-partnership">Partner With Us</Link>
            </div>
            <div className="text-white ml-20 bg-accent-3-v rounded-200 px-20 py-5">
              <Link href="/joinus">Join Our Team</Link>
            </div>
            <div className="text-white ml-20 bg-accent-3-v rounded-200 px-20 py-5">
              <Link href="/about">About Us</Link>
            </div>
            <div className="text-white ml-20 bg-accent-3-v rounded-200 px-20 py-5">
              <Link href="/help-center">FAQs</Link>
            </div>
            <div className="text-white ml-20 bg-accent-3-v rounded-200 px-20 py-5">
              <Link href="/contact">Contact</Link>
            </div>
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
            flex-wrap: wrap !important;
          }
          .headerMobile__right {
            display: none !important;
          }
          .tablet-nav {
            display: none !important;
          }
        }

        /* Large Desktop - Above 1400px - Better spacing for many nav items */
        @media (min-width: 1400px) {
          .header__right div {
            margin-left: 20px !important;
          }
        }

        /* Medium Desktop - 1200px to 1399px - Tighter spacing */
        @media (max-width: 1399px) and (min-width: 1200px) {
          .header__right div {
            margin-left: 10px !important;
            padding-left: 15px !important;
            padding-right: 15px !important;
            font-size: 14px !important;
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
            width: 100% !important;
            justify-content: space-between !important;
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

        /* Navigation item hover effects */
        .header__right div:hover {
          background-color: rgb(137, 71, 204) !important;
          transition: background-color 0.3s ease !important;
        }

        /* Responsive navigation text */
        @media (max-width: 1199px) and (min-width: 991px) {
          .headerMobile__right {
            gap: 52rem !important;
          }
        }

        /* Ensure navigation items don't overflow on smaller desktops */
        @media (max-width: 1299px) and (min-width: 1200px) {
          .header__right {
            font-size: 13px !important;
          }
          .header__right div {
            padding-left: 12px !important;
            padding-right: 12px !important;
            padding-top: 3px !important;
            padding-bottom: 3px !important;
          }
        }
      `}</style>
    </>
  );
}