import {
  createUserWithEmailAndPassword,
  onAuthStateChanged,
  signInWithEmailAndPassword,
  signOut,
  GoogleAuthProvider, 
  signInWithPopup
} from "firebase/auth";
import { createContext, useEffect, useState } from "react";
import { auth } from "../../firebase.config";

export const AuthContext = createContext(null);

const AuthProvider = ({ children }) => {
  const [user, setUser] = useState(null);
  const [loading, setLoading] = useState(true);
  const googleProvider = new GoogleAuthProvider();


  const createwithMail = (email, password) => {
    setLoading(true)
    return createUserWithEmailAndPassword(auth, email, password);
  };

  const signInWithEmail  = (email, password) =>{
    setLoading(true)
    return signInWithEmailAndPassword(auth, email, password);
  }

  const logOut = () =>{
    return signOut(auth);
  }

  const googleSignIn = () =>{
    return signInWithPopup(auth, googleProvider);
  }


  useEffect(() => {
    const unSubscribe = onAuthStateChanged(auth, (currentUser) => {
      setUser(currentUser);
      setLoading(false);
    });

    return () => {
      unSubscribe();
    };
  }, []);

  const authInfo = { user, loading, createwithMail, signInWithEmail, logOut, googleSignIn };
  return (
    <AuthContext.Provider value={authInfo}>{children}</AuthContext.Provider>
  );
};

export default AuthProvider;
