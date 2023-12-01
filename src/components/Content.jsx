"use client";
import Header from "@/components/Header";
import ArtistList from "@/components/ArtistList";

function Content({ schedule, bands, spots }) {
  console.log("DET HER ER SCHEDULE",schedule);
  console.log(bands);

  async function putReq(chosenArea, chosenAmount) {
    let headersList = {
      "Content-Type": "application/json",
    };
    let bodyContent = JSON.stringify({
      area: chosenArea,
      amount: chosenAmount,
    });

    let response = await fetch("http://localhost:8080/reserve-spot", {
      method: "PUT",
      body: bodyContent,
      headers: headersList,
    });

    let data = await response.json();
    console.log(data);
  }
  function reserveSpot(area, spots) {
    putReq(area, spots);
  }
  //   reserveSpot("Muspelheim", 3);

  async function postReq(id) {
    let headersList = {
      "Content-Type": "application/json",
    };

    let bodyContent = JSON.stringify({
      id: id,
    });

    let response = await fetch("http://localhost:8080/fullfill-reservation", {
      method: "POST",
      body: bodyContent,
      headers: headersList,
    });

    let data = await response.json();
    console.log(data);
  }
  function fulfillReservation(id) {
    postReq(id);
  }
  //   fulfillReservation("18h4h4a5slpmiyl9g");

  return (
    <main>
      <Header />
      <ArtistList stageName="Midgård"></ArtistList>
      <ArtistList stageName="Vanaheim"></ArtistList>
      <ArtistList stageName="Jotunheim"></ArtistList>
    </main>
  );
}

export default Content;
