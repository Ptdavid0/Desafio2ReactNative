import React from "react";
import { TouchableOpacityProps } from "react-native";
import { MaterialIcons } from "@expo/vector-icons";

import { Container, Title, ButtonTypeStyleProps, Icon } from "./styles";

type Props = TouchableOpacityProps & {
  title: string;
  type?: ButtonTypeStyleProps;
  icon?: keyof typeof MaterialIcons.glyphMap;
  size?: number;
  width?: number | string;
};

const Button: React.FC<Props> = ({
  title,
  type = "PRIMARY",
  icon,
  size,
  width,
  ...rest
}) => {
  return (
    <Container type={type} {...rest} width={width}>
      {icon && <Icon name={icon} size={size} color="#fff" type={type} />}
      <Title type={type}>{title}</Title>
    </Container>
  );
};

export default Button;
