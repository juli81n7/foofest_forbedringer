import CountButton from "./CountButton";
import "../styles/ChooseTicket.css";

function ChooseTicket() {
  return (
    <div>
      <h2>CHOOSE YOUR TICKETS</h2>
      <div className="counter-line">
        <h3>ALL WEEK TICKET</h3>
        <div className="counter">
          <CountButton btntext="-" />
          <p>0</p>
          <CountButton btntext="+" />
        </div>
      </div>
    </div>
  );
}

export default ChooseTicket;
