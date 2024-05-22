import axios from "axios";
import React, { useContext, useEffect, useState } from "react";
import { baseUrl } from "../config/config";
import Login from "../pages/login/login";

const UserContext = React.createContext();

export const useUser = () => {
  return useContext(UserContext);
};

const UserProvider = ({ children }) => {
  const [user, setUser] = useState(null);
  const [message, setMessage] = useState(null);
  const [token, setToken] = useState(null);

  const login = async (email, password) => {

    if (!user && !token) {
      const body = {
        email, password
      }
      await axios.post(`${baseUrl}specialist/login`, body)
        .then(res => {
          if (res.data.data) {
            setUser(res.data.data)
            localStorage.setItem("key", JSON.stringify(res.data.token));
            localStorage.setItem("user", JSON.stringify(res.data.data))
            setToken(res.data.token)
          }
        })
        .catch(err => {
          setMessage(err.message)
          console.log(err)
        })
    }
  }
  // onAuthStateChanged(auth, (usr) => {
  //   if (usr) {
  //     setUser(usr);
  //   } else {
  //     setUser(null);
  //   }
  // });

  // const login = (email, password) =>
  //   signInWithEmailAndPassword(auth, email, password);

  useEffect(() => {
    const key = JSON.parse(localStorage.getItem("key"));
    const data = JSON.parse(localStorage.getItem("user"));
    if (!key) {
      setUser(null);
      setToken(null);
    } else {
      setToken(key);
      setUser(data);
    }
  }, [])
  const logout = () => {
    setUser(null);
    setToken(null);
  };
  return (
    <UserContext.Provider value={{ user, token, login, message }}>
      {children}
    </UserContext.Provider>
  );
};
export default UserProvider;
