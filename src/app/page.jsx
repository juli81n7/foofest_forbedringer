import Button from "@/components/Button";
import Header from "@/components/Header";
import Navbar from "@/components/Navbar";
import SecondaryBtn from "@/components/SecondaryBtn";
import TicketCard from "@/components/TicketCard";
import ArtistCard from "@/components/ArtistCard";
import ArtistList from "@/components/ArtistList";

export default function Home() {
  return (
    <main>
      <Navbar />
      <Header />
      <Button btntext="View all"></Button>
      <SecondaryBtn secbtntext="View more"></SecondaryBtn>
      <TicketCard></TicketCard>
      <ArtistCard></ArtistCard>
      <ArtistList></ArtistList>
    </main>
  );
}
