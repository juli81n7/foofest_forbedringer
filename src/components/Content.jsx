"use client";

function Content({ schedule, bands, spots, children }) {


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

  return <main>{children}</main>;
}

export default Content;
