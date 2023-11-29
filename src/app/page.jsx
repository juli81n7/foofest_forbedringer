import Button from "@/components/Button";
import Header from "@/components/Header";
import Navbar from "@/components/Navbar";
import SecondaryBtn from "@/components/SecondaryBtn";
import TicketCard from "@/components/TicketCard";

export default function Home() {
  return (
    <main>
      <Navbar />
      <Header />
      <Button btntext="View all"></Button>
      <SecondaryBtn secbtntext="View more"></SecondaryBtn>
      <TicketCard></TicketCard>
    </main>
  );
}
