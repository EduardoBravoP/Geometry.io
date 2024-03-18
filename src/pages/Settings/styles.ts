import styled from "styled-components/native";

export const Container = styled.View`
  flex: 1;
  background-color: ${({theme}) => theme.COLORS.BACKGROUND};
  padding: 0px 20px;
  padding-top: 24px;
`;

export const Title = styled.Text`
  font-family: ${({theme}) => theme.FONT_FAMILY.SEMI_BOLD};
  font-size: ${({theme}) => theme.FONT_SIZE.XL};
  color: ${({theme}) => theme.COLORS.WHITE};
`

export const Description = styled.Text`
  font-family: ${({theme}) => theme.FONT_FAMILY.REGULAR};
  font-size: ${({theme}) => theme.FONT_SIZE.SM};
  color: ${({theme}) => theme.COLORS.GRAY_400};

  margin-top: 8px;
  margin-bottom: 32px;
`

export const ObjectSelectWrapper = styled.View`
  flex: 1;
  align-items: center;
  justify-content: center;
  gap: 16px;
`;

export const SignOutButton = styled.TouchableOpacity`
  flex-direction: row;
  gap: 8px;
  align-items: center;
  padding: 4px;
`;

export const SignOutButtonText = styled.Text`
  font-family: ${({theme}) => theme.FONT_FAMILY.SEMI_BOLD};
  font-size: ${({theme}) => theme.FONT_SIZE.SM};
  color: ${({theme}) => theme.COLORS.RED_500};
`;