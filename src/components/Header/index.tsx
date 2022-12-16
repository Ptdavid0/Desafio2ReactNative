import React from "react";

import { useNavigation } from "@react-navigation/native";

import { HeaderContainer, Icon, IconContainer, Title } from "./styles";

type HeaderProps = {
  title: string;
  isInDiet?: boolean;
};

const Header: React.FC<HeaderProps> = ({ title, isInDiet = null }) => {
  const { navigate } = useNavigation();
  return (
    <HeaderContainer
      type={isInDiet === null ? "TERTIARY" : isInDiet ? "PRIMARY" : "SECONDARY"}
    >
      <IconContainer onPress={() => navigate("Home")}>
        <Icon name="arrow-back" />
      </IconContainer>
      <Title>{title}</Title>
    </HeaderContainer>
  );
};

export default Header;
