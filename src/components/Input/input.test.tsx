import { render, userEvent, waitFor } from "@testing-library/react-native"
import Input from "."
import themes from "../../themes"
import { ThemeProvider } from "styled-components/native"
import { act } from "react-test-renderer"

describe('<Input /> component', () => {
  it('should render correctly', () => {
    const {getByText} = render(
      <ThemeProvider theme={themes}>
        <Input
          label="Input Test"
          onChangeText={jest.fn()}
          placeholder="Enter input"
          value="123"
        />
      </ThemeProvider>
    )

    expect(getByText('Input Test')).toBeTruthy
  })

  it('should render the eye icon correctly', async () => {
    const {getByText, queryByTestId, findByTestId} = render(
      <ThemeProvider theme={themes}>
        <Input
          label="Input Test"
          onChangeText={jest.fn()}
          placeholder="Enter input"
          value="123"
          secretInput
        />
      </ThemeProvider>
    )

    const eyeOffIcon = await findByTestId('eyeOffIcon')

    expect(getByText('Input Test')).toBeTruthy()
    expect(queryByTestId('eyeIcon')).toBeFalsy()
    expect(eyeOffIcon).toBeTruthy()
  })

  it('should change icon on button press', async () => {
    const user = userEvent.setup()
    jest.useFakeTimers()

    const {getByTestId} = render(
      <ThemeProvider theme={themes}>
        <Input
          label="Input Test"
          onChangeText={jest.fn()}
          placeholder="Enter input"
          value="123"
          secretInput
        />
      </ThemeProvider>
    )
  
    const showPasswordButton = getByTestId('showPasswordButton')
    await act(() => {
      user.press(showPasswordButton)
    })

    await waitFor(() => getByTestId('eyeIcon'))
  
    expect(getByTestId('eyeIcon')).toBeTruthy()
  })
})