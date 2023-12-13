"use client";
import { useContext } from "react";
import { ThemeContext } from "./MyContext";

function Content({ children }) {
  const state = useContext(ThemeContext);
  return <main data-theme={state ? "dark" : "light"}>{children}</main>;
}

export default Content;
