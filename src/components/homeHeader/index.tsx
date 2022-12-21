import React from "react";
import { Avatar, HeaderContainer, Logo } from "./styles";

const homeHeader: React.FC = () => {
  return (
    <HeaderContainer>
      <Logo source={require("../../assets/Logo.png")} />
      <Avatar source={require("../../assets/avatar.png")} />
    </HeaderContainer>
  );
};

export default homeHeader;
