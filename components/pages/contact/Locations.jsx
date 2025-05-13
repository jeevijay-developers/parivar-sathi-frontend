const locations = [
  {
    id: 1,
    title: "North India",
    address: "A-25, Connaught Place, New Delhi - 110001",
    contact: "+91-11-4000-1234 north@parivarsathi.in",
  },
  {
    id: 2,
    title: "West India",
    address: "5th Floor, Phoenix Marketcity, Kurla, Mumbai - 400070",
    contact: "+91-22-5000-5678 west@parivarsathi.in",
  },
  {
    id: 3,
    title: "South India",
    address: "No. 18, MG Road, Bengaluru - 560001",
    contact: "+91-80-6000-7890 south@parivarsathi.in",
  },
  {
    id: 4,
    title: "East India",
    address: "Salt Lake Sector V, Kolkata - 700091",
    contact: "+91-33-7000-3456 east@parivarsathi.in",
  },
];

export default function Locations() {
  return (
    <section className="layout-pt-lg">
      <div className="container">
        <div className="row y-gap-30">
          {locations.map((elm, i) => (
            <div key={i} className="col-lg-3 col-sm-6">
              <div className="px-30 text-center">
                <h3 className="text-30 md:text-24 fw-700">{elm.title}</h3>

                <div className="mt-20 md:mt-10">
                  {elm.address}
                  <br />
                  <br />
                  {elm.contact}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
