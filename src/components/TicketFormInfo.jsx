import "@/styles/TicketFormInfo.css";

export default function TicketFormInfo({ ticketAmount, onePers, twoPers, threePers, setOnePers, setTwoPers, setThreePers }) {
  return (
    <div>
      <div className="ticketinfo">
        <h2 className="ticketformh2">Your tickets</h2>
        <div>
          <div className="ticketamount">
            <p>{ticketAmount}</p>
            <p>All week tickets</p>
          </div>
          <div className="ticketpay">
            <p>{ticketAmount} X 1200</p>
            <p>{ticketAmount * 1200} DKK</p>
          </div>
        </div>
        <div className="perstent1">
          <div className="ticketamount">
            <p>{onePers}</p>
            <p>1 pers tent</p>
          </div>
          <p>included</p>
        </div>
        <div className="perstent2">
          <div className="ticketamount">
            <p>{twoPers}</p>
            <p>2 pers tent</p>
          </div>
          <p>included</p>
        </div>
        <div className="perstent3">
          <div className="ticketamount">
            <p>{threePers}</p>
            <p>3 pers tent</p>
          </div>
          <p>included</p>
        </div>
        <div className="camparea">
          <p>Camping area</p>
          <h3>Svartheim</h3>
        </div>
        <div className="totalprice">
          <p>Total price</p>
          <p>{ticketAmount * 1200} DKK</p>
        </div>
      </div>
    </div>
  );
}
