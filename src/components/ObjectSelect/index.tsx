import { Container, ObjectTitle } from "./styles";
import { ObjectSelectProps } from "./interface";
import { useNavigation } from "@react-navigation/native";

const ObjectSelect = ({ objectNumber }: ObjectSelectProps) => {
  const navigation = useNavigation()

  return (
    <Container onPress={() => {
      navigation.navigate('SettingsStack', {
        screen: 'EditObject',
        params: {
          object: objectNumber
        }
      })
    }}>
      <ObjectTitle>Objeto {objectNumber}</ObjectTitle>
    </Container>
  )
}

export default ObjectSelect;