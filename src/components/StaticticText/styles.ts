import styled, { DefaultTheme } from "styled-components/native";

type TextProps = {
  fontSize: keyof DefaultTheme["FONT_SIZE"];
};

export const Container = styled.View`
  align-items: center;
  flex-direction: column;
`;

export const Statistic = styled.Text<TextProps>`
  font-size: ${({ theme, fontSize }) => theme.FONT_SIZE[fontSize]}px;
  color: ${({ theme }) => theme.COLORS.GRAY_700};
  font-family: ${({ theme }) => theme.FONT_FAMILY.BOLD};
  justify-content: center;
`;
export const Description = styled.Text`
  font-size: ${({ theme }) => theme.FONT_SIZE.MD}px;
  color: ${({ theme }) => theme.COLORS.GRAY_600};
  font-family: ${({ theme }) => theme.FONT_FAMILY.REGULAR};
  margin-top: 2px;
  justify-content: center;
  text-align: center;
`;
