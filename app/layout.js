import { Sora } from "next/font/google";
import "./globals.css";
import NavBar from "@/components/NavBar";
import Footer from "@/components/Footer";

const sora = Sora({
  subsets: ["latin"],
  weight: ["100", "200", "300", "400", "500", "600", "700", "800"],
  variable: "--font-sora",
});

export const metadata = {
  title: "Ai Community",
  description: "A community for AI enthusiasts and professionals",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={`${sora.variable} bg-black`}>
        <NavBar />
        {children}
        <Footer />
      </body>
    </html>
  );
}
