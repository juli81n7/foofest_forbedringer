"use client"
import { Children } from "react";
import "../styles/Button.css";
import Link from "next/link";
import { ThemeContext, setThemeContext  } from "@/components/MyContext";
import { useContext, useEffect } from "react";



function Body({ children}) {

    const state = useContext(ThemeContext);
const dispatch = useContext(setThemeContext);
  
console.log("Theme State in RootLayout:", state);

  return (
    <body data-theme={state?"light":"dark"}>
        {children}
    </body>
  );
}

export default Body;
