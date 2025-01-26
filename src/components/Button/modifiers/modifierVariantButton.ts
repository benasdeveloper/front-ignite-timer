import { DefaultTheme, css } from "styled-components";
import { VariantButtonType } from "../types";

interface ModifierVariantButton {
  theme: DefaultTheme;
  variant: VariantButtonType;
}

export const modifierVariantButton = ({ theme, variant }: ModifierVariantButton) => {
  const variantObj = {
    primary: css`
      background: ${theme["green-500"]};
    `,
    secondary: css`
      background: gray;
    `,
    danger: css`
      background: red;
    `,
    success: css`
      background: green;
    `,
  };

  return variantObj[variant];
};
