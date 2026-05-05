import "../public/css/style.css";
import "../public/css/blog-section.css";

import { DM_Sans } from "next/font/google";
import ScrollTopBehaviour from "@/components/common/ScrollTopBehavier";
import Wrapper from "@/components/layout/Wrapper";
import WhatsAppFloatingButton from "@/components/common/WhatsAppFloatingButton";
import { ToastContainer } from "react-toastify";
const dmsans = DM_Sans({
  weight: ["400", "500", "700"],
  style: ["normal", "italic"],
  subsets: ["latin"],
  display: "swap",
});
// const inter = Inter({ subsets: ["latin"] });
if (typeof window !== "undefined") {
  import("bootstrap");
}

export const metadata = {
  metadataBase: new URL("https://parivarsaathi.com"),
  alternates: {
    canonical: "/",
  },
  title: "Parivar Saathi - Trying to conceive? We can help.",
  description: "Gentle, honest fertility counseling. Speak to a counselor or attend a free OPD camp in your city.",
  openGraph: {
    type: "website",
    url: "https://parivarsaathi.com",
    title: "Parivar Saathi - Trying to conceive? We can help.",
    description: "Gentle, honest fertility counseling. Speak to a counselor or attend a free OPD camp in your city.",
    images: [{
      url: "https://parivarsaathi.com/img/og-image.png",
      width: 1200,
      height: 630,
    }],
    siteName: "Parivar Saathi",
    locale: "en_IN",
  },
  twitter: {
    card: "summary_large_image",
    title: "Parivar Saathi - Trying to conceive? We can help.",
    description: "Gentle, honest fertility counseling. Speak to a counselor or attend a free OPD camp in your city.",
    images: ["https://parivarsaathi.com/img/og-image.png"],
  }
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <head>
        <link
          href="https://fonts.googleapis.com/css2?family=Montserrat:wght@600;700&family=Open+Sans:wght@400;600&display=swap"
          rel="stylesheet"
        />
        <link rel="icon" href="/favicon.ico?v=2" sizes="any" />
        <link rel="icon" type="image/svg+xml" href="/img/logo/logo2.svg?v=2" />
        <link rel="apple-touch-icon" href="/apple-touch-icon.png" />
      </head>
      <body className={dmsans.className} style={{ backgroundColor: "#FFF9F2" }}>
        <Wrapper>{children}</Wrapper>
        {/* <ScrollToTop /> */}
        <WhatsAppFloatingButton />
        <ScrollTopBehaviour />
        <ToastContainer />
      </body>
    </html>
  );
}
