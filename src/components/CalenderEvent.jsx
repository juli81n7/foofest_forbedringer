"use client"
import "../styles/Calender.css";
import Link from "next/link";
import Image from "next/image";

function CalenderEvent(props) {

const start = props.start.slice(0, 2);
const end = props.end.slice(0, 2);

let myImage=props.img2
function randomIntFromInterval(min, max) { // min and max included 
  return Math.floor(Math.random() * (max - min + 1) + min)
}
if(myImage.startsWith("https")){
   myImage = "https://source.unsplash.com/random/1300×500/?experimental?random="+randomIntFromInterval(1, 500)
}
else{
  myImage = "http://localhost:8080/logos/"+myImage
  console.log(myImage)
}







  return (



    <Link href={`ArtistSingleView/${props.slug}`} className={`event start${ start} end${ end}`}>
    <div className="img_container">

              <img src={myImage} alt="" /></div>
              
              <div className="text">
              <p>{props.start + "-" + props.end}</p>
              <h4>{props.name}</h4>
              </div>
  </Link>


  );
}



export default CalenderEvent;
