"use client"

import "./globals.css";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

import { NumberProvider } from "@/components/MyContext";
import { useContext } from "react";
import { ThemeContext } from "@/components/MyContext";


export default function RootLayout({ children }) {

  const state = useContext(ThemeContext)

  return (
    <html  lang="en">
    <NumberProvider>
      <body data-theme={state?"light":"dark"}>
          <Navbar />
          {children}
          <Footer/>
          </body>
        </NumberProvider>
    </html>
  );
}
