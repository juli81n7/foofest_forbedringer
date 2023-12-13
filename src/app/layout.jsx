import "./globals.css";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { NumberProvider } from "@/components/MyContext";
export const metadata = {};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>
        <NumberProvider>
          <Navbar />
          {children}
          <Footer />
        </NumberProvider>
      </body>
    </html>
  );
}
