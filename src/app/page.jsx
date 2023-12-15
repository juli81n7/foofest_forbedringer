import Content from "@/components/Content";
import Header from "@/components/Header";
import ArtistList from "@/components/ArtistList";

import { schedule, bands, spots, events } from "./data";

export default async function Home() {
  return (
    <>
      <Content schedule={schedule} spots={spots} events={events}>
        <Header />

        <ArtistList bands={bands} schedule={schedule} stageName="Midgard"></ArtistList>
        <ArtistList bands={bands} schedule={schedule} stageName="Vanaheim"></ArtistList>
        <ArtistList bands={bands} schedule={schedule} stageName="Jotunheim"></ArtistList>
      </Content>
    </>
  );
}
