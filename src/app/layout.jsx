"use client"

import "./globals.css";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import Body from "@/components/Body";

import { NumberProvider } from "@/components/MyContext";
import { useContext, useEffect } from "react";
import { ThemeContext, setThemeContext } from "@/components/MyContext";


export default function RootLayout({ children }) {
  const state = useContext(ThemeContext);
  const dispatch = useContext(setThemeContext);

  console.log("Theme State in RootLayout:", state);

  return (
    <NumberProvider>
    <html  lang="en">
      <Body>
          <Navbar dispatch={dispatch} />
          {children}
          <Footer/>
          </Body>
          </html>
          </NumberProvider>
  );
}
