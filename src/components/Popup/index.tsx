import React from "react";
import { Text } from "react-native";
import Modal from "react-native-modal";
import Button from "../Button";

import { InnerContainer, ButtonContainer, Title, ModalStyled } from "./styles";

type PopupProps = {
  isVisible: boolean;
  removeMeal: () => void;
  closeModal: () => void;
};

const Popup: React.FC<PopupProps> = ({ isVisible, removeMeal, closeModal }) => {
  return (
    <ModalStyled
      isVisible={isVisible}
      animationOut="fadeOut"
      onBackdropPress={closeModal}
      hideModalContentWhileAnimating
      animationIn={"fadeIn"}
      animationOutTiming={300}
      animationInTiming={300}
      useNativeDriver
    >
      <InnerContainer>
        <Title>Deseja realmente excluir o registro da refeição?</Title>
        <ButtonContainer>
          <Button
            title="Cancelar"
            onPress={closeModal}
            width="48%"
            type="SECONDARY"
          />
          <Button title="Sim, excluir" onPress={removeMeal} width="48%" />
        </ButtonContainer>
      </InnerContainer>
    </ModalStyled>
  );
};

export default Popup;
