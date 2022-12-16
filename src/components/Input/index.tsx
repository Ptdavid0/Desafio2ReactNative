import React from "react";
import { TextInputProps } from "react-native";
import { useTheme } from "styled-components/native";

import { Container } from "./styles";

type Props = TextInputProps & {
  size?: "small" | "medium" | "large";
};

const Input: React.FC<Props> = ({ size, ...rest }) => {
  const { COLORS } = useTheme();
  return (
    <Container placeholderTextColor={COLORS.GRAY_300} {...rest} size={size} />
  );
};

export default Input;
