import { useState } from "react"

const useInputViewModel = () => {
  const [isPasswordVisible, setIsPasswordVisible] = useState(false)

  return {
    isPasswordVisible,
    setIsPasswordVisible
  }
}

export default useInputViewModel