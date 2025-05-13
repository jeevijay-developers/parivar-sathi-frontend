import Paymentcards from "../components/Paymentcards";
import FooterLinks from "../components/FooterLinks";
import Socials from "../components/Socials";
import Image from "next/image";

export default function FooterThree() {
  return (
    <footer className="footer -type-1">
      <div className="footer__main">
        <div className="container">
          <div className="footer__info">
            <div className="row y-gap-20 justify-between">
              <div className="col-auto">
                <div className="row y-gap-20 items-center">
                  <div className="col-auto">
                    <i className="icon-headphone text-50"></i>
                  </div>

                  <div className="col-auto">
                    <div className="text-20 fw-500">
                      Talk to us on WhatsApp:&nbsp;
                      <span className="text-accent-2">+91 XXXXX XXXXX</span>
                    </div>
                  </div>
                </div>
              </div>

              <div className="col-auto">
                <div className="footerSocials">
                  <div className="footerSocials__title">Follow Us</div>
                  <div className="footerSocials__icons">
                    <Socials />
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div className="footer__content">
            <div className="row y-gap-40 justify-between">
              <div className="col-lg-4 col-md-6">
                <h4 className="text-20 fw-500">Contact</h4>
                <div className="y-gap-10 mt-20">
                  <a className="d-block" href="#">
                    support@parivarsathi.com
                  </a>
                  <a className="d-block" href="#">
                    +91 XXXXX XXXXX
                  </a>
                  {/* <a
                    href={`https://wa.me/${process.env.NEXT_PUBLIC_COUNSELLOR_WHATSAPP_NUMBER}`}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-20 fw-500 d-inline-block"
                  >
                    <span className="text-black">Talk to us on WhatsApp:</span>
                    &nbsp;
                    <span className="text-accent-2">+91 XXXXX XXXXX</span>
                  </a> */}
                </div>
              </div>

              <FooterLinks />

              {/* <div className="col-lg-3 col-md-6">
                <h4 className="text-20 fw-500">Stay Connected</h4>
                <p className="mt-20">
                  Subscribe to receive updates on camps, new clinics, and
                  fertility guidance.
                </p>

                <div className="footer__newsletter">
                  <input type="email" placeholder="Your email address" />
                  <button>Send</button>
                </div>

                <h4 className="text-20 fw-500 mt-30">Helpful Links</h4>
                <div className="mt-10">
                  <a className="d-block" href="/faqs">
                    FAQs
                  </a>
                  <a className="d-block mt-10" href="/partner-with-us">
                    Partner With Us
                  </a>
                </div>
              </div> */}
            </div>
          </div>
        </div>
      </div>

      <div className="container">
        <div className="footer__bottom">
          <div className="row y-gap-5 justify-between items-center">
            <div className="col-auto">
              <div>
                © {new Date().getFullYear()} Parivar Sathi. All rights reserved.
              </div>
            </div>

            <div className="col-auto">
              <div className="footer__images d-flex items-center x-gap-10">
                <Paymentcards />
              </div>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}
