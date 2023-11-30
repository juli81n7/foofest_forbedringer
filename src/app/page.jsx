import Button from "@/components/Button";
import Header from "@/components/Header";

import SecondaryBtn from "@/components/SecondaryBtn";
import TicketCard from "@/components/TicketCard";
import ArtistCard from "@/components/ArtistCard";
import ArtistList from "@/components/ArtistList";

export default function Home() {
  return (
    <main>
      <Header />

      <ArtistList></ArtistList>
      <ArtistList></ArtistList>
    </main>
  );
}
