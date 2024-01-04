import Content from "@/components/Content";
import ShowTicketContent from "@/components/ShowTicketContent";
export const metadata = {
  title: "Buy Tickets",
  description: "Foofest is a 7 day festival with around the clock amazing music and events, delicious food and concious camping options.",
  type: "website",
  image: process.env.NEXT_PUBLIC_HOST + "/_next/image?url=%2Fpartypeople.png&w=1920&q=75",
  url: process.env.NEXT_PUBLIC_HOST + "/TicketFlow",
  icons: {
    icon: "/icon.svg", // /public path
  },
};
function page() {
  return (
    <Content>
      <ShowTicketContent></ShowTicketContent>
    </Content>
  );
}

export default page;
