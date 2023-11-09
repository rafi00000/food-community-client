import {
  createUserWithEmailAndPassword,
  onAuthStateChanged,
  signInWithEmailAndPassword,
  signOut,
  GoogleAuthProvider, 
  signInWithPopup,
  signInWithRedirect,
  GithubAuthProvider
} from "firebase/auth";
import { createContext, useEffect, useState } from "react";
import { auth } from "../../firebase.config";
import toast from "react-hot-toast";

export const AuthContext = createContext(null);

const AuthProvider = ({ children }) => {
  const [user, setUser] = useState(null);
  const [loading, setLoading] = useState(true);
  const googleProvider = new GoogleAuthProvider();
  const githubProvider = new GithubAuthProvider();


  const createwithMail = (email, password) => {
    return createUserWithEmailAndPassword(auth, email, password);
  };

  const signInWithEmail  = (email, password) =>{
    return signInWithEmailAndPassword(auth, email, password);
  }


  const logOut = () =>{
    return signOut(auth);
  }

  const googleSignIn = () =>{
    return signInWithPopup(auth, googleProvider);
  }

  const githubLogin = () =>{
    return signInWithPopup(auth ,githubProvider)
  }


  useEffect(() => {
    const unSubscribe = onAuthStateChanged(auth, (currentUser) => {
      setUser(currentUser);
      if(user){
        toast.success("Successful Login");
      }
      setLoading(false);
    });

    return () => {
      unSubscribe();
    };
  }, [user]);

  const authInfo = { user, loading, createwithMail, signInWithEmail, logOut, googleSignIn, githubLogin };
  return (
    <AuthContext.Provider value={authInfo}>{children}</AuthContext.Provider>
  );
};

export default AuthProvider;
