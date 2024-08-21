import React from 'react'
import { useUser } from "../context/UserContext";


import { collection, getDocs } from 'firebase/firestore';
import { db } from '../firebase/firebaseConfig';
export default function Config() {
  const { token } = useUser();

  return {
    headers: { Accept: 'application/json', Authorization: `Bearer ${token}` }
  }
}


// const baseUrl = "http://54.190.63.190:8080/";
const baseUrl = "http://localhost:8080/";

export { baseUrl, Config }


export const getAllUsers = async () => {
  try {
    const usersCollection = collection(db, 'users');
    const userSnapshot = await getDocs(usersCollection);
    const userList = userSnapshot.docs.map(doc => ({ id: doc.id, ...doc.data() }));
    return userList;
  } catch (error) {
    console.error("Error fetching users: ", error);
    return [];
  }
};
export const getAllFaqs = async () => {
  try {
    const faqsCollection = collection(db, 'faqs'); // Replace 'faqs' with your actual collection name
    const faqsSnapshot = await getDocs(faqsCollection);
    const faqList = faqsSnapshot.docs.map(doc => ({ id: doc.id, ...doc.data() }));
    return faqList;
  } catch (error) {
    console.error("Error fetching FAQs: ", error);
    return [];
  }
};