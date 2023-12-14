import Button from "@/components/Button";
import Header from "@/components/Header";
import Navbar from "@/components/Navbar";
import SecondaryBtn from "@/components/SecondaryBtn";
import TicketCard from "@/components/TicketCard";
import ArtistCard from "@/components/ArtistCard";
import ArtistList from "@/components/ArtistList";
import TicketVisual from "@/components/TicketVisual";
import Image from "next/image";
import "../../styles/Tickets.css";

export default function Tickets() {
  return (
    <main>
      <section className="landing">
        <h1 className="ticketh1">Get your tickets</h1>

        <TicketVisual />
        <div className="btn_container">
          <Button href="/TicketFlow" btntext="Buy now" />
        </div>
      </section>
    </main>
  );
}
