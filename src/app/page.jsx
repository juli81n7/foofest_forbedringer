import Content from "@/components/Content";
import { schedule, bands, spots, events } from "./data";

// glitch server end-point: "https://flash-metal-egg.glitch.me/ENDPOINT"
export default async function Home() {
  

  return (
    <>
      <Content schedule={schedule} bands={bands} spots={spots} events={events} />
    </>
  );
}
