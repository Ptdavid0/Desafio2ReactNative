import { TouchableOpacity } from "react-native";
import styled, { css } from "styled-components/native";

type Props = {
  isInDiet: boolean;
};

export const Container = styled(TouchableOpacity)`
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  padding: 16px;
  border-radius: 8px;
  background-color: ${({ theme }) => theme.COLORS.WHITE};
  margin-bottom: 8px;
  border: 1px solid ${({ theme }) => theme.COLORS.GRAY_300};
`;

export const Time = styled.Text`
  ${({ theme }) => css`
    font-family: ${theme.FONT_FAMILY.BOLD};
    font-size: ${theme.FONT_SIZE.SM}px;
    color: ${theme.COLORS.GRAY_700};
  `}
`;

export const Title = styled.Text`
  ${({ theme }) => css`
    font-family: ${theme.FONT_FAMILY.BOLD};
    font-size: ${theme.FONT_SIZE.MD}px;
    color: ${theme.COLORS.GRAY_700};
  `}
`;
export const Separator = styled.Text`
  ${({ theme }) => css`
    font-size: ${theme.FONT_SIZE.LG}px;
    color: ${theme.COLORS.GRAY_400};
  `}
  margin: 0 8px 2px;
`;

export const Icon = styled.View<Props>`
  background-color: ${({ theme, isInDiet }) =>
    isInDiet ? theme.COLORS.GREEN_MID : theme.COLORS.RED_MID};
  border-radius: 50px;
  width: 14px;
  height: 14px;
`;

export const InfoContainer = styled.View`
  flex-direction: row;
  align-items: center;
`;
