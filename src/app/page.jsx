import Content from "@/components/Content";
import Header from "@/components/Header";
import ArtistList from "@/components/ArtistList";

// glitch server end-point: "https://flash-metal-egg.glitch.me/ENDPOINT"
export default async function Home() {
  return (
    <>
      <Content schedule={schedule} bands={bands} spots={spots} events={events}>
        <Header />
        <ArtistList stageName="Midgård"></ArtistList>
        <ArtistList stageName="Vanaheim"></ArtistList>
        <ArtistList stageName="Jotunheim"></ArtistList>
      </Content>
    </>
  );
}
