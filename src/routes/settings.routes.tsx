import { createStackNavigator } from "@react-navigation/stack";
import Settings from "../pages/Settings/view";
import EditObject from "../pages/EditObject/view";

const Stack = createStackNavigator()

const SettingsRoutes = () => {
  return (
    <Stack.Navigator screenOptions={{
      headerShown: false
    }}>
      <Stack.Screen name="Settings" component={Settings} />
      <Stack.Screen name="EditObject" component={EditObject} />
    </Stack.Navigator>
  )
}

export default SettingsRoutes;