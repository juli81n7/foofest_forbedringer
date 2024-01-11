import Button from "@/components/Button";
import Prices from "@/components/Prices";
import TicketVisual from "@/components/TicketVisual";
import ScrollArrow from "@/components/ScrollArrow";
import Link from "next/link";
import "../../styles/Tickets.css";

export const metadata = {
  title: "Tickets",
  description: "Foofest is a 7 day festival with around the clock amazing music and events, delicious food and concious camping options.",
  type: "website",
  image: process.env.NEXT_PUBLIC_HOST + "/_next/image?url=%2Fpartypeople.png&w=1920&q=75",
  url: process.env.NEXT_PUBLIC_HOST + "/Tickets",
  icons: {
    icon: "/icon.svg", // /public path
  },
};

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
        <ScrollArrow />
      </section>
      <Prices />
    </main>
  );
}
