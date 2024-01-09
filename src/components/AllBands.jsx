import Link from "next/link";
import Recommended from "./RecommendedList";
import LikeBtn from "./LikeBtn";
import Image from "next/image";
import { useState, useEffect } from "react";

import "../styles/SingleView.css"
import "../styles/RecommendedArtist.css";
import "../styles/AllBands.css"


function AllBands(props) {
    const [bands, setbands] = useState([]);
    const [day, setDay] = useState("all");
    const [genre, setgenre] = useState("all");
    let AllBands = [];
    let filteredBands =[];
let Allgenres=[];
props.bands.map((band)=>{
const newObj = {
    name:band.genre
}

Allgenres.push(newObj)
}

)



  

    Object.keys(props.schedule).map((stage) => {
      Object.keys(props.schedule[stage]).map((day) => {
        props.bands.map((band) => {
          const BandsFromSchedules = props.schedule[stage][day].find((act) => act.act === band.name);
          const Plaingday = day;
  
          if (BandsFromSchedules) {
            const BandsFromSchedulesObject = {
              bandSchedule: BandsFromSchedules,
              band: band,
              day: Plaingday,
            };
  
            AllBands.push(BandsFromSchedulesObject);
            filteredBands.push(BandsFromSchedulesObject);
          }
        });
      });

    });


    useEffect(() => {
      
      setbands(AllBands)
      }, []);
      useEffect(() => {
          filteredBands = bands

          
        }, [bands]);
    
function genreChange(e){
console.log(e.target.value)
setgenre(e.target.value)

if(e.target.value === "all"){

    if(day==="all"){
        filteredBands=AllBands; 
        setbands(filteredBands)
        console.log("ALL EFTER FILTER",filteredBands)    
    }
    else{
        filteredBands=AllBands.filter((myband)=>myband.day === day)
        setbands(filteredBands)
        console.log("EFTER FILTER",filteredBands)  
    }


    
}
else{
    filteredBands=AllBands.filter((myband)=>myband.band.genre === e.target.value)
    setbands(filteredBands)
    console.log("EFTER FILTER",filteredBands)
}

}
function dayChange(e){
    setDay(e.target.value)
console.log(e.target.value)
if(e.target.value === "all"){
    if(genre==="all"){
        filteredBands=AllBands;   
        setbands(AllBands)
        console.log("ALL EFTER FILTER",filteredBands)
    }
    else{
        
        filteredBands=AllBands.filter((myband)=>myband.band.genre === genre)
        setbands(filteredBands)
        console.log("EFTER FILTER",filteredBands)  
    }
    
}
else{
    
    if(genre==="all"){
        filteredBands=AllBands.filter((myband)=>myband.day === e.target.value)
        setbands(filteredBands)
        console.log("EFTER FILTER",filteredBands)
    }
    else{
        const filteredBandsFromDay=AllBands.filter((myband)=>myband.day === e.target.value)
        console.log("filteredBandsFromDay", filteredBandsFromDay)
        const filteredBandsWithDayAndGenre = filteredBandsFromDay.filter((myband)=>myband.band.genre === genre)
        console.log("filteredBandsWithDayAndGenre", filteredBandsWithDayAndGenre)
        setbands(filteredBandsWithDayAndGenre)
        console.log("EFTER FILTER",filteredBandsWithDayAndGenre)
    }
   
}

}

  return (
    <section className="all_bands">
<h2>All bands</h2>
<div className="filterbtns">
<label htmlFor="day">
Day
<select onChange={dayChange} name="day" id="day">
<option value="all">All</option>
<option value="mon">Monday</option>
<option value="tue">Tuesday</option>
<option value="wed">Wednsday</option>
<option value="thu">Thursday</option>
<option value="fri">Friday</option>
<option value="sat">Saturday</option>
<option value="sun">Sunday</option>

</select>
</label>
<label htmlFor="genre">
Genre
<select onChange={genreChange} name="genre" id="genre">
<option value="all">All</option>
<option value="Alternative Metal">Alternative Metal</option>
{Allgenres.map((ting)=>{
    <option key={ting} value="ting">{ting}</option>
} )}


</select>
</label>
</div>
<Recommended>
{bands.map((myband) => (
    <div key={myband.band.slug}>
      <div className="recommended-artist-container" key={myband.band.slug}>
        <div className="likeBtnContainer">
          <LikeBtn name={myband.band.name} color="orange" />
        </div>
        <Link href={`ArtistSingleView/${myband.band.slug}`}>{myband.band.logo.startsWith("http") ? <Image width={720} height={480} src={myband.band.logo} alt={myband.band.name} /> : <img src={process.env.NEXT_PUBLIC_HOST + "/logos/" + myband.logo} alt={myband.band.name} />}</Link>
        <Link href={`ArtistSingleView/${myband.band.slug}`}>
          <div className="recommended-artist">
            <h3>{myband.band.name}</h3>
            <div className="stageinfo">
            <p>{myband.day.toUpperCase()}</p>
            <p>{myband.bandSchedule.start}</p>
            </div>
            
          </div>
        </Link>
      </div>
    </div>
  ))}
</Recommended> 
    </section>
  );
}

export default AllBands;
