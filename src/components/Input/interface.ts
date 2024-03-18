import { TextInputProps } from "react-native";

export interface InputProps extends TextInputProps {
  label: string;
  placeholder: string;
  value: string;
  onChangeText: (value: string) => void
  secretInput?: boolean;
}