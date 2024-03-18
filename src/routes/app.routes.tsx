import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import RenderView from '../pages/Render/view';
import themes from '../themes';
import Icon from '@expo/vector-icons/Feather'
import MaterialIcon from '@expo/vector-icons/MaterialCommunityIcons'
import {useSafeAreaInsets} from 'react-native-safe-area-context'
import SettingsRoutes from './settings.routes';

const Tab = createBottomTabNavigator();

const AppRoutes = () => {
  const {bottom} = useSafeAreaInsets()

  return (
    <Tab.Navigator screenOptions={{
      headerShown: false,
      tabBarStyle: {
        backgroundColor: themes.COLORS.BACKGROUND,
        borderTopWidth: 1,
        borderTopColor: themes.COLORS.GRAY_500,
        height: 68 + bottom
      },
      tabBarActiveTintColor: themes.COLORS.WHITE,
      tabBarInactiveTintColor: themes.COLORS.GRAY_400,
      tabBarLabelStyle: {
        fontFamily: themes.FONT_FAMILY.MEDIUM,
        fontSize: 12
      },
      tabBarItemStyle: {
        margin: 12,
      }
    }}>
      <Tab.Screen name="Render" component={RenderView} options={{
        tabBarLabel: 'Objetos',
        tabBarIcon: ({color}) => <MaterialIcon name="shape-outline" size={24} color={color} />
      }} />
      <Tab.Screen name="SettingsStack" component={SettingsRoutes} options={{
        tabBarLabel: 'Ajustes',
        tabBarIcon: ({color}) => <Icon name="settings" size={22} color={color} />
      }} />
    </Tab.Navigator>
  );
}

export default AppRoutes