"use client"
import { Children } from "react";
import "../styles/Button.css";
import Link from "next/link";
import { ThemeContext, setThemeContext  } from "@/components/MyContext";
import { useContext, useEffect } from "react";
import { SetUserContext, UserContext } from "@/components/MyContext";


function Body({ children}) {
const dispatchUser = useContext(SetUserContext)
const userState = useContext(UserContext)

  
  useEffect(() => {
    if(userState){
null
    }

else if(sessionStorage.getItem("userlogin")){
      console.log("DER FINDES EN USER I sessionStorage")
  const userasjson =JSON.parse(sessionStorage.getItem("userlogin"));
  dispatchUser(userasjson)
  console.log("DETTE ER MIN Store state",useContext)
    }
  }, []);
  


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
