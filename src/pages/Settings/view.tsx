import { StatusBar } from "expo-status-bar"
import themes from "../../themes"
import { SafeAreaView } from "react-native-safe-area-context"
import { Container, Description, ObjectSelectWrapper, SignOutButton, SignOutButtonText, Title } from "./styles"
import ObjectSelect from "../../components/ObjectSelect"
import Icon from '@expo/vector-icons/Feather'
import { logout } from "../../repositories/auth.repository"

const Settings = () => {
  return (
    <>
      <StatusBar style="light" backgroundColor={themes.COLORS.BACKGROUND} translucent />
      <SafeAreaView style={{flex: 1, backgroundColor: themes.COLORS.BACKGROUND}}>
        <Container>
          <Title>Ajustes</Title>
          <Description>Selecione qual objeto deseja editar</Description>

          <SignOutButton onPress={() => logout()}>
            <Icon name="log-out" size={24} color={themes.COLORS.RED_500} />
            <SignOutButtonText>Sair da conta</SignOutButtonText>
          </SignOutButton>

          <ObjectSelectWrapper>
            <ObjectSelect objectNumber={1} />
            <ObjectSelect objectNumber={2} />
            <ObjectSelect objectNumber={3} />
          </ObjectSelectWrapper>
        </Container>
      </SafeAreaView>
    </>
  )
}

export default Settings;