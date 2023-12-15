import Button from "@/components/Button";
import Prices from "@/components/Prices";
import TicketVisual from "@/components/TicketVisual";
import "../../styles/Tickets.css";
import Link from "next/link";

export default function Tickets() {
  return (
    <main>
      <section className="landing">
        <h1 className="ticketh1">Get your tickets</h1>
        <Link href="/TicketFlow">
          <TicketVisual />
        </Link>

        <div className="btn_container">
          <Button href="/TicketFlow" btntext="Buy now" />
        </div>
      </section>
      <Prices />
    </main>
  );
}
