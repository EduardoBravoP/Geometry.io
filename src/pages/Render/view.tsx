import { View } from "react-native"
import themes from "../../themes";
import { Canvas } from "@react-three/fiber/native";
import ObjectComponent from "../../components/ObjectComponent";
import { StatusBar } from "expo-status-bar";
import useRenderViewModel from "./view.model";

const RenderView = () => {
  const {objectSettings} = useRenderViewModel()

  return (
    <>
      <StatusBar style="light" backgroundColor={themes.COLORS.BACKGROUND} translucent />
      <View style={{flex: 1, backgroundColor: themes.COLORS.BACKGROUND}}>
        <Canvas>
          <ambientLight />
          <pointLight position={[0, 0, 0]} />
          <pointLight position={[0, 1, 0]} />
          <pointLight position={[1, 1, 1]} />

          <ObjectComponent
            shape={objectSettings.object1.shape}
            color={objectSettings.object1.color}
            rotation={objectSettings.object1.rotation}
            position={[0, 2.2, 0]}
          />
          <ObjectComponent
            shape={objectSettings.object2.shape}
            color={objectSettings.object2.color}
            rotation={objectSettings.object2.rotation}
            position={[0, 0, 0]}
          />
          <ObjectComponent
            shape={objectSettings.object3.shape}
            color={objectSettings.object3.color}
            rotation={objectSettings.object3.rotation}
            position={[0, -2.2, 0]}
          />
        </Canvas>
      </View>
    </>
  )
}

export default RenderView;