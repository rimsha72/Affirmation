import React, { useContext, useState, useEffect } from "react"

import { signInWithEmailAndPassword, signOut } from "firebase/auth";
import { doc, getDoc } from "firebase/firestore";
import { db, auth } from "../firebase/firebaseConfig";

const AuthContext = React.createContext();

export function useAuth() {
  return useContext(AuthContext)
}

export function AuthProvider({ children }) {
  const [currentUser, setCurrentUser] = useState()
  const [loading, setLoading] = useState(true);
  const [isLoading, setIsLoading] = useState(false);
  const [users, setUsers] = useState(null);
  const [userCount, setUserCount] = useState(0);
  async function login(email, password) {
    return await signInWithEmailAndPassword(auth, email, password)
  }

  function logout() {
    signOut(auth).then(() => {
      console.log('User signed out successfully');
    }).catch((error) => {
      console.error('Error signing out: ', error);
    });
  }


  useEffect(() => {
    const unsubscribe = auth.onAuthStateChanged(async user => {
      if (user) {
        console.log(user)
        const userDocRef = doc(db, 'admin', user.uid);
        await getDoc(userDocRef)
          .then((userDocSnapshot) => {
            // console.log(userDocSnapshot.exists())
            if (userDocSnapshot.exists()) {
              if (userDocSnapshot.data().isAdmin) {
                // User document exists in Firestore
                setUsers(userDocSnapshot.data());
              }
            } else {
              setCurrentUser(null)
              console.error('User document does not exist in Firestore.');
            }
          })
          .catch(error => console.log(error))
      }
      setCurrentUser(user)
      setLoading(false)
    })

    return unsubscribe
  }, [])

  const value = {
    currentUser,
    login,
    logout,
    isLoading,
    setIsLoading,
    users,
    userCount,
    setUserCount
  }

  return (
    <AuthContext.Provider value={value}>
      {!loading && children}
    </AuthContext.Provider>
  )
}