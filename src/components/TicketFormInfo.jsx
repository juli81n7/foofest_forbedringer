import "@/styles/TicketFormInfo.css";

export default function TicketFormInfo() {
  return (
    <div>
      <div className="ticketinfo">
        <div>
          <div className="ticketamount">
            <p>3</p>
            <p>All week tickets</p>
          </div>
          <div className="ticketpay">
            <p>3x 1200</p>
            <p>3600 DKK</p>
          </div>
        </div>
        <div className="perstent1">
          <div className="ticketamount">
            <p>1</p>
            <p>1 pers tent</p>
          </div>
          <p>included</p>
        </div>
        <div className="perstent2">
          <div className="ticketamount">
            <p>2</p>
            <p>2 pers tent</p>
          </div>
          <p>included</p>
        </div>
        <div className="perstent3">
          <div className="ticketamount">
            <p>3</p>
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
          <p>24000 DKK</p>
        </div>
      </div>
    </div>
  );
}
