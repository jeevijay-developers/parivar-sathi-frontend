"use client";

import { homes, pages, tours } from "@/data/menu";
import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";
import React from "react";


export default function Menu() {
  const pathname = usePathname();
  return (
    <>
      <div className="xl:d-none ml-30">
        <div className="desktopNav">
          <div>
            <Link href="/">
              <Image
                src={'/img/logo/logo.svg'}
                width={120}
                height={120}
              />
            </Link>
          </div>
          <div className="text-white ml-20 bg-accent-3-v rounded-200 px-20 py-5 hover">
            <a
              className={
                pathname?.split("/")[1].split("-")[0] == "home"
                  ? "activeMenu"
                  : ""
              }
              href="/"
            >
              Home
            </a>
          </div>

          {/* <div className="desktopNav__item">
            <Link href="/destinations">Counselors</Link>
          </div> */}

          {/* <div className="desktopNav__item">
            <Link href="/destinations">OPD&apos;s</Link>
          </div> */}

          <div className="text-white ml-20 bg-accent-3-v rounded-200 px-20 py-5 ">
            <a href="/clinic-partnership">Join us</a>
          </div>

          <div className="text-white ml-20 bg-accent-3-v rounded-200 px-20 py-5 ">
            <a href="/register-opd-camp">
              Request for OPD camp
              {/* <i className="icon-chevron-down"></i> */}
            </a>

            {/* <div className="desktopNavSubnav">
              <div className="desktopNavSubnav__content">
                {pages.map((elm, i) => (
                  <div key={i} className="desktopNavSubnav__item text-dark-1">
                    {elm.href ? (
                      <Link href={elm.href}>{elm.title}</Link>
                    ) : (
                      <a href="#">
                        {elm.title} <i className="icon-chevron-right"></i>
                      </a>
                    )}

                    {elm.subnav && (
                      <div className="desktopNavSubnav">
                        <div className="desktopNavSubnav__content">
                          {elm.subnav.map((elm2, i2) => (
                            <div key={i2} className="desktopNavSubnav__item">
                              <Link href={elm2.href}>{elm2.title}</Link>
                            </div>
                          ))}
                        </div>
                      </div>
                    )}
                  </div>
                ))}
              </div>
            </div> */}
          </div>

          {/* <div className="desktopNav__item">
            <Link href="/contact">Contact</Link>
          </div> */}
        </div>
      </div>
    </>
  );
}
