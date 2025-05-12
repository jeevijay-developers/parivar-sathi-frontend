"use client";

export default function ContactForm() {
  return (
    <section className="layout-pt-lg layout-pb-lg">
      <div className="container">
        <div className="row justify-center">
          <div className="col-lg-8">
            <h2 className="text-30 fw-700 text-center mb-30">join Us Form</h2>

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
                    placeholder=" motivation for joining?"
                    rows="6"
                    required
                  ></textarea>
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
    </section>
  );
}
