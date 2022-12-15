import styled, { css } from "styled-components/native";
import { MaterialIcons } from "@expo/vector-icons";

export const Container = styled.View`
  flex: 1;
`;

export type DietStyleProps = "PRIMARY" | "SECONDARY";

type Props = {
  type: DietStyleProps;
};

export const HeaderContainer = styled.View<Props>`
  ${({ theme, type }) => css`
    background-color: ${type === "PRIMARY"
      ? theme.COLORS.GREEN_MID
      : theme.COLORS.RED_MID};
  `}
  flex-direction: column;
  align-items: center;
  justify-content: space-between;
  padding: 72px 48px 48px 48px;
`;

export const Title = styled.Text`
  ${({ theme }) => css`
    font-family: ${theme.FONT_FAMILY.BOLD};
    font-size: ${theme.FONT_SIZE.MD}px;
    color: ${theme.COLORS.GRAY_700};
  `}
  margin-bottom: 15px;
`;

export const StatisticsContainer = styled.View`
  flex-direction: column;
  align-items: center;
  justify-content: space-between;
  padding: 48px;
  border-top-left-radius: 8px;
  border-top-right-radius: 8px;
`;
export const LowerInfoContainer = styled.View`
  width: 100%;
  flex-direction: row;
  align-items: center;
  justify-content: space-between;
`;

export const IconContainer = styled.TouchableOpacity`
  margin-right: 8px;
  left: 27px;
  top: 60.5px;
  position: absolute;
`;

export const Icon = styled(MaterialIcons).attrs<Props>(({ theme, type }) => ({
  size: 32,
  color: type === "PRIMARY" ? theme.COLORS.GREEN_DARK : theme.COLORS.RED_DARK,
}))``;
