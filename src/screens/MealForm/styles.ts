import styled, { css, DefaultTheme } from "styled-components/native";

type Props = {
  isInDiet: boolean | null;
};

type ButtonProps = {
  isInDiet: boolean | null;
  isInDietButton: boolean;
};

const getDietButtonColor = (
  isInDiet: boolean | null,
  isInDietButton: boolean,
  theme: DefaultTheme,
  isBorder: boolean = false
) => {
  if (
    isInDiet === null ||
    (isInDietButton && !isInDiet) ||
    (!isInDietButton && isInDiet)
  )
    return theme.COLORS.GRAY_200;

  if (isInDietButton && isInDiet) {
    return isBorder ? theme.COLORS.GREEN_DARK : theme.COLORS.GREEN_LIGHT;
  }
  if (!isInDietButton && !isInDiet) {
    return isBorder ? theme.COLORS.RED_DARK : theme.COLORS.RED_LIGHT;
  }
};

export const Container = styled.View`
  flex: 1;
`;

export const InfoSection = styled.View`
  width: 100%;
  flex: 1;
  flex-direction: column;
  align-items: center;
  justify-content: flex-start;
  padding: 42px 24px;
  background-color: ${({ theme }) => theme.COLORS.WHITE};
`;

export const DoubleInputContainer = styled.View`
  flex-direction: row;
  width: 100%;
  justify-content: space-between;
`;

export const Label = styled.Text`
  ${({ theme }) => css`
    font-size: ${theme.FONT_SIZE.LG}px;
    font-family: ${theme.FONT_FAMILY.BOLD};
    color: ${theme.COLORS.GRAY_700};
  `}
  margin-bottom: 6px;
`;

export const InsideDietContainer = styled.View`
  flex-direction: column;
  margin-top: 16px;
  width: 100%;
`;
export const InnerInsideContainer = styled.View`
  flex-direction: row;
  justify-content: space-between;
  width: 100%;
`;

export const DietButton = styled.TouchableOpacity<ButtonProps>`
  flex-direction: row;

  min-height: 56px;
  max-height: 56px;
  width: 48%;
  background-color: ${({ theme, isInDiet, isInDietButton }) =>
    getDietButtonColor(isInDiet, isInDietButton, theme)};
  border-radius: 8px;
  justify-content: center;
  align-items: center;
  border: 1px solid
    ${({ theme, isInDiet, isInDietButton }) =>
      getDietButtonColor(isInDiet, isInDietButton, theme, true)};
`;

export const ButtonContainer = styled.View`
  flex: 1;
  width: 100%;
  justify-content: flex-end;
`;

export const Icon = styled.View<Props>`
  background-color: ${({ theme, isInDiet = false }) =>
    isInDiet ? theme.COLORS.GREEN_DARK : theme.COLORS.RED_DARK};
  border-radius: 50px;
  width: 8px;
  height: 8px;
  margin-right: 10px;
`;

export const Description = styled.Text`
  ${({ theme }) => css`
    font-size: ${theme.FONT_SIZE.LG}px;
    font-family: ${theme.FONT_FAMILY.BOLD};
  `}
`;
