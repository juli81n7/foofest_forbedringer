import Content from "@/components/Content";
import Calender from "@/components/Calender";
import { schedule, spots, events, bands } from "../data";

import "../../styles/Program.css";

export const metadata = {
  title: "Program",
  description: "Foofest is a 7 day festival with around the clock amazing music and events, delicious food and concious camping options. The festival program is filled with exciting artists for you to experience.",
  type: "website",
  image: process.env.NEXT_PUBLIC_HOST + "/_next/image?url=%2Fpartypeople.png&w=1920&q=75",
  url: process.env.NEXT_PUBLIC_HOST + "/Program",
  icons: {
    icon: "/icon.svg", // /public path
  },
};

export default function Program() {
  return (
    <Content schedule={schedule} spots={spots} events={events}>
      <Calender schedule={schedule} bands={bands} title="Program"/>
    </Content>
  );
}
