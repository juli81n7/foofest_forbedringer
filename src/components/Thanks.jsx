"use client";

import { useContext } from "react";
import { UserContext, ReserveContext, OrderStatus } from "./MyContext";

import Button from "./Button";
import "@/styles/Thanks.css";

export default function Thanks() {
  const userState = useContext(UserContext);
  const reserveID = useContext(ReserveContext);
  const orderState = useContext(OrderStatus);
  console.log(userState);
  return (
    <>
      {orderState && (
        <div className="thankscontainer">
          <div>
            <h1>Congratulations</h1>
            <p>You've succesfully purchased tickets to one of the greatest festivals on the planet. Excellent choice.</p>
            <p>An email with your order details have been sent to {userState.email ? userState.email : "your email"}.</p>
          </div>

          <p className="cheers">
            From all of us at Foofest, <br /> cheers :)
          </p>
          <div>
            <h2>Your order number</h2>
            <p>{reserveID ? reserveID : "69420"}</p>
          </div>
          <Button href={"/Account"} btntext={"View tickets"}></Button>
        </div>
      )}
    </>
  );
}
