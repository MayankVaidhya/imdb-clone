import { Inter } from "next/font/google";
import "./globals.css";
import Header from "@/components/Header";
import Providers from "./Providers";
import Navbar from "@/components/Navbar";
import SearchBox from "@/components/SearchBox";
import Footer from "@/components/Footer";

const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "Imdb | Clone",
  description: "This is a imdb clone site",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <head>
        <link rel="icon" href="/favicon.png" sizes="any" />
      </head>
      <body className={inter.className}>
        <Providers>
          <Header />
          <Navbar />
          <SearchBox />
          {children}
          <Footer />
        </Providers>
      </body>
    </html>
  );
}
