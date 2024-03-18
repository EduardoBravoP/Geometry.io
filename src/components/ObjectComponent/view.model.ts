import { useRef } from "react";

const useObjectViewModel = () => {
  const meshRef = useRef<any>();

  const changeMeshRotation = (rotation: number) => {
    if (meshRef.current) {
      meshRef.current.rotation.z = rotation
    }
  }

  return {
    meshRef,
    changeMeshRotation
  }
}

export default useObjectViewModel;