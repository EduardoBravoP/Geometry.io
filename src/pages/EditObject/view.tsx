import { StatusBar } from "expo-status-bar";
import themes from "../../themes";
import { SafeAreaView } from "react-native-safe-area-context";
import { Color, Container, Description, PropertiesWrapper, Property, PropertyLabel, RingColor, ShapeSelectButton, ShapeSelectText, SliderContainer, SliderText, SliderValue, Title } from "./styles";
import { EditObjectProps } from "./interface";
import Header from "../../components/Header";
import { FlatList } from "react-native";
import useEditObjectViewModel from "./view.model";
import { Slider } from "@miblanchard/react-native-slider";
import Button from "../../components/Button";
import { ShapesType } from "../../common/models/object.model";

const EditObject = ({ route }: EditObjectProps) => {
  const { object } = route.params
  const {
    shapesSelect,
    colorsSelect,
    selectedColor,
    setSelectedColor,
    selectedShape,
    setSelectedShape,
    rotation,
    setRotation,
    onSubmit
  } = useEditObjectViewModel(object)

  return (
    <>
      <StatusBar style="light" backgroundColor={themes.COLORS.BACKGROUND} translucent />
      <SafeAreaView style={{flex: 1, backgroundColor: themes.COLORS.BACKGROUND}}>
        <Container>
          <Header />

          <Title>Ajustes</Title>
          <Description>Edite as propriedades do Objeto {object}</Description>

          <PropertiesWrapper>
            <Property>
              <PropertyLabel>Escolha a forma:</PropertyLabel>

              <FlatList
                data={shapesSelect}
                keyExtractor={(item) => item.value}
                renderItem={({ item }) => (
                  <ShapeSelectButton
                    onPress={() => setSelectedShape(item.value as ShapesType)}
                    selected={selectedShape === item.value}
                  >
                    <ShapeSelectText selected={selectedShape === item.value}>
                      {item.label}
                    </ShapeSelectText>
                  </ShapeSelectButton>
                )}
                horizontal
                contentContainerStyle={{
                  gap: 16
                }}
              />
            </Property>

            <Property>
              <PropertyLabel>Escolha a cor:</PropertyLabel>

              <FlatList
                data={colorsSelect}
                renderItem={({ item }) => (
                  <RingColor selected={selectedColor === item} color={item}>
                    <Color color={item} onPress={() => setSelectedColor(item)} />
                  </RingColor>
                )}
                keyExtractor={(item) => item}
                numColumns={4}
                contentContainerStyle={{
                  gap: 16
                }}
                scrollEnabled={false}
              />
            </Property>

            <Property>
              <PropertyLabel>Escolha a rotação:</PropertyLabel>

              <SliderValue>{rotation}°</SliderValue>
              <SliderContainer>
                <SliderText>0°</SliderText>

                <Slider
                  value={rotation}
                  onValueChange={value => setRotation(Math.floor(value[0]))}
                  maximumValue={360}
                  minimumValue={0}
                  thumbTintColor={themes.COLORS.BLUE_500}
                  minimumTrackTintColor={themes.COLORS.BLUE_500}
                  containerStyle={{
                    flex: 1
                  }}
                />

                <SliderText>360°</SliderText>
              </SliderContainer>
            </Property>
          </PropertiesWrapper>

          <Button onPress={onSubmit}>Salvar alterações</Button>
        </Container>
      </SafeAreaView>
    </>
  )
}

export default EditObject;