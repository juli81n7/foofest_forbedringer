"use client"

import "../styles/FilterBtn.css";
import Link from "next/link";
function Button({ btntext, DaySetter, Day, BtnName, setBtnName, link }) {

function changeState(){
    
    setBtnName(btntext)

    btntext === "Monday"? DaySetter("mon"):null;
    btntext === "Tuesday"? DaySetter("tue"):null;
    btntext === "Wednsday"? DaySetter("wed"):null;
    btntext === "Thursday"? DaySetter("thu"):null;
    btntext === "Friday"? DaySetter("fri"):null;
    btntext === "Saturday"? DaySetter("sat"):null;
    btntext === "Sunday"? DaySetter("sun"):null;


}

  return <Link href={link} onClick={
()=>{
    changeState()
}


  }
  
  className={`filter-button ${BtnName===btntext ? "active" : null }`}
  
  >{btntext}</Link>;
}

export default Button;
