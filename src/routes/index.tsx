import SignInView from "../pages/SignIn/view";
import { getAuth, onAuthStateChanged } from "firebase/auth";
import AppRoutes from "./app.routes";
import { useEffect, useState } from "react";

const auth = getAuth();

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
  
  return isSignedIn ? <AppRoutes /> : <SignInView />
}

export default Routes