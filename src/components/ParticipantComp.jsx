import Participants from "./Participants";
import TicketFormInfo from "./TicketFormInfo";

export default function ParticipantComp({ ticketAmount, onePers, twoPers, threePers, setOnePers, setTwoPers, setThreePers, selectedArea, setToggleCheckout }) {
  return (
    <div>
      <section className="sec">
        <div className="ticket-area">
          <TicketFormInfo selectedArea={selectedArea} ticketAmount={ticketAmount} onePers={onePers} twoPers={twoPers} threePers={threePers} setOnePers={setOnePers} setTwoPers={setTwoPers} setThreePers={setThreePers}></TicketFormInfo>
        </div>
        <div className="flow-area flow-grid">
          <Participants setToggleCheckout={setToggleCheckout}></Participants>
        </div>
      </section>
    </div>
  );
}
