import Content from "@/components/Content";
import Header from "@/components/Header";
import ArtistList from "@/components/ArtistList";

export const metadata = {
  title: "FooFest",
  description: "Foofest is a 7-day festival with around-the-clock amazing music and events, delicious food and concious camping options.",
  type: "website",
  // keywords: ["Foofest", "Music Festival", "Seven day festival"],
  image: process.env.NEXT_PUBLIC_HOST + "/_next/image?url=%2Fpartypeople.png&w=1920&q=75",
  url: process.env.NEXT_PUBLIC_HOST,
};

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
