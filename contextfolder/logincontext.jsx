import React, { createContext, useState, useEffect } from 'react';
import { FIREBASE_AUTH } from '../firebase/fireBase';
import { createUserWithEmailAndPassword, signInWithEmailAndPassword } from 'firebase/auth';
import AsyncStorage from '@react-native-async-storage/async-storage';

export const AuthContext = createContext();
export default function AuthProvider({children}){
    const [user, setUser] = useState(null);
    const [isLogin, setIsLogin] = useState(false);

    const signup = async (email, password) => {
      try {
          const results = await createUserWithEmailAndPassword(FIREBASE_AUTH, email, password);
          console.log("Signup successful:", results);
          await AsyncStorage.setItem("token", JSON.stringify(results.user.stsTokenManager.accessToken));
          setIsLogin(true);
      } catch (error) {
          console.error("Signup error:", error);
      }
  };
  
 
const login = async (email, password) => {
      try {
        const result= await signInWithEmailAndPassword(FIREBASE_AUTH, email, password);
        console.log(result.user.stsTokenManager)
        setIsLogin(true)

      } catch (error) {
        console.error(error);
      }
    };
return(
<AuthContext.Provider
      value={{
        login,
        signup,
      }}>
      {children}
</AuthContext.Provider>


)
}