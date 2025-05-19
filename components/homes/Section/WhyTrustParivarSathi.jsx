import Image from "next/image";

const WhyTrustParivarSathi = () => {
  const reasons = [
    {
      icon: "/img/icons/1/4.svg",
      title: "We Don’t Push Treatments",
      description: "We help you make informed decisions without pressure.",
    },
    {
      icon: "/img/icons/1/5.svg",
      title: "We Partner Ethically",
      description: "We only work with clinics that treat you with dignity.",
    },
    {
      icon: "/img/icons/1/6.svg",
      title: "We Value Your Privacy",
      description: "Your concerns stay confidential and are handled with care.",
    },
  ];

  return (
    <section className="layout-pt-md">
      <div className="container">
        <div className="row y-gap-10 justify-between items-end">
          <div className="col-auto">
            <h2 data-aos="fade-up" className="text-30">
              Why Trust Parivar Sathi ?
            </h2>
          </div>
        </div>

        <div
          data-aos="fade-up"
          className="row y-gap-20 pt-40"
        >
          {reasons.map((reason, i) => (
            <div key={i} className="col-xl-4 col-md-4 col-sm-6">
              <div className="featureCard -type-5 -hover-accent-2 group">
                <div className="featureCard__icon">
                  <Image 
                    src={reason.icon} 
                    width={ 60} 
                    height={56} 
                    alt={reason.title}
                    className="w-14 h-14"
                  />
                </div>
                <h4 className="text-18 fw-500 mt-20 group-hover:text-white transition-colors duration-300">
                  {reason.title}
                </h4>
                <p className="text-15 mt-10 fw-bold group-hover:text-white transition-colors duration-300">
                  {reason.description}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default WhyTrustParivarSathi;
