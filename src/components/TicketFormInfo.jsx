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
        <div>
          <div className="ticketamount">
            <p>{state.regular}</p>
            <p>Regular tickets</p>
          </div>
          <div className="ticketpay">
            <p>{state.regular} X 799</p>
            <p>{state.regular * 799} DKK</p>
          </div>
        </div>
        <div>
          <div className="ticketamount">
            <p>{state.vip}</p>
            <p>VIP tickets</p>
          </div>
          <div className="ticketpay">
            <p>{state.vip} X 1299</p>
            <p>{state.vip * 1299} DKK</p>
          </div>
        </div>
        <div className="perstent1">
          <div className="ticketamount">
            <p>{state.tents.one}</p>
            <p>1 pers tent</p>
          </div>
          <p>included</p>
        </div>
        <div className="perstent2">
          <div className="ticketamount">
            <p>{state.tents.two}</p>
            <p>2 pers tent</p>
          </div>
          <p>included</p>
        </div>
        <div className="perstent3">
          <div className="ticketamount">
            <p>{state.tents.three}</p>
            <p>3 pers tent</p>
          </div>
          <p>included</p>
        </div>
        {state.crewSetup ? (
          <div className="totalprice">
            <p>Crew tent setup X {totalTents}</p>
            <p>{totalTentsCrewPrice} DKK</p>
          </div>
        ) : null}
        {state.greenCamping ? (
          <div className="totalprice">
            <p>Green Camping fee X {totalTents}</p>
            <p>{totalGreenCamping} DKK</p>
          </div>
        ) : null}
        <div className="camparea">
          <p>Camping area</p>
          <h3>{state.campingArea}</h3>
        </div>
        <div className="totalprice">
          <p>Total price</p>
          <p>{state.regular * 799 + state.vip * 1299 + (state.crewSetup ? totalTentsCrewPrice : null) + (state.greenCamping ? totalGreenCamping : null)} DKK</p>
        </div>
      </div>
    </div>
  );
}
