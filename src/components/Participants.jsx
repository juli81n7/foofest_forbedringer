import ParticipantInfo from "./ParticipantInfo";
import TicketFormInfo from "./TicketFormInfo";

export default function Participants() {
  return (
    <div>
      <section className="sec">
        <div className="leftside">
          <h2 className="ticketformh2">Your tickets</h2>
          <TicketFormInfo></TicketFormInfo>
        </div>
        <div className="right">
          <h2 className="ticketformh2">Info on participants</h2>
          <ParticipantInfo></ParticipantInfo>
          <ParticipantInfo></ParticipantInfo>
          <ParticipantInfo></ParticipantInfo>
        </div>
      </section>
    </div>
  );
}
