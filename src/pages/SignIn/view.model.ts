import { useState } from "react";
import { SignInViewModelProps } from "./interface";
import { signIn } from "../../repositories/auth.repository";

const useSignInViewModel = (): SignInViewModelProps => {
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')
  const [isLoading, setIsLoading] = useState(false)

  const onSubmit = async () => {
    try {
      setIsLoading(true)

      const response = await signIn({ email, password })
      console.log(response)
    } catch (err) {
      console.log(err)
    } finally {
      setIsLoading(false)
    }
  }

  return {
    email,
    password,
    setEmail,
    setPassword,
    isLoading, 
    onSubmit
  }
}

export default useSignInViewModel;