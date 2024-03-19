import { useState } from "react";
import themes from "../../themes";
import { InputProps } from "./interface";
import { Container, InputWrapper, Label, ShowPasswordButton, StyledTextInput } from "./styles";
import Icon from '@expo/vector-icons/Feather'
import useInputViewModel from "./view.model";

const Input = ({
  label,
  placeholder,
  value,
  onChangeText,
  secretInput,
  ...rest
}: InputProps) => {
  const { isPasswordVisible, setIsPasswordVisible } = useInputViewModel()

  return (
    <Container>
      <Label>{label}</Label>

      <InputWrapper>
        <StyledTextInput
          placeholder={placeholder}
          placeholderTextColor={themes.COLORS.GRAY_100}
          value={value}
          onChangeText={onChangeText}
          secureTextEntry={!!secretInput && !isPasswordVisible}
          {...rest}
        />

        {secretInput && (
          <ShowPasswordButton onPress={() => setIsPasswordVisible(!isPasswordVisible)}>
            {isPasswordVisible
              ? <Icon name="eye" color={themes.COLORS.GRAY_500} size={24} />
              : <Icon name="eye-off" color={themes.COLORS.GRAY_500} size={24} />
            }
          </ShowPasswordButton>
        )}
      </InputWrapper>
    </Container>
  )
}

export default Input;