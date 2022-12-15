import React from "react";
import { Container, ContainerSize, Icon, IconContainer } from "./styles";
import { DefaultTheme } from "styled-components/native";
import { useNavigation } from "@react-navigation/native";
import StaticticText from "../StaticticText";

interface InfoContainerProps {
  statistic: number;
  description: string;
  color: keyof DefaultTheme["COLORS"];
  fontSize: keyof DefaultTheme["FONT_SIZE"];
  hasIconDetails?: boolean;
  size: ContainerSize;
  addMargin?: boolean;
  isStatistic: boolean;
}

const InfoContainer: React.FC<InfoContainerProps> = ({
  statistic,
  description,
  color,
  fontSize,
  hasIconDetails,
  size,
  addMargin,
  isStatistic,
}) => {
  const { navigate } = useNavigation();
  const handleNavigate = () => {
    navigate("Statistics", {
      statistic,
      description,
    });
  };
  return (
    <Container backgroundColor={color} width={size} addMargin={addMargin}>
      {hasIconDetails && (
        <IconContainer onPress={handleNavigate}>
          <Icon />
        </IconContainer>
      )}
      <StaticticText
        isStatistic={isStatistic}
        statistic={statistic}
        description={description}
        fontSize={fontSize}
      />
    </Container>
  );
};

export default InfoContainer;
