import React, { createContext, useContext, useState } from "react";

// Constants for hardcoded credentials
const CONSTANT_CREDENTIALS = {
  email: "admin@gmail.com",
  password: "Affirmation@472"
};

const UserContext = createContext();

export const useUser = () => {
  return useContext(UserContext);
};

const UserProvider = ({ children }) => {
  const [user, setUser] = useState(null);
  const [message, setMessage] = useState(null);

  const login = (email, password) => {
    return new Promise((resolve, reject) => {
      if (email === CONSTANT_CREDENTIALS.email && password === CONSTANT_CREDENTIALS.password) {
        const userData = {
          name: "John Doe",
          email: email
        };
        setUser(userData);
        resolve(userData);
      } else {
        setMessage("Invalid credentials");
        reject("Invalid credentials");
      }
    });
  };

  return (
    <UserContext.Provider value={{ user, login, message }}>
      {children}
    </UserContext.Provider>
  );
};

export default UserProvider;
