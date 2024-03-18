import styled from "styled-components/native";

export const Container = styled.TouchableOpacity`
  background-color: ${({theme}) => theme.COLORS.BLUE_500};
  border-radius: 12px;
  padding: 18px;

  align-items: center;
  justify-content: center;
`;

export const ButtonText = styled.Text`
  font-family: ${({theme}) => theme.FONT_FAMILY.SEMI_BOLD};
  font-size: ${({theme}) => theme.FONT_SIZE.MD};
  color: ${({theme}) => theme.COLORS.WHITE};
`;