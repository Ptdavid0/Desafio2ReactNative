import React from "react";

import { useNavigation } from "@react-navigation/native";

import { HeaderContainer, Icon, IconContainer, Title } from "./styles";

type HeaderProps = {
  title: string;
};

const Header: React.FC<HeaderProps> = ({ title }) => {
  const { navigate } = useNavigation();
  return (
    <HeaderContainer type="PRIMARY">
      <IconContainer onPress={() => navigate("Home")}>
        <Icon name="arrow-back" />
      </IconContainer>
      <Title>{title}</Title>
    </HeaderContainer>
  );
};

export default Header;
