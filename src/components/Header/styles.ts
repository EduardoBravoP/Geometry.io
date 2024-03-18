import styled from "styled-components/native";

export const Container = styled.View`
  margin-bottom: 8px;
`;

export const BackButton = styled.TouchableOpacity`
  flex-direction: row;
  align-items: center;
  padding: 8px;
  padding-left: 0;
`;

export const BackButtonText = styled.Text`
  font-family: ${({theme}) => theme.FONT_FAMILY.REGULAR};
  font-size: ${({theme}) => theme.FONT_SIZE.XS};
  color: ${({theme}) => theme.COLORS.WHITE};
`;