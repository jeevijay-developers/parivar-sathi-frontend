"use client";

export default function ContactForm() {
  return (
    <section className="layout-pt-lg layout-pb-lg">
      <div className="container">
        <div className="row">
          {/* Location Section */}
          <div className="col-lg-6">
            <div className="px-30">
              <h3 className="text-30 md:text-24 fw-700 mb-20">Our Offices</h3>
              
              <div className="contact-info">
                {/* Kolkata Office */}
                <div className="office-card mb-20 p-20 bg-light-1 rounded-12 p-4">
                  <div className="d-flex align-items-center mb-15">
                    <span className="icon-pin text-20 text-accent-3-v mr-10"></span>
                    <h4 className="text-18 fw-600 text-accent-3-v">Kolkata Office</h4>
                  </div>
                  <p className="text-15 text-dark-1 mb-0">
                    43/3, Ground Floor, Hazra Road,<br />
                    Kolkata - 700019, West Bengal, India
                  </p>
                </div>

                {/* Delhi NCR Office */}
                <div className="office-card mb-20 p-20 bg-light-1 rounded-12 p-4">
                  <div className="d-flex align-items-center mb-15">
                    <span className="icon-pin text-20 text-accent-3-v mr-10"></span>
                    <h4 className="text-18 fw-600 text-accent-3-v">Delhi NCR Office</h4>
                  </div>
                  <p className="text-15 text-dark-1 mb-0">
                    A3/12 Paschim Vihar,<br />
                    New Delhi - 110063, Delhi, India
                  </p>
                </div>

                {/* Bangladesh Office */}
                <div className="office-card mb-20 p-20 bg-light-1 rounded-12 p-4">
                  <div className="d-flex align-items-center mb-15">
                    <span className="icon-pin text-20 text-accent-3-v mr-10"></span>
                    <h4 className="text-18 fw-600 text-accent-3-v">Bangladesh Office</h4>
                  </div>
                  <p className="text-15 text-dark-1 mb-0">
                    House -28, Road -1, Block - A, Niketon, Gulshan - 1,<br />  Dhaka : 1212
                  </p>
                </div>

                {/* Contact Information */}
                <div className="contact-details mt-40">
                  <h4 className="text-18 fw-600 mb-20 text-accent-3-v">Get in Touch</h4>
                  <div className="contact-item d-flex align-items-center mb-15">
                    <span className="icon-phone text-16 text-accent-3-v mr-15"></span>
                    <a href="tel:+919230965019" className="text-15 text-dark-1">+91-9230965019</a>
                  </div>
                  <div className="contact-item d-flex align-items-center mb-15">
                    <span className="icon-email text-16 text-accent-3-v mr-15"></span>
                    <a href="mailto:kj@parivarsaathi.com" className="text-15 text-dark-1">kj@parivarsaathi.com</a>
                  </div>
                  <div className="contact-item d-flex align-items-center mb-15">
                    <span className="icon-globe text-16 text-accent-3-v mr-15"></span>
                    <a href="https://www.parivarsaathi.com" target="_blank" rel="noopener noreferrer" className="text-15 text-dark-1">www.parivarsaathi.com</a>
                  </div>
                </div>

                <div className="mt-30 pt-20 border-top-light">
                  <p className="text-14 text-light-1 mb-0">
                    <strong>A community outreach initiative by Morskap Healthcare LLP</strong>
                  </p>
                </div>
              </div>
            </div>
          </div>

          {/* Contact Form Section */}
          <div className="col-lg-6">
            <div className="px-30">
              <h2 className="text-30 fw-700 mb-20">
                Leave us your info
              </h2>

              <div className="contactForm">
                <form
                  onSubmit={(e) => e.preventDefault()}
                  className="row y-gap-30"
                >
                  <div className="col-md-6">
                    <input type="text" placeholder="Name" required />
                  </div>
                  <div className="col-md-6">
                    <input type="text" placeholder="Phone" required />
                  </div>
                  <div className="col-12">
                    <input type="text" placeholder="Email" required />
                  </div>
                  <div className="col-12">
                    <textarea placeholder="Message" rows="6" required></textarea>
                  </div>
                  <div className="col-12">
                    <button
                      type="submit"
                      className="button -md -dark-1 bg-accent-3-v text-white col-12"
                    >
                      Send Message
                    </button>
                  </div>
                </form>
              </div>
            </div>
          </div>
        </div>
      </div>

      <style jsx>{`
        .office-card {
          transition: transform 0.3s ease, box-shadow 0.3s ease;
          border: 1px solid #f0f0f0;
        }

        .office-card:hover {
          transform: translateY(-2px);
          box-shadow: 0 5px 15px rgba(0, 0, 0, 0.1);
        }

        .contact-item a {
          text-decoration: none;
          transition: color 0.3s ease;
        }

        .contact-item a:hover {
          color: var(--color-accent-3-v) !important;
        }

        .border-top-light {
          border-top: 1px solid #e8e8e8;
        }

        @media (max-width: 768px) {
          .office-card {
            margin-bottom: 20px !important;
          }
          
          .contact-details {
            margin-top: 30px !important;
          }
        }
      `}</style>
    </section>
  );
}
