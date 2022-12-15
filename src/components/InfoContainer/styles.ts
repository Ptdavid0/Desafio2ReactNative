import styled, { DefaultTheme } from "styled-components/native";
import { ArrowUpRight } from "phosphor-react-native";

export type ContainerSize = "small" | "large";

export type IconProps = {
  type: "PRIMARY" | "SECONDARY";
};

type ContainerProps = {
  width: ContainerSize;
  backgroundColor: keyof DefaultTheme["COLORS"];
  addMargin?: boolean;
};

export const Container = styled.View<ContainerProps>`
  background-color: ${({ theme, backgroundColor }) =>
    theme.COLORS[backgroundColor]};
  height: ${({ width }) => (width === "small" ? "110px" : "107px")};
  width: ${({ width }) => (width === "small" ? "48%" : "100%")};
  align-items: center;
  justify-content: center;
  flex-direction: column;
  border-radius: 8px;
  padding: 20px 16px;
  margin: ${({ addMargin }) => (addMargin ? "8px 0" : "0")};
`;

export const IconContainer = styled.TouchableOpacity`
  justify-content: flex-end;
  align-items: flex-end;
  width: 100%;
  position: absolute;
  top: 0;
  right: 0;
  margin: 5px 5px 0 0;
`;

export const Icon = styled(ArrowUpRight).attrs<IconProps>(
  ({ theme, type = "PRIMARY" }) => ({
    color: type === "PRIMARY" ? theme.COLORS.GREEN_DARK : theme.COLORS.RED_DARK,
    size: 24,
    weight: "bold",
  })
)``;
