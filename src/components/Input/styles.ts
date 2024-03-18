import styled from "styled-components/native";

export const Container = styled.View``;

export const Label = styled.Text`
  font-family: ${({theme}) => theme.FONT_FAMILY.REGULAR};
  font-size: ${({theme}) => theme.FONT_SIZE.XS};
  color: ${({theme}) => theme.COLORS.GRAY_400};
  margin-bottom: 4px;
`;

export const InputWrapper = styled.View`
  border-radius: 12px;
  border-color: ${({theme}) => theme.COLORS.GRAY_500};
  border-width: 1px;

  flex-direction: row;
  align-items: center;
  justify-content: space-between;
  gap: 16px;
`;

export const StyledTextInput = styled.TextInput`
  padding: 18px 16px;
  color: ${({theme}) => theme.COLORS.WHITE};
  font-size: ${({theme}) => theme.FONT_SIZE.SM};
  font-family: ${({theme}) => theme.FONT_FAMILY.REGULAR};
  flex: 1;
`;

export const ShowPasswordButton = styled.TouchableOpacity`
  padding-right: 16px;
`;