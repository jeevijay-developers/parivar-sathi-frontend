const sections = [
  {
    title: "Organization",
    links: [
      { id: 1, text: "About Us", href: "/about" },
      // { id: 2, text: "Tourz Reviews", href: "#" },
      { id: 3, text: "Contact Us", href: "/contact" },
      { id: 4, text: "Join Us", href: "/clinic-partnership" },
      // { id: 5, text: "Data Policy", href: "#" },
      // { id: 6, text: "Cookie Policy", href: "#" },
      // { id: 7, text: "Legal", href: "#" },
      // { id: 8, text: "Sitemap", href: "#" },
    ],
  },
  // {
  //   title: "Support",
  //   links: [
  //     { id: 9, text: "Get in Touch", href: "#" },
  //     { id: 10, text: "Help center", href: "#" },
  //     { id: 11, text: "Live chat", href: "#" },
  //     { id: 12, text: "How it works", href: "#" },
  //   ],
  // },
];

export default function FooterLinks() {
  return (
    <>
      {sections.map((elm, i) => (
        <div key={i} className="col-lg-auto col-6">
          <h4 className="text-20 fw-500">{elm.title}</h4>

          <div className="y-gap-10 mt-20">
            {elm.links.map((elm2, i2) => (
              <a key={i2} className="d-block fw-500" href={elm2.href}>
                {elm2.text}
              </a>
            ))}
          </div>
        </div>
      ))}
    </>
  );
}
