export type VariantButtonType = "primary" | "secondary" | "danger" | "success";

export interface ButtonProps {
  variant?: VariantButtonType;
}

export interface ButtonStyled {
  variant: VariantButtonType;
}
