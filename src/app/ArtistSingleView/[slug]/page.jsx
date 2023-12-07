

import React from "react";
import Image from "next/image";
import Button from "@/components/Button";
import "../../../styles/SingleView.css";
import SecondaryBtn from "@/components/SecondaryBtn";
import RecommendedList from "@/components/RecommendedList";
import RecommendedArtist from "@/components/RecommendedArtist";
import { schedule, bands, spots, events } from "../../data";
import ImageContainer from "@/components/ImageContainer";

export async function generateStaticParams() {
  const paths = bands.map((band) => {
    return { slug: band.slug };
  });

  return paths;
}



export default function page({ params }) {
  const { slug } = params;
  const selectedBand = bands.find((band) => band.slug === slug);

  const foundObjects = [];
const genreBands=  bands.filter((band) => band.genre ===selectedBand.genre)
console.log(selectedBand)




Object.keys(schedule).map((stage) => {
  Object.keys(schedule[stage]).map((day) => {
    const bandFromSchedule = schedule[stage][day].find((act)=> act.act === selectedBand.name)
   const scene = stage
   const Plaingday = day
if(
      bandFromSchedule
  
     
  
     ){
     
      foundObjects.band=bandFromSchedule;
      foundObjects.day=day
      foundObjects.stage=stage
    }
  


    



  })

    

}          )


 




  




  


  
  
  return (
    <div className={foundObjects.stage.toLowerCase()}>
      
      <ImageContainer name={selectedBand.name} schedule={schedule} selectedBand={selectedBand}/>
      <section className="singlebg">
        <section className="singleartistinfo">
          <h1 className="singleh1">{selectedBand.name}</h1>
         
          <p>{selectedBand.bio}</p>
        </section>
        <section className="singleinfo">
          <section className="singleplaying">
            <h4>Playing {foundObjects.stage}</h4>
            <p>{foundObjects.day}</p>
            <p>{foundObjects.band.start}-{foundObjects.band.end}</p>
          </section>
          <section className="singlegroup">
            <h4>Group members</h4>
            {selectedBand.members.map((mem, index) => (
              <p key={index}>{mem}</p>
            ))}
          </section>
          <section className="singlebtn">
            <Button href="/" btntext="Save to your program"></Button>
          </section>
        </section>
      </section>
      <RecommendedList heading={"View more " + selectedBand.genre}>


{
genreBands.map((band) => (
    <RecommendedArtist artistName={band.name} img={band.logo} artistTime="19.30"></RecommendedArtist>
    ))
    

}


      </RecommendedList>
      <RecommendedList heading="What else plays friday?">
        <RecommendedArtist artistName="Ukendt Kunstner" artistTime="19:30"></RecommendedArtist>
        <RecommendedArtist artistName="Ukendt Kunstner" artistTime="19:30"></RecommendedArtist>
        <RecommendedArtist artistName="Ukendt Kunstner" artistTime="19:30"></RecommendedArtist>
        <RecommendedArtist artistName="Ukendt Kunstner" artistTime="19:30"></RecommendedArtist>
        <RecommendedArtist artistName="Ukendt Kunstner" artistTime="19:30"></RecommendedArtist>
        <RecommendedArtist artistName="Ukendt Kunstner" artistTime="19:30"></RecommendedArtist>
        <RecommendedArtist artistName="Ukendt Kunstner" artistTime="19:30"></RecommendedArtist>
        <RecommendedArtist artistName="Ukendt Kunstner" artistTime="19:30"></RecommendedArtist>
        <RecommendedArtist artistName="Ukendt Kunstner" artistTime="19:30"></RecommendedArtist>
        <RecommendedArtist artistName="Ukendt Kunstner" artistTime="19:30"></RecommendedArtist>
        <RecommendedArtist artistName="Ukendt Kunstner" artistTime="19:30"></RecommendedArtist>
        <RecommendedArtist artistName="Ukendt Kunstner" artistTime="19:30"></RecommendedArtist>
        <RecommendedArtist artistName="Ukendt Kunstner" artistTime="19:30"></RecommendedArtist>
        <RecommendedArtist artistName="Ukendt Kunstner" artistTime="19:30"></RecommendedArtist>
        <RecommendedArtist artistName="Ukendt Kunstner" artistTime="19:30"></RecommendedArtist>
      </RecommendedList>
    </div>
  );
}
