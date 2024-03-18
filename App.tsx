import 'react-native-gesture-handler';
import React from 'react'
import { StatusBar } from 'expo-status-bar';
import { SafeAreaProvider } from 'react-native-safe-area-context';
import { View } from 'react-native';
import {
  useFonts,
  Montserrat_400Regular,
  Montserrat_500Medium,
  Montserrat_600SemiBold
} from '@expo-google-fonts/montserrat'
import { ThemeProvider } from 'styled-components/native';
import theme from './src/themes';
import './src/repositories/client';
import { NavigationContainer } from '@react-navigation/native';
import Routes from './src/routes';
import { ObjectContextWrapper } from './src/contexts/useObject';

export default function App() {
  const [fontsLoaded] = useFonts({
    Montserrat_400Regular,
    Montserrat_500Medium,
    Montserrat_600SemiBold
  })

  return (
    <NavigationContainer>
      <SafeAreaProvider>
        <ThemeProvider theme={theme}>
          <ObjectContextWrapper>
          <StatusBar style="light" backgroundColor={theme.COLORS.BACKGROUND} translucent />
          
            <View style={{backgroundColor: theme.COLORS.BACKGROUND, flex: 1}}>
              {fontsLoaded && <Routes />}
            </View>
          </ObjectContextWrapper>
        </ThemeProvider>
      </SafeAreaProvider>
    </NavigationContainer>
  );
}