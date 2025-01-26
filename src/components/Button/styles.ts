import styled, { css } from "styled-components";
import { ButtonProps } from "./types";
import { modifierVariantButton } from "./modifiers/modifierVariantButton";

export const ButtonSyled = styled.button<ButtonProps>`
  ${({ theme, variant = "primary" }) => css`
    width: 100px;
    height: 40px;
    ${modifierVariantButton({ theme, variant })}
  `}
`;
