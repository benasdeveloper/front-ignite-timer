import { ButtonSyled } from "./styles";
import { ButtonProps } from "./types";

export const Button = ({ variant }: ButtonProps) => {
  return <ButtonSyled variant={variant}>Enviar</ButtonSyled>;
};
