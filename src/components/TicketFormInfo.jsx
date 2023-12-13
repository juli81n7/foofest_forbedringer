import "@/styles/TicketFormInfo.css";
import { useContext } from "react";
import { ValueContext } from "./MyContext";
export default function TicketFormInfo({ ticketAmount, onePers, twoPers, threePers, selectedArea }) {
  const state = useContext(ValueContext);
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
          <div className="ticketamount">
            <p>{state.regular}</p>
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
        <div className="camparea">
          <p>Camping area</p>
          <h3>{state.campingArea}</h3>
        </div>
        <div className="totalprice">
          <p>Total price</p>
          <p>{state.regular * 799 + state.vip * 1299} DKK</p>
        </div>
      </div>
    </div>
  );
}
