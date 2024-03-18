import styled from "styled-components/native";

export const Container = styled.TouchableOpacity`
  width: 100%;
  border-radius: 12px;
  border-color: ${({theme}) => theme.COLORS.GRAY_500};
  border-width: 1px;
  padding: 24px;

  align-items: center;
  justify-content: center;
`;

export const ObjectTitle = styled.Text`
  font-family: ${({theme}) => theme.FONT_FAMILY.REGULAR};
  font-size: ${({theme}) => theme.FONT_SIZE.MD};
  color: ${({theme}) => theme.COLORS.WHITE};
`;