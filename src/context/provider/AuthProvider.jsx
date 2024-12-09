import { createUserWithEmailAndPassword, GoogleAuthProvider, onAuthStateChanged, sendPasswordResetEmail, signInWithEmailAndPassword, signInWithPopup, signOut } from "firebase/auth"
import { AuthContext } from "../index"
import { auth } from "../../firebase/firebase.init"
import { useEffect, useState } from "react";



function AuthProvider({ children }) {

    const [showPassword, setShowPassword] = useState(false);
    const [err, setErr] = useState('')
    const [user, setUser] = useState(null)
    const [loader,setLoader] = useState(true)

    console.log(user);
    
    const createUser = (email, password) => {
        setLoader(true)
        return createUserWithEmailAndPassword(auth, email, password)
    }


    const signIn = (email, password) => { 
        setLoader(true)
      return  signInWithEmailAndPassword(auth,email,password)
    }

    const resetPassword = (email) => { 
        setLoader(true)
      return  sendPasswordResetEmail(auth, email)
    }

    const signOutUser = () => {
        setLoader(true)
      return  signOut(auth)
    }
   
    const signInWithGoogle = (GoogleProvider) => { 
        return signInWithPopup(auth , GoogleProvider)
    }

    useEffect(() => {
      const unSubscribe =  onAuthStateChanged(auth, (currentUser) => {
            if (currentUser) {
                if (!currentUser.emailVerified === false) {
                    
                    setUser(currentUser)
                    console.log(currentUser.emailVerified);
                    setLoader(false)
                }
                
            } else {
                setUser(null) 
                console.log('user is logged out');
                setLoader(false)
                
            }
        })

        return () => {
            unSubscribe()
        }
    },[])
    
    if (user?.emailVerified === false) {
        setUser(null)
    }

    const value = {
        createUser,
        signIn,
        signOutUser,
        signInWithGoogle,
        resetPassword,
        user,
        setUser,
        showPassword,
        setShowPassword,
        err,
        setErr,
        loader 
   }




  return (
      <AuthContext.Provider value={value} >
          {children}
    </AuthContext.Provider>
  )
}

export default AuthProvider