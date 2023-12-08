import Content from "@/components/Content";
import ParticipantComp from "@/components/ParticipantComp";
import TicketContent from "@/components/TicketContent";

function page() {
  return (
    <Content>
      <TicketContent />
      <ParticipantComp></ParticipantComp>
    </Content>
  );
}

export default page;
