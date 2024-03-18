import { ButtonComponentProps } from "./interface";
import { ButtonText, Container } from "./styles";

const Button = ({ children, ...rest }: ButtonComponentProps) => {
  return (
    <Container {...rest}>
      <ButtonText>{children}</ButtonText>
    </Container>
  )
}

export default Button;