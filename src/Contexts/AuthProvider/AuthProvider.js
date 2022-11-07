import React, { createContext, useEffect, useState } from "react";
import {
  FacebookAuthProvider,
  getAuth,
  GoogleAuthProvider,
  onAuthStateChanged,
  signInWithPopup,
} from "firebase/auth";
import { app } from "../../Firebase/firebase.config";

export const AuthContext = createContext();

const AuthProvider = ({ children }) => {
  const auth = getAuth(app);
  const [user, setUser] = useState(null);
  const [loading, setLoading] = useState(true);
  const googleProvider = new GoogleAuthProvider();
  const facebookProvider = new FacebookAuthProvider();

  const googleLogin = () => {
    return signInWithPopup(auth, googleProvider);
  };
  const facebookLogin = () => {
    return signInWithPopup(auth, facebookProvider);
  };
  const registerByEmailAndPassword = (email, password) => {};
  const emailAndPasswordLogin = (email, password) => {};
  const logOutUser = () => {};

  useEffect(() => {
    const unSubscribe = onAuthStateChanged(auth, (currentUser) => {
      console.log("current user is", currentUser);
      setUser(currentUser);
      setLoading(false);
    });
    return () => {
      unSubscribe();
    };
  }, []);

  const authInfo = {
    user,
    loading,
    googleLogin,
    facebookLogin,
    registerByEmailAndPassword,
    emailAndPasswordLogin,
    logOutUser,
  };
  return (
    <div>
      <AuthContext.Provider value={authInfo}>{children}</AuthContext.Provider>
    </div>
  );
};

export default AuthProvider;
