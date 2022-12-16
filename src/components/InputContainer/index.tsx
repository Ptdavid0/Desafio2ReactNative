import React from "react";
import Input from "../Input";

import { Container, Label } from "./styles";

type InputContainerProps = {
  label: string;
  onChangeText?: (text: string) => void;
  value?: string;
  size?: "small" | "medium" | "large";
  isMultiline?: boolean;
};

const InputContainer: React.FC<InputContainerProps> = ({
  label,
  onChangeText,
  value,
  size = "medium",
  isMultiline = false,
}) => {
  return (
    <Container size={size}>
      <Label>{label}</Label>
      <Input
        onChangeText={onChangeText}
        value={value}
        size={size}
        multiline={isMultiline}
      />
    </Container>
  );
};

export default InputContainer;
