import { createStackNavigator } from "@react-navigation/stack";
import SignInView from "../pages/SignIn/view";
import { getAuth, onAuthStateChanged } from "firebase/auth";
import AppRoutes from "./app.routes";
import { useEffect, useState } from "react";

const auth = getAuth();

const Stack = createStackNavigator()

const Routes = () => {
  const [isSignedIn, setIsSignedIn] = useState(false)

  useEffect(() => {
    onAuthStateChanged(auth, (user) => {
      if (user) {
        setIsSignedIn(true)
      } else {
        setIsSignedIn(false)
      }
    });
  }, [])
  
  return (
    <Stack.Navigator screenOptions={{
      headerShown: false,
    }}>
      {isSignedIn ? (
        <Stack.Screen name="App" component={AppRoutes} />
      ) : (
        <Stack.Screen name="SignIn" component={SignInView} />
      )}
    </Stack.Navigator>
  )
}

export default Routes