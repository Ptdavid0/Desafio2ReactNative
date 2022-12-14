import styled, { DefaultTheme } from "styled-components/native";
import { ArrowUpRight } from "phosphor-react-native";

type TextProps = {
  fontSize: keyof DefaultTheme["FONT_SIZE"];
};

export type ContainerSize = "small" | "large";

type ContainerProps = {
  width: ContainerSize;
  backgroundColor: keyof DefaultTheme["COLORS"];
};

export const Container = styled.View<ContainerProps>`
  background-color: ${({ theme, backgroundColor }) =>
    theme.COLORS[backgroundColor]};
  height: ${({ width }) => (width === "small" ? "110px" : "102px")};
  width: ${({ width }) => (width === "small" ? "48%" : "100%")};
  align-items: center;
  justify-content: center;
  flex-direction: column;
  border-radius: 8px;
  padding: 20px 16px;
`;

export const Statistic = styled.Text<TextProps>`
  font-size: ${({ theme, fontSize }) => theme.FONT_SIZE[fontSize]}px;
  color: ${({ theme }) => theme.COLORS.GRAY_700};
  font-family: ${({ theme }) => theme.FONT_FAMILY.BOLD};
`;
export const Description = styled.Text`
  font-size: ${({ theme }) => theme.FONT_SIZE.MD}px;
  color: ${({ theme }) => theme.COLORS.GRAY_600};
  font-family: ${({ theme }) => theme.FONT_FAMILY.REGULAR};
  margin-top: 2px;
`;

export const IconContainer = styled.TouchableOpacity`
  justify-content: flex-end;
  align-items: flex-end;
  width: 100%;
  position: absolute;
  top: 0;
  right: 0;
  margin: 2px 2px 0 0;
`;

export const Icon = styled(ArrowUpRight).attrs(({ theme }) => ({
  color: theme.COLORS.GREEN_DARK,
}))``;
