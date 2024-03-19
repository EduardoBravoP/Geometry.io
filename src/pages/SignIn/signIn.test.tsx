import {renderHook, act, waitFor} from '@testing-library/react-native'
import useSignInViewModel from "./view.model";
import { signIn } from "../../repositories/auth.repository";

jest.mock('../../repositories/auth.repository', () => {  
  const fnSignIn = jest.fn()
  const fnLogout = jest.fn()

  return {
    signIn: fnSignIn,
    logout: fnLogout,
  }
})

describe('<SignIn /> page', () => {
  it('should be able to signIn', async () => {
    const user = {
      email: 'test@test.com',
      password: '123456'
    }
  
    const {result} = renderHook(() => useSignInViewModel())
  
    act(() => {
      result.current.setEmail(user.email)
    });
  
    await waitFor(() => result.current.email === user.email)
  
    act(() => {
      result.current.setPassword(user.password)
    });
  
    await waitFor(() => result.current.password === user.password)
  
    act(() => {
      result.current.onSubmit();
    })
  
    await waitFor(() => result.current.isLoading === false)
  
    expect(result.current.isLoading).toBe(false)
    expect(result.current.email).toBe(user.email)
    expect(result.current.password).toBe(user.password)
    expect(signIn).toHaveBeenCalled()
  })
})