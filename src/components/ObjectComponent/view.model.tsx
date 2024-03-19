import { useEffect, useRef } from "react";

const useObjectViewModel = (rotation: number) => {
  const meshRef = useRef<any>();

    const renderShape = {
      cube: <boxGeometry />,
      cone: <coneGeometry />,
      dodecahedron: <dodecahedronGeometry />
    }

  const changeMeshRotation = (rotation: number) => {
    if (meshRef.current) {
      meshRef.current.rotation.z = rotation
    }
  }

  useEffect(() => {
    changeMeshRotation(rotation)
  }, [rotation])

  return {
    meshRef,
    renderShape
  }
}

export default useObjectViewModel;