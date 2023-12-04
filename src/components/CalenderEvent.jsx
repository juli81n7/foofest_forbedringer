"use client"
import "../styles/Calender.css";
import Link from "next/link";

function CalenderEvent(props) {

const start = props.start.slice(0, 2);
const end = props.end.slice(0, 2);


  return (

    <div className={`event start${ start} end${ end}`} >
              <div className="img_container">
              <img src={props.img2} alt="" /></div>
              <div className="text">
              <p>{props.start + "-" + props.end}</p>
              <h4>{props.name}</h4>
              </div>
              


            </div>
  );
}



export default CalenderEvent;
