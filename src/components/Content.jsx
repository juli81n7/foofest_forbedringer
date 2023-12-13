"use client"
import { useContext } from "react";
import { ThemeContext } from "./MyContext";

function Content({ children }) {
  const state = useContext(ThemeContext)

  return <main>{children}</main>;
}

export default Content;
