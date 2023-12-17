import Content from "@/components/Content";
import Calender from "@/components/Calender";
import { schedule, spots, events, bands } from "../data";

import "../../styles/Program.css";

export default function Program() {
  return (
    <Content schedule={schedule} spots={spots} events={events}>
      <Calender schedule={schedule} bands={bands} />
    </Content>
  );
}
