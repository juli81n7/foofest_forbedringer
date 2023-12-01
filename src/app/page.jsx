import Content from "@/components/Content";
import { schedule, bands, spots, events } from "./data";
export default async function Home() {
  

  return (
    <>
      <Content schedule={schedule} bands={bands} spots={spots} events={events} />
    </>
  );
}
