import styled, { css } from "styled-components/native";
import { MaterialIcons } from "@expo/vector-icons";

export type ButtonTypeStyleProps = "PRIMARY" | "SECONDARY";

type Props = {
  type: ButtonTypeStyleProps;
  size?: number;
  width?: number | string;
};

export const Container = styled.TouchableOpacity<Props>`
  flex-direction: row;
  margin-top: 10px;

  min-height: 56px;
  max-height: 56px;
  width: ${({ width }) => (width ? width : "100%")};

  background-color: ${({ theme, type }) =>
    type === "PRIMARY" ? theme.COLORS.GRAY_600 : theme.COLORS.WHITE};

  border-radius: 8px;

  justify-content: center;
  align-items: center;
  border: 2px solid;
  border-color: ${({ theme, type }) =>
    type === "PRIMARY" ? theme.COLORS.GRAY_600 : theme.COLORS.GRAY_700};
`;

export const Title = styled.Text<Props>`
  ${({ theme, type }) => css`
    font-family: ${theme.FONT_FAMILY.BOLD};
    font-size: ${theme.FONT_SIZE.MD}px;
    color: ${type === "PRIMARY" ? theme.COLORS.WHITE : theme.COLORS.GRAY_700};
  `}
`;

export const Icon = styled(MaterialIcons).attrs<Props>(
  ({ theme, type, size = 24 }) => ({
    size: size,
    color: type === "PRIMARY" ? theme.COLORS.WHITE : theme.COLORS.GRAY_700,
  })
)`
  margin-right: 8px;
`;
