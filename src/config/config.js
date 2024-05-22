import React from 'react'
import { useUser } from "../context/UserContext";

export default function Config() {
  const { token } = useUser();

  return {
    headers: { Accept: 'application/json', Authorization: `Bearer ${token}` }
  }
}


// const baseUrl = "http://54.190.63.190:8080/";
const baseUrl = "http://localhost:8080/";

export { baseUrl, Config }