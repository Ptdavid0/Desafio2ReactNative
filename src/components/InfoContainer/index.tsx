import React from "react";
import {
  Container,
  ContainerSize,
  Description,
  Statistic,
  Icon,
  IconContainer,
} from "./styles";
import { DefaultTheme } from "styled-components/native";
import { useNavigation } from "@react-navigation/native";

interface InfoContainerProps {
  statistic: string;
  description: string;
  color: keyof DefaultTheme["COLORS"];
  fontSize: keyof DefaultTheme["FONT_SIZE"];
  hasIconDetails?: boolean;
  size: ContainerSize;
}

const InfoContainer: React.FC<InfoContainerProps> = ({
  statistic,
  description,
  color,
  fontSize,
  hasIconDetails,
  size,
}) => {
  const { navigate } = useNavigation();
  const handleNavigate = () => {
    navigate("Statistics");
  };
  return (
    <Container backgroundColor={color} width={size}>
      {hasIconDetails && (
        <IconContainer onPress={handleNavigate}>
          <Icon />
        </IconContainer>
      )}
      <Statistic fontSize={fontSize}>{statistic}</Statistic>
      <Description>{description}</Description>
    </Container>
  );
};

export default InfoContainer;
