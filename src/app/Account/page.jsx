import { loginInfo } from "../data";
import Content from "@/components/Content";
import AccountContent from "@/components/AccountContent";

function Account() {
  return (
    <Content>
      <AccountContent loginInfo={loginInfo}></AccountContent>
    </Content>
  );
}

export default Account;
