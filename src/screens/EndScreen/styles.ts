import styled, { css } from "styled-components/native";

type Props = {
  type: "PRIMARY" | "SECUNDARY";
};

export const Container = styled.View`
  flex: 1;
  flex-direction: column;
  align-items: center;
  justify-content: center;
`;

export const Title = styled.Text<Props>`
  ${({ theme, type = "PRIMARY" }) => css`
    font-size: ${theme.FONT_SIZE.XXL}px;
    font-family: ${theme.FONT_FAMILY.BOLD};
    color: ${type === "PRIMARY"
      ? theme.COLORS.GREEN_DARK
      : theme.COLORS.RED_DARK};
  `}
`;

export const SubtitleContainer = styled.View`
  flex-direction: row;
  text-align: center;
  align-items: center;
  justify-content: center;
  width: 100%;
  flex-wrap: wrap;
`;

export const Subtitle = styled.Text`
  ${({ theme }) => css`
    font-size: ${theme.FONT_SIZE.LG}px;
    font-family: ${theme.FONT_FAMILY.REGULAR};
    color: ${theme.COLORS.GRAY_700};
  `}
  margin-top: 8px;
`;
export const BoldSubtitle = styled.Text`
  ${({ theme }) => css`
    font-size: ${theme.FONT_SIZE.LG}px;
    font-family: ${theme.FONT_FAMILY.BOLD};
    color: ${theme.COLORS.GRAY_700};
  `}
  margin-top: 8px;
`;

export const MainImage = styled.Image`
  margin-top: 40px;
  width: 224px;
  height: 288px;
`;

export const ButtonContainer = styled.View`
  width: 100%;
  padding: 0 25%;
  margin-top: 32px;
`;
