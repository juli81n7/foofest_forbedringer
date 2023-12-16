"use client"
import { Children } from "react";
import "../styles/Button.css";
import Link from "next/link";
import { ThemeContext, setThemeContext  } from "@/components/MyContext";
import {useState, useContext, useEffect } from "react";
import { SetUserContext, UserContext } from "@/components/MyContext";


function Body({ children}) {
const dispatchUser = useContext(SetUserContext)
const userState = useContext(UserContext)
const [allUsers, setAllUsers]=useState();
  
  useEffect(() => {
    if(userState){
null
    }

else if(sessionStorage.getItem("userlogin")){
    console.log("DER FINDES EN USER I sessionStorage")
  


  async function fetchAllUsers() {
    let headersList = {
      Accept: "*/*",
      apikey: "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6ImN4Y3FzdWtyc2xmbnJ5d3Zra21sIiwicm9sZSI6ImFub24iLCJpYXQiOjE2ODE5NDE1MzYsImV4cCI6MTk5NzUxNzUzNn0.q1lX-ubiMOiGU0SMT99lf7QauZ0wgy7dyaNSLxTobUg",
      Prefer: "return=representation",
    };

    let response = await fetch("https://cxcqsukrslfnrywvkkml.supabase.co/rest/v1/login_info", {
      method: "GET",
      headers: headersList,
    });



    const allUsersInfo = await response.json();
    console.log("allusers",allUsersInfo)
    const userasjson =JSON.parse(sessionStorage.getItem("userlogin"));
    console.log(userasjson.id)
    const myUser = allUsersInfo.find((account) => account.id === userasjson.id)
    console.log("MYUSERINFO",myUser)
setAllUsers(myUser);
dispatchUser(myUser);
    return allUsersInfo;
  }
  
  
 
fetchAllUsers()




  

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
