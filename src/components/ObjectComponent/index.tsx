import { useEffect } from "react";
import { ObjectModel } from "../../common/models/object.model";
import useObjectViewModel from "./view.model";

const ObjectComponent = ({ shape, color, rotation, position }: ObjectModel) => {
  const { changeMeshRotation, meshRef } = useObjectViewModel()

  useEffect(() => {
    changeMeshRotation(rotation)
  }, [rotation])

  const renderShape = {
    cube: <boxGeometry />,
    cone: <coneGeometry />,
    dodecahedron: <dodecahedronGeometry />
  }

  return (
    <mesh scale={0.8} ref={meshRef} position={position}>
      {renderShape[shape]}
      <meshStandardMaterial color={color} />
    </mesh>
  )
}

export default ObjectComponent;