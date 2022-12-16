import styled, { css } from "styled-components/native";
import { TextInput, TextInputProps } from "react-native";

type Props = TextInputProps & {
  size?: "small" | "medium" | "large";
};

export const Container = styled.TextInput<Props>`
  ${({ theme }) => css`
    font-family: ${theme.FONT_FAMILY.BOLD};
    font-size: ${theme.FONT_SIZE.MD}px;
    color: ${theme.COLORS.GRAY_700};
    border: 1px solid ${theme.COLORS.GRAY_300};
  `}

  min-height: ${({ size }) => (size === "large" ? "120px" : "56px")};
  max-height: ${({ size }) => (size === "large" ? "120px" : "56px")};

  border-radius: 6px;
  padding: 16px;
  margin-bottom: 16px;
`;
