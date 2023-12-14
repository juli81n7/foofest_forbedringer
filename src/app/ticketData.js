// Tentbooking
export async function ReserveSpot(chosenArea, chosenAmount) {
  let headersList = {
    "Content-Type": "application/json",
  };
  let bodyContent = JSON.stringify({
    area: chosenArea,
    amount: chosenAmount,
  });

  let response = await fetch(process.env.NEXT_PUBLIC_HOST + "/reserve-spot", {
    method: "PUT",
    body: bodyContent,
    headers: headersList,
  });

  let data = await response.json();
  console.log(data);
  return data;
}

//   reserveSpot("Muspelheim", 3);

// fulfill reservation
export async function fulfillReservation(id) {
  let headersList = {
    "Content-Type": "application/json",
  };

  let bodyContent = JSON.stringify({
    id: id,
  });

  let response = await fetch(process.env.NEXT_PUBLIC_HOST + "/fullfill-reservation", {
    method: "POST",
    body: bodyContent,
    headers: headersList,
  });

  let data = await response.json();

  return data;
}

//   fulfillReservation("18h4h4a5slpmiyl9g");
