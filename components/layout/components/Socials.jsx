import { LuYoutube } from "react-icons/lu";

const socialMediaLinks = [
  {
    id: 1,
    class: "icon-facebook",
    href: "https://www.facebook.com/share/1FmF5znjbj/",
  },
  {
    id: 2,
    class: "icon-youtube",
    href: "https://www.youtube.com/",
  },
  {
    id: 3,
    class: "icon-instagram",
    href: "https://www.instagram.com/parivarsaathi",
  },
  {
    id: 4,
    class: "icon-linkedin",
    href: "https://www.linkedin.com/company/parivar-saathi/",
  },
];

export default function Socials() {
  return (
    <>
      {socialMediaLinks.map((elm, i) => (
        <a
          key={i}
          href={elm.href}
          className={elm.class}
          target="_blank"
          rel="noopener noreferrer"
          aria-label={elm.class.replace("icon-", "")}
          style={{ display: "inline-flex", alignItems: "center" }}
        >
          {elm.class === "icon-youtube" ? <LuYoutube size={18} /> : null}
        </a>
      ))}
    </>
  );
}
