import { SafeAreaView } from "react-native-safe-area-context";
import styled, { css } from "styled-components/native";

export const Container = styled(SafeAreaView)`
  flex: 1;
  padding: 0 24px;
  background-color: ${({ theme }) => theme.COLORS.WHITE};
`;

export const AddMealContainer = styled.View`
  margin: 40px 0 16px;
  flex-direction: column;
`;

export const Text = styled.Text`
  ${({ theme }) => css`
    font-family: ${theme.FONT_FAMILY.REGULAR};
    font-size: ${theme.FONT_SIZE.LG}px;
    color: ${theme.COLORS.GRAY_700};
  `}

  margin-bottom: 8px;
`;

export const HeaderTextSection = styled.Text`
  ${({ theme }) => css`
    font-family: ${theme.FONT_FAMILY.BOLD};
    font-size: ${theme.FONT_SIZE.XL}px;
    color: ${theme.COLORS.GRAY_700};
    margin: 24px 0 8px;
  `}
`;
