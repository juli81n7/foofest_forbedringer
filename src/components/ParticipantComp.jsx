import Participants from "./Participants";
import TicketFormInfo from "./TicketFormInfo";

export default function ParticipantComp() {
  return (
    <div>
      <section className="sec">
        <div className="ticket-area">
          <TicketFormInfo></TicketFormInfo>
        </div>
        <div className="flow-area flow-grid">
          <Participants></Participants>
        </div>
      </section>
    </div>
  );
}
