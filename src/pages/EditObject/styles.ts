import styled from "styled-components/native";
import { ColorProps, RingColorProps, ShapeSelectProps } from "./interface";

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

export const ShapeSelectButton = styled.TouchableOpacity<ShapeSelectProps>`
  padding: 8px 16px;
  border-radius: 12px;
  border-width: 1px;
  border-color: ${({theme, selected}) => selected ? theme.COLORS.BLUE_500 : theme.COLORS.GRAY_500};
`;

export const ShapeSelectText = styled.Text<ShapeSelectProps>`
  font-family: ${({theme}) => theme.FONT_FAMILY.REGULAR};
  font-size: ${({theme}) => theme.FONT_SIZE.MD};
  color: ${({theme, selected}) => selected ? theme.COLORS.BLUE_500 : theme.COLORS.WHITE};
`;

export const Color = styled.TouchableOpacity<ColorProps>`
  width: 40px;
  height: 40px;
  border-radius: 20px;
  background-color: ${({color}) => color};
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

export const RingColor = styled.View<RingColorProps>`
  width: 48px;
  height: 48px;
  border-radius: 99px;
  border-width: ${({selected}) => selected ? 2 : 0}px;
  border-color: ${({color}) => color};
  margin-right: 24px;

  align-items: center;
  justify-content: center;
`;