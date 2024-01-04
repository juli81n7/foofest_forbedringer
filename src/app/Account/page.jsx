import { loginInfo, schedule, bands } from "../data";
import Content from "@/components/Content";
import AccountContent from "@/components/AccountContent";

export const metadata = {
  title: "Account",
  description: "Foofest is a 7 day festival with around the clock amazing music and events, delicious food and concious camping options.",
  type: "website",
  image: process.env.NEXT_PUBLIC_HOST + "/_next/image?url=%2Fpartypeople.png&w=1920&q=75",
  url: process.env.NEXT_PUBLIC_HOST + "/Account",
};

function Account() {
  return (
    <Content>
      <AccountContent loginInfo={loginInfo} schedule={schedule} bands={bands}></AccountContent>
    </Content>
  );
}

export default Account;
