"use client"
import "../styles/Calender.css";
import Link from "next/link";

function CalenderEvent(props) {

const start = props.start.slice(0, 2);
const end = props.end.slice(0, 2);

let myImage=props.img2

if(myImage.startsWith("https")){
  myImage = myImage
}
else{
  myImage = "http://localhost:8080/logos/"+ myImage
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
