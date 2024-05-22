import { useState } from "react";
import LoginComp from "../../components/loginComp/LoginComp";
import { useUser } from "../../context/UserContext";
import { useNavigate } from "react-router-dom";

export default function Login() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [messages, setMessages] = useState('')
  const { login, message } = useUser();
  const navigate = useNavigate();
  const handleLogin = (e) => {
    e.preventDefault();
   
          navigate("/");
      
  }
  return (
    <div>
      <LoginComp
        email={email}
        setEmail={setEmail}
        password={password}
        setPassword={setPassword}
        handleLogin={handleLogin}
        message={message}
        messages={messages}
      />
    </div>
  )
}
