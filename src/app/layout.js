import { Poppins, Inter } from "next/font/google";
import "./globals.css";
import FloatingWhatsApp from "@/components/FloatingWhatsApp";

const poppins = Poppins({
  weight: ["400", "500", "600", "700"],
  variable: "--font-poppins",
  subsets: ["latin"],
});

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
});

export const metadata = {
  title: "Gate Automation | Smart & Secure Gate Systems",
  description: "Secure, modern and intelligent gate systems for homes and businesses.",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body
        className={`${poppins.variable} ${inter.variable} font-sans antialiased`}
      >
        <FloatingWhatsApp />
        {children}
      </body>
    </html>
  );
}
