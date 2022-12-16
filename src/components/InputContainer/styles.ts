import styled, { css } from "styled-components/native";

type Props = {
  size?: "small" | "medium" | "large";
};

export const Container = styled.View<Props>`
  margin-bottom: 16px;
  width: ${({ size }) => (size === "small" ? "48%" : "100%")};
`;

export const Label = styled.Text`
  ${({ theme }) => css`
    font-size: ${theme.FONT_SIZE.LG}px;
    font-family: ${theme.FONT_FAMILY.BOLD};
    color: ${theme.COLORS.GRAY_700};
  `}
  margin-bottom: 6px;
`;
