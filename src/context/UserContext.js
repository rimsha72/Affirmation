import React, { useContext, useEffect, useState } from "react";

// Constants for hardcoded credentials
const CONSTANT_CREDENTIALS = {
  email: "user@example.com",
  password: "password123"
};

const UserContext = React.createContext();

export const useUser = () => {
  return useContext(UserContext);
};

const UserProvider = ({ children }) => {
  const [user, setUser] = useState(null);
  const [message, setMessage] = useState(null);
  const [token, setToken] = useState(null);

  const login = (email, password) => {
    if (!user && !token) {
      if (email === CONSTANT_CREDENTIALS.email && password === CONSTANT_CREDENTIALS.password) {
        const userData = {
          name: "John Doe",
          email: email
        };
        const fakeToken = "fake-jwt-token";

        setUser(userData);
        localStorage.setItem("key", JSON.stringify(fakeToken));
        localStorage.setItem("user", JSON.stringify(userData));
        setToken(fakeToken);
      } else {
        setMessage("Invalid credentials");
        console.log("Invalid credentials");
      }
    }
  };

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
  }, []);

  const logout = () => {
    setUser(null);
    setToken(null);
    localStorage.removeItem("key");
    localStorage.removeItem("user");
  };

  return (
    <UserContext.Provider value={{ user, token, login, message, logout }}>
      {children}
    </UserContext.Provider>
  );
};

export default UserProvider;
