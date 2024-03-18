import { Text, View } from "react-native"
import themes from "../../themes";

const RenderView = () => {
  return (
    <View style={{flex: 1, backgroundColor: themes.COLORS.BACKGROUND}}>
      <Text>Test</Text>
    </View>
  )
}

export default RenderView;