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

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <head>
        <link
          href="https://fonts.googleapis.com/css2?family=Montserrat:wght@600;700&family=Open+Sans:wght@400;600&display=swap"
          rel="stylesheet"
        />
        <link rel="icon" href="/img/logo/logo2.svg" type="image/svg+xml" />
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
