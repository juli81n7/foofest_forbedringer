import "./globals.css";
import Navbar from "@/components/Navbar";
import { NumberProvider } from "@/components/MyContext";
export const metadata = {};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>
        <NumberProvider>
          <Navbar />
          {children}
        </NumberProvider>
      </body>
    </html>
  );
}
