import React from "react";
import { DefaultTheme } from "styled-components/native";

import { Container, Description, Statistic } from "./styles";

interface StaticticTextProps {
  statistic: number;
  description: string;
  fontSize: keyof DefaultTheme["FONT_SIZE"];
  isStatistic: boolean;
}

const StaticticText: React.FC<StaticticTextProps> = ({
  statistic,
  description,
  fontSize,
  isStatistic = false,
}) => {
  return (
    <Container>
      <Statistic fontSize={fontSize}>
        {isStatistic ? `${statistic}%` : statistic}
      </Statistic>
      <Description>{description}</Description>
    </Container>
  );
};

export default StaticticText;
