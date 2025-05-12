"use client";

export default function RegisterOpdCampForm() {
  return (
    <section className="layout-pt-lg layout-pb-lg">
      <div className="container">
        <div className="row justify-center">
          <div className="col-lg-8">
            <div className="text-center mb-30">
              <p className="text-18 fw-500 mb-10">What You Get:</p>
              <p className="text-16">
                You’ll get a 1-on-1 conversation with a trained counselor, a
                referral to trusted clinics or doctors, and discount coupons for
                tests (if applicable).
              </p>
            </div>

            <h2 className="text-30 fw-700 text-center mb-20">
              Register for OPD Camp
            </h2>

            <div className="contactForm">
              <form
                onSubmit={(e) => e.preventDefault()}
                className="row y-gap-30"
              >
                <div className="col-md-6">
                  <input
                    type="text"
                    placeholder="Full Name"
                    required
                    className="form-control"
                  />
                </div>
                <div className="col-md-6">
                  <input
                    type="tel"
                    placeholder="Phone Number"
                    required
                    className="form-control"
                  />
                </div>
                <div className="col-md-6">
                  <input
                    type="text"
                    placeholder="City"
                    required
                    className="form-control"
                  />
                </div>
                <div className="col-12">
                  <textarea
                    placeholder="Primary Concern"
                    rows="5"
                    required
                    className="form-control"
                  ></textarea>
                </div>
                <div className="col-12">
                  <button
                    type="submit"
                    className="button -md -dark-1 bg-accent-3-v text-white col-12"
                  >
                    Register Now
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
