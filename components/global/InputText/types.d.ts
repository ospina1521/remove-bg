import { InputHTMLAttributes } from "react";

export interface Props {
  name: string;
  readOnly?: boolean;
  value?: string;
  regExp?: RegExp;
  isValid?: boolean;
  maxLength?: number;
  minLength?: number;
  className?: string;
  isDisable?: boolean;
  placeholder?: string;
  onSubmit?: () => void;
  autoComplete?: "off" | "on";
  type?: "select" | InputHTMLAttributes<HTMLInputElement>["type"];
  onChange?: (value: string, isValid: boolean, keyDown: string) => void;
  selectOptions?: Array<string>;
}
