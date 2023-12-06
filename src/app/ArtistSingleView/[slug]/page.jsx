

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

console.log("SDLKFHJSDLKFSDHFLKDSHLFSDJFLKHSDKLFJSDLKJFLKSDJFLKSJDFLJSD",schedule)




  


  
  
  return (
    <div>
      
      <ImageContainer name={selectedBand.name} schedule={schedule} selectedBand={selectedBand}/>
      <section className="singlebg">
        <section className="singleartistinfo">
          <h1 className="singleh1">{selectedBand.name}</h1>
         
          <p>{selectedBand.bio}</p>
        </section>
        <section className="singleinfo">
          <section className="singleplaying">
            <h4>Playing Jotenheim</h4>
            <p>Friday</p>
            <p>18-20</p>
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
      <RecommendedList heading="View more alternative rock">
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
