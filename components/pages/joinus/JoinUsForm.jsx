"use client";
import { FaDownload } from "react-icons/fa";
import { FaWhatsapp } from "react-icons/fa";

export default function ContactForm() {
  return (
    <section className="layout-pt-lg layout-pb-lg">
      <div className="container">
        <div className="row justify-center">
          <div className="col-lg-8">
            <h2 className="text-30 fw-700 text-center mb-30">
              Partnership Form
            </h2>

            {/* Added Section: Why Clinics & Labs Work With Us */}
            <div className="mb-30">
              <p className="text-16">
                Parivar Sathi partners with clinics and labs that want to grow
                ethically. Here’s why they choose to work with us:
              </p>
              <ul className="mt-10 text-16 list-disc list-inside">
                <li>Filtered, educated clients who are ready for next steps</li>
                <li>Discount system managed via our referral ID system</li>
                <li>Monthly reporting & reconciliation</li>
                <li>No pushy sales, just quiet support</li>
              </ul>
            </div>

            <div className="contactForm">
              <form
                onSubmit={(e) => e.preventDefault()}
                className="row y-gap-30"
              >
                <div className="col-md-6">
                  <input type="text" placeholder="Name" required />
                </div>
                <div className="col-md-6">
                  <input type="phone" placeholder="tel" required />
                </div>
                <div className="col-md-6">
                  <input type="email" placeholder="Email" required />
                </div>
                <div className="col-md-6">
                  <input type="text" placeholder="State" required />
                </div>
                <div className="col-md-6">
                  <input type="text" placeholder="City" required />
                </div>
                <div className="col-md-6">
                  <input type="text" placeholder="Join As?" required />
                </div>
                <div className="col-12">
                  <textarea
                    placeholder="Motivation for joining?"
                    rows="6"
                    required
                  ></textarea>
                </div>
                {/* Primary Submit Button */}
                <div className="col-12">
                  <button
                    type="submit"
                    className="button -md -dark-1 bg-accent-3-v text-white col-12"
                  >
                    Apply to Partner with Us
                  </button>
                </div>
                {/* Extra Buttons */}

                <div className="col-6 mt-20 ">
                  <a
                    href="/clinic-partnership-kit.pdf"
                    className="button -md -dark-1 bg-green-2 text-white col-12"
                    download
                  >
                    Download Clinic Partnership Kit
                    {/* <FaDownload />   */}
                  </a>
                </div>
                <div className="col-6 mt-20">
                  <a
                    href={`https://wa.me/${process.env.NEXT_PUBLIC_PARTNERSHIP_TEAM_WHATSAPP_NUMBER}`}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="button -md -dark-1 bg-green-2 text-white col-12"
                  >
                    {/* <FaWhatsapp /> */}
                    Talk to Our Partnership Team
                  </a>
                </div>
              </form>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
