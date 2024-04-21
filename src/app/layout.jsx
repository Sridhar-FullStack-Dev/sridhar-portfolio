import "./globals.scss";
import NavBar from "@/components/Navbar";
import { Analytics } from "@vercel/analytics/react"
import SmoothScroll from "@/components/SmoothScroll";

export const metadata = {
  title: "Portfolio - Sridhar Full Stack Developer",
  description: "A creative web developer who works for your business growth, who having good experiences in fullstack web development. Best web developer in India, Best web developer in Tamilnadu, Best Web developer in thoothukudi. Best website designer in India, Best website designer in Tamilnadu",
  metadataBase: "https://sridhar-portfolio-ashen.vercel.app/",
  openGraph: {
    type: "website",
    url: "https://sridhar-portfolio-ashen.vercel.app",
    title: "Portfolio - Sridhar Full Stack Developer",
    description:
      "A creative web developer who works for your business growth, who having good experiences in fullstack web development. Best web developer in India, Best web developer in Tamilnadu, Best Web developer in thoothukudi. Best website designer in India, Best website designer in Tamilnadu",
    site_name: "Maria Cars - Best Car Fitting Services In Thoothukudi",
  },
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className="antialiased">
        <NavBar />
        <SmoothScroll>{children}</SmoothScroll>
        <Analytics />
      </body>
    </html>
  );
}
