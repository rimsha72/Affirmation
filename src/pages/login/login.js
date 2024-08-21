import { useEffect, useState } from "react";
import LoginComp from "../../components/loginComp/LoginComp";
import { useUser } from "../../context/UserContext";
import { useNavigate } from "react-router-dom";
import { useAuth } from "../../context/AuthContext";

export default function Login() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [messages, setMessages] = useState('');
  const { login, currentUser } = useAuth();
  const navigate = useNavigate()
  const handleSubmit = async (event) => {
    event.preventDefault();
    try {
      const user = await login(email, password);
      console.log("Logged in user:", user, "hellow");
    } catch (error) {
      console.error("Login failed:", error.message);
    }
  };
  useEffect(() => {
    if (currentUser) {
      navigate('/'); // Navigate to the homepage if the user is logged in
    }
  }, [currentUser, navigate]);

  return (
    <div>
      <LoginComp
        email={email}
        setEmail={setEmail}
        password={password}
        setPassword={setPassword}
        handleLogin={handleSubmit}
        message={""}
        messages={messages}
      />
    </div>
  );
}
