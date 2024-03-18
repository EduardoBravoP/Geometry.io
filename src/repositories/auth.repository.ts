import { SignInDTO } from "./dtos/SignInDTO";
import {getAuth, signInWithEmailAndPassword, signOut} from 'firebase/auth'

export const signIn = async ({ email, password }: SignInDTO) => {
  const auth = getAuth();
  
  try {
    const response = await signInWithEmailAndPassword(auth, email, password)
    return response.user
  } catch (err) {
    console.log('SignIn error:', err.message)
  }
}

export const logout = async () => {
  const auth = getAuth()

  try {
    await signOut(auth)
  } catch (err) {
    console.log('Logout error:', err.message)
  }
}