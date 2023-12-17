import Participants from "./Participants";
import TicketFormInfo from "./TicketFormInfo";

export default function ParticipantComp({ setToggleCheckout }) {
  return (
    <div>
      <section className="sec">
        <div className="ticket-area">
          <TicketFormInfo></TicketFormInfo>
        </div>
        <div className="flow-area flow-grid">
          <Participants setToggleCheckout={setToggleCheckout}></Participants>
        </div>
      </section>
    </div>
  );
}
