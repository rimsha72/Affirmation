import React from 'react'
import { BrowserRouter, Routes, Route, Navigate } from 'react-router-dom';
import Dashboard from './pages/dashboard/dashboard';
import Home from './components/home/home';
import Client from './pages/client/client';
import Schedule from './pages/faq/FAQ';
import Login from './pages/login/login';
import RootLayout from './layouts/RootLayout';
import PrivacyPolicy from './pages/privacy/PrivacyPolicy';
import Terms from './pages/terms/Terms';
import { useAuth } from './context/AuthContext';

export default function Router() {
  const { currentUser } = useAuth()
  const PrivateRoute = ({ element: Component, ...rest }) => {
    const { currentUser } = useAuth();

    return currentUser ? <Component {...rest} /> : <Navigate to="/login" />;
  };
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/login" element={<Login />} />
        <Route path="/" element={currentUser ? <RootLayout /> : <Navigate to="/login" />} >
          <Route index element={<PrivateRoute element={Home} />} />
          <Route path="profile" element={<PrivateRoute element={Dashboard} />} />
          <Route path="client" element={<PrivateRoute element={Client} />} />
          <Route path="faq" element={<PrivateRoute element={Schedule} />} />
          <Route path="privacy" element={<PrivateRoute element={PrivacyPolicy} />} />
          <Route path="terms" element={<PrivateRoute element={Terms} />} />

        </Route>
      </Routes>
    </BrowserRouter>
  )
}
