import styled, { css } from "styled-components/native";

import Modal from "react-native-modal";

export const ModalStyled = styled(Modal)`
  flex: 1;
  justify-content: center;
  align-items: center;
`;

export const InnerContainer = styled.View`
  background-color: ${({ theme }) => theme.COLORS.WHITE};
  border-radius: 8px;
  padding: 12px;
  width: 327px;
  height: 192px;
  flex-direction: column;
  justify-content: center;
  padding: 5px 18px 0;
`;

export const Title = styled.Text`
  ${({ theme }) => css`
    font-size: ${theme.FONT_SIZE.XL}px;
    font-family: ${theme.FONT_FAMILY.BOLD};
    color: ${theme.COLORS.GRAY_700};
  `}
  text-align: center;
`;

export const ButtonContainer = styled.View`
  margin-top: 18px;
  flex-direction: row;
  justify-content: space-between;
`;
