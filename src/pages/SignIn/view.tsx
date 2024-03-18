import { SafeAreaView } from "react-native-safe-area-context"
import { Container, Description, InputsWrapper, LoadingContainer, LogoText, LogoWrapper, SignInButton, SignInButtonText, Title } from "./styles"
import Input from "../../components/Input"
import Icon from '@expo/vector-icons/MaterialIcons'
import themes from "../../themes"
import useSignInViewModel from "./view.model"
import { ActivityIndicator } from "react-native"
import { useNavigation } from "@react-navigation/native"

const SignInView = () => {
  const {
    email,
    password,
    setEmail,
    setPassword,
    isLoading,
    onSubmit
  } = useSignInViewModel()

  return (
    <SafeAreaView style={{flex: 1, backgroundColor: themes.COLORS.BACKGROUND}}>
      <Container keyboardShouldPersistTaps="handled">
        <LogoWrapper>
          <LogoText>Geometry.</LogoText>
          <LogoText red>io</LogoText>
        </LogoWrapper>

        <Title>Entrar</Title>
        <Description>Bem vindo de volta!</Description>

        <InputsWrapper>
          <Input
            label="E-mail"
            placeholder="Insira seu e-mail" 
            value={email}
            onChangeText={setEmail}
            keyboardType="email-address"
            autoCapitalize="none"
          />
          <Input
            label="Senha"
            placeholder="Insira sua senha"
            value={password}
            onChangeText={setPassword}
            secretInput
          />
        </InputsWrapper>

        <SignInButton onPress={onSubmit} disabled={isLoading}>
          {isLoading ? (
            <LoadingContainer>
              <ActivityIndicator size={24} color={themes.COLORS.WHITE} />
            </LoadingContainer>
          ) : (
            <>
              <SignInButtonText>Entrar</SignInButtonText>
              <Icon name="arrow-forward" color={themes.COLORS.WHITE} size={24} />
            </>
          )}
        </SignInButton>
      </Container>
    </SafeAreaView>
  )
}

export default SignInView