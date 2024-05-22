import { Navigate } from "react-router-dom";

const LoginProtectedRoute = ({ user, token, children }) => {
  if (user && token) {
    return <Navigate to="/chat" replace />;
  }

  return children;
};
export default LoginProtectedRoute;