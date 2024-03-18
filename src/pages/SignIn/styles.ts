import styled from "styled-components/native";

interface LogoTextProps {
  red?: boolean;
}

export const Container = styled.ScrollView`
  padding: 0px 20px;
  background-color: ${({theme}) => theme.COLORS.BACKGROUND};
  flex: 1;
`

export const LogoWrapper = styled.View`
  flex-direction: row;
  justify-content: center;
  margin-top: 24px;
  margin-bottom: 32px;
`;

export const LogoText = styled.Text<LogoTextProps>`
  font-family: ${({theme}) => theme.FONT_FAMILY.SEMI_BOLD};
  font-size: ${({theme}) => theme.FONT_SIZE.XL};
  color: ${({theme, red}) => red ? theme.COLORS.RED_500 : theme.COLORS.WHITE};
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

export const InputsWrapper = styled.View`
  gap: 16px;
`;

export const SignInButton = styled.TouchableOpacity`
  background-color: ${({theme}) => theme.COLORS.BLUE_500};
  border-radius: 12px;
  padding: 18px 16px;
  margin-top: 32px;

  flex-direction: row;
  justify-content: space-between;
  align-items: center;
`;

export const SignInButtonText = styled.Text`
  font-family: ${({theme}) => theme.FONT_FAMILY.SEMI_BOLD};
  font-size: ${({theme}) => theme.FONT_SIZE.MD};
  color: ${({theme}) => theme.COLORS.WHITE};
`;

export const LoadingContainer = styled.View`
  flex: 1;
  align-items: center;
  justify-content: center;
`;