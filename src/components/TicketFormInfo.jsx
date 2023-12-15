import "@/styles/TicketFormInfo.css";
import { useContext } from "react";
import { ValueContext } from "./MyContext";
export default function TicketFormInfo({ ticketAmount, onePers, twoPers, threePers, selectedArea }) {
  const state = useContext(ValueContext);
  const totalTents = state.tents.one + state.tents.two + state.tents.three;
  const totalTentsCrewPrice = state.tents.one * 199 + state.tents.two * 299 + state.tents.three * 399;
  const totalGreenCamping = totalTents * 249;
  return (
    <div>
      <div className="ticketinfo">
        <h2 className="ticketformh2">Your tickets</h2>
        {state.regular ? (
          <div>
            <div className="ticketamount">
              <p>{state.regular}</p>
              <p>Regular tickets</p>
            </div>
            <div className="ticketpay">
              <p>{state.regular} X 799 DKK</p>
              <p>{state.regular * 799} DKK</p>
            </div>
          </div>
        ) : null}
        {state.vip ? (
          <div>
            <div className="ticketamount">
              <p>{state.vip}</p>
              <p>VIP tickets</p>
            </div>
            <div className="ticketpay">
              <p>{state.vip} X 1299 DKK</p>
              <p>{state.vip * 1299} DKK</p>
            </div>
          </div>
        ) : null}

        {state.tents.one ? (
          <div>
            <div className="ticketamount">
              <p>{state.tents.one}</p>
              <p>1 pers tent</p>
            </div>
            <div className="ticketpay">
              <p>FREE </p>
              <p>0 DKK</p>
            </div>
          </div>
        ) : null}
        {state.tents.two ? (
          <div>
            <div className="ticketamount">
              <p>{state.tents.two}</p>
              <p>2 pers tent</p>
            </div>
            <div className="ticketpay">
              <p>FREE </p>
              <p>0 DKK</p>
            </div>
          </div>
        ) : null}
        {state.tents.three ? (
          <div>
            <div className="ticketamount">
              <p>{state.tents.three}</p>
              <p>3 pers tent</p>
            </div>
            <div className="ticketpay">
              <p>FREE </p>
              <p>0 DKK</p>
            </div>
          </div>
        ) : null}
        {state.crewSetup ? (
          <div>
            <div className="ticketamount">
              <p>{totalTents}</p>
              <p>Crew tent setup </p>
            </div>
            <div className="ticketpay">
              <div>
                {state.tents.one ? <p>{state.tents.one} X 199 DKK</p> : null}
                {state.tents.two ? <p>{state.tents.two} X 299 DKK</p> : null}
                {state.tents.three ? <p>{state.tents.three} X 399 DKK</p> : null}
              </div>
              <p>{totalTentsCrewPrice} DKK</p>
            </div>
          </div>
        ) : null}
        {state.greenCamping ? (
          <div>
            <div className="ticketamount">
              <p>{totalTents}</p>
              <p>Green Camping fee </p>
            </div>
            <div className="ticketpay">
              <p>{totalTents} X 249 DKK </p>
              <p>{totalGreenCamping} DKK</p>
            </div>
          </div>
        ) : null}
        <div>
          <div className="ticketamount">
            <p>1</p>
            <p>Booking fee</p>
          </div>
          <div className="ticketpay">
            <p>99 DKK</p>
            <p>99 DKK</p>
          </div>
        </div>
        <div className="camparea">
          <p>Camping area</p>
          <h3>{state.campingArea}</h3>
        </div>
        <div className="totalprice">
          <p>Total price</p>
          <p>{state.regular * 799 + state.vip * 1299 + (state.crewSetup ? totalTentsCrewPrice : null) + (state.greenCamping ? totalGreenCamping : null) + 99} DKK</p>
        </div>
      </div>
    </div>
  );
}
