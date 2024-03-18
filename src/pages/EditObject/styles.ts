import { ColorProps } from "@react-three/fiber";
import styled from "styled-components/native";

export const Container = styled.View`
  flex: 1;
  background-color: ${({theme}) => theme.COLORS.BACKGROUND};
  padding: 0px 20px;
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

export const PropertiesWrapper = styled.View`
  gap: 32px;
  margin-bottom: 40px;
`;

export const Property = styled.View``;

export const PropertyLabel = styled.Text`
  font-family: ${({theme}) => theme.FONT_FAMILY.MEDIUM};
  font-size: ${({theme}) => theme.FONT_SIZE.MD};
  color: ${({theme}) => theme.COLORS.WHITE};

  margin-bottom: 16px;
`;

export const ShapeSelectButton = styled.TouchableOpacity`
  padding: 8px 16px;
  border-radius: 12px;
  border-width: 1px;
  border-color: ${({theme}) => theme.COLORS.GRAY_500};
`;

export const ShapeSelectText = styled.Text`
  font-family: ${({theme}) => theme.FONT_FAMILY.REGULAR};
  font-size: ${({theme}) => theme.FONT_SIZE.MD};
  color: ${({theme}) => theme.COLORS.WHITE};
`;

export const Color = styled.TouchableOpacity<ColorProps>`
  width: 40px;
  height: 40px;
  border-radius: 20px;
  background-color: ${({color}) => color};
  margin-right: 24px;
`;

export const SliderContainer = styled.View`
  width: 100%;

  flex-direction: row;
  gap: 16px;
  align-items: center;
`;

export const SliderText = styled.Text`
  font-family: ${({theme}) => theme.FONT_FAMILY.REGULAR};
  font-size: ${({theme}) => theme.FONT_SIZE.MD};
  color: ${({theme}) => theme.COLORS.WHITE};
`;

export const SliderValue = styled.Text`
  font-family: ${({theme}) => theme.FONT_FAMILY.REGULAR};
  font-size: ${({theme}) => theme.FONT_SIZE.MD};
  color: ${({theme}) => theme.COLORS.BLUE_500};

  text-align: center;
  width: 100%;
  margin-bottom: 4px;
`;