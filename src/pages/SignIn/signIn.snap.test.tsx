import { ThemeProvider } from "styled-components/native";
import { SignInViewModelProps } from "./interface"
import SignInView from "./view"
import renderer from 'react-test-renderer';
import themes from "../../themes";

jest.mock('./view.model', () => {
  const fnViewModel = jest.fn()

  fnViewModel.mockImplementation(() => {
    return {
      email: 'test@test.com',
      isLoading: false,
      onSubmit: jest.fn(),
      password: '123123',
      setEmail: jest.fn(),
      setPassword: jest.fn()
    } as SignInViewModelProps
  })

  return fnViewModel
})

describe('<SignIn /> page snapshots', () => {
  it('should render correctly', () => {
    const tree = renderer.create(
      <ThemeProvider theme={themes}>
        <SignInView />
      </ThemeProvider>
    ).toJSON()
    expect(tree).toMatchSnapshot()
  })
})