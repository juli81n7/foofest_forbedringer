import { loginInfo, schedule, bands } from "../data";
import Content from "@/components/Content";
import AccountContent from "@/components/AccountContent";

function Account() {
  return (
    <Content>
      <AccountContent loginInfo={loginInfo} schedule={schedule} bands={bands}></AccountContent>
    </Content>
  );
}

export default Account;
