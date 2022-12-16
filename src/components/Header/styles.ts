import styled, { css, DefaultTheme } from "styled-components/native";
import { MaterialIcons } from "@expo/vector-icons";

type HeaderStyleProps = "PRIMARY" | "SECONDARY" | "TERTIARY";

type Props = {
  type: HeaderStyleProps;
};

const getBackgroundColor = (type: HeaderStyleProps, theme: DefaultTheme) => {
  switch (type) {
    case "PRIMARY":
      return theme.COLORS.GREEN_MID;
    case "SECONDARY":
      return theme.COLORS.RED_MID;
    case "TERTIARY":
      return theme.COLORS.GRAY_300;
    default:
      return theme.COLORS.GRAY_300;
  }
};

export const HeaderContainer = styled.View<Props>`
  ${({ theme, type }) => css`
    background-color: ${getBackgroundColor(type, theme)};
  `}
  flex-direction: column;
  align-items: center;
  justify-content: space-between;
  padding: 72px 48px 24px 48px;
  border-radius: 8px;
`;

export const Title = styled.Text`
  ${({ theme }) => css`
    font-family: ${theme.FONT_FAMILY.BOLD};
    font-size: ${theme.FONT_SIZE.XL}px;
    color: ${theme.COLORS.GRAY_700};
  `}
`;

export const IconContainer = styled.TouchableOpacity`
  margin-right: 8px;
  left: 24px;
  top: 70px;
  position: absolute;
`;

export const Icon = styled(MaterialIcons).attrs(({ theme }) => ({
  size: 28,
  color: theme.COLORS.GRAY_500,
}))``;
