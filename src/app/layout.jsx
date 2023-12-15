"use client";

import "./globals.css";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import Body from "@/components/Body";

import { NumberProvider } from "@/components/MyContext";
import { useContext } from "react";


export default function RootLayout({ children }) {


  


  return (
    <NumberProvider>
      <html lang="en">
        <Body>
          <Navbar />
          {children}
          <Footer />
        </Body>
      </html>
    </NumberProvider>
  );
}
