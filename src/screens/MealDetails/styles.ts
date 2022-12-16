import styled, { css } from "styled-components/native";

export const Container = styled.View`
  flex: 1;
`;

type Props = {
  isInDiet: boolean;
};

export const InfoSection = styled.View`
  flex: 1;
  flex-direction: column;
  align-items: center;
  padding: 42px 24px;
`;

export const TextContainer = styled.View`
  width: 100%;
  flex-direction: column;
  align-items: flex-start;
  margin-bottom: 30px;
`;

export const DietContainer = styled.View`
  background-color: ${({ theme }) => theme.COLORS.GRAY_300};
  padding: 12px 22px;
  flex-direction: row;
  align-items: center;
  border-radius: 50px;
  align-self: flex-start;
`;

export const ButtonContainer = styled.View`
  width: 100%;
  flex-direction: column;
  align-items: center;
  justify-content: flex-end;
  flex: 1;
`;

export const Name = styled.Text`
  ${({ theme }) => css`
    font-size: ${theme.FONT_SIZE.XL}px;
    font-family: ${theme.FONT_FAMILY.BOLD};
  `}
  margin-bottom: 10px;
`;

export const Description = styled.Text`
  ${({ theme }) => css`
    font-size: ${theme.FONT_SIZE.LG}px;
    font-family: ${theme.FONT_FAMILY.REGULAR};
  `}
`;

export const TimeTitle = styled.Text`
  ${({ theme }) => css`
    font-size: ${theme.FONT_SIZE.LG}px;
    font-family: ${theme.FONT_FAMILY.BOLD};
  `}
  margin-bottom: 10px;
`;

export const Date = styled.Text`
  ${({ theme }) => css`
    font-size: ${theme.FONT_SIZE.XL}px;
    font-family: ${theme.FONT_FAMILY.REGULAR};
  `}
`;

export const Icon = styled.View<Props>`
  background-color: ${({ theme, isInDiet }) =>
    isInDiet ? theme.COLORS.GREEN_DARK : theme.COLORS.RED_DARK};
  border-radius: 50px;
  width: 8px;
  height: 8px;
  margin-right: 10px;
`;
