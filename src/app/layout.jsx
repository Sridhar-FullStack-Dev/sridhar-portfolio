import SmoothScroll from "@/components/SmoothScroll";
import "./globals.scss";
import NavBar from "@/components/Navbar";

export const metadata = {
  title: "Portfolio - Sridhar Full Stack Developer",
  description: "A creative web developer who works for your business growth",
  metadataBase: "https://sridhar-portfolio-ashen.vercel.app/",
  openGraph: {
    title: "Portfolio - Sridhar Full Stack Developer",
    description: "A creative web developer who works for your business growth",
  },
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <head>
        <link rel="shortcut icon" href="/favicon.ico" type="image/x-icon" />
      </head>
      <body suppressHydrationWarning={true}>
        <NavBar />
        <SmoothScroll>{children}</SmoothScroll>
      </body>
    </html>
  );
}
