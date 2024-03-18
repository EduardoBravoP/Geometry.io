import { TouchableOpacity } from "react-native-gesture-handler";
import themes from "../../themes";
import { BackButton, BackButtonText, Container } from "./styles";
import Icon from '@expo/vector-icons/Feather'
import { useNavigation } from "@react-navigation/native";

const Header = () => {
  const navigation = useNavigation()

  return (
    <Container>
      <BackButton onPress={() => navigation.goBack()}>
        <Icon name="chevron-left" size={20} color={themes.COLORS.WHITE} />
        <BackButtonText>Voltar</BackButtonText>
      </BackButton>
    </Container>
  )
}

export default Header;