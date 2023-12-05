import TicketFormInfo from "@/components/TicketFormInfo";
import ChooseTicket from "@/components/ChooseTicket";
import ChooseTent from "@/components/ChooseTent";

import "@/styles/TicketFlow.css";

import ParticipantInfo from "@/components/ParticipantInfo";
import ChooseCamp from "@/components/ChooseCamp";
import CheckoutOptions from "@/components/CheckoutOptions";
import NoTiltTicket from "@/components/NoTiltTicket";

function page() {
  return (
    <main className="main-flow">
      <section className="sec">
        <div className="ticket-area">
          <NoTiltTicket />
        </div>
        <div className="flow-area">
          <ChooseTicket />
          <ChooseTent />
          <ChooseCamp />
          <CheckoutOptions />
        </div>
      </section>
    </main>
  );
}

export default page;
