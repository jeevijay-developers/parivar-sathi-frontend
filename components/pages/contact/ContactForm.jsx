"use client";

export default function ContactForm() {
  return (
    <section className="layout-pt-lg layout-pb-lg">
      <div className="container">
        <div className="row">
          {/* Location Section */}
          <div className="col-lg-6">
            <div className="px-30">
              <h3 className="text-30 md:text-24 fw-700 mb-30">Our Office</h3>
              
              <div className="contact-info">
                <p className="mb-3">📍 43/3, Ground Floor, Hazra Road, Kolkata - 700019</p>
                <p className="mb-3">📞 +91-9230965019</p>
                <p className="mb-3">✉️ kj@parivarsaathi.com</p>
                <p className="mb-3">🌐 www.parivarsaathi.com</p>
                <p className="mt-4 text-15 text-light-1">
                  A community outreach initiative by Morskap Healthcare LLP
                </p>
              </div>
            </div>
          </div>

          {/* Contact Form Section */}
          <div className="col-lg-6">
            <div className="px-30">
              <h2 className="text-30 fw-700 mb-30">
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
    </section>
  );
}
