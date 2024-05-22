import React from 'react'
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Dashboard from './pages/dashboard/dashboard';
import UpdatePersonalInfo from './layouts/updatePersonalInfo';
import Home from './components/home/home';
import Client from './pages/client/client';
import ViewClient from './components/clientComp/viewClient';
import Schedule from './pages/faq/FAQ';
import Support from './pages/support/support';
import ViewSupport from './pages/support/viewSupport';
import ViewSupportClose from './pages/support/viewSupportClose';
import Password from './pages/password/password';
import Available from './pages/available/available';
import Chat from './pages/chat/chat';
import SupportClose from './pages/support/supportClose';
import Login from './pages/login/login';
import { useUser } from './context/UserContext';
import PanelProtectedRoute from './utility/PanelProtectedRoute';
import RootLayout from './layouts/RootLayout';
import LoginProtectedRoute from './utility/LoginProtectedRoute';
import ClientRootLayout, { UserInfo } from './layouts/client/clientRootLayout';
import ClientUserDetails from './layouts/client/clientUserDetails';
import ClientHealthProfile from './layouts/client/clientHealthProfile';
import ClientSupportRequests from './layouts/client/clientSupportRequests';
import ClientConnect from './layouts/client/clientConnect';
import ClientInsight from './layouts/client/clientInsight';
import ClientWellnessPlan from './layouts/client/clientWellnessPlan';
import ClientShare from './layouts/client/clientShare';
import Video from './pages/Video';
import PrivacyPolicy from './pages/privacy/PrivacyPolicy';
import Terms from './pages/terms/Terms';

export default function Router() {
  const { user, token } = useUser();
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<RootLayout />} >
          <Route index element={<Home />} />
          <Route path="personal-information" element={<UpdatePersonalInfo />} />
          <Route path="profile" element={<Dashboard />} />
          <Route path="client" element={<Client />} />
          <Route exact path="view-client" element={<ClientRootLayout />}>
            <Route index element={<ClientUserDetails />} />
            <Route exact path='profile' element={<ClientHealthProfile />} />
            <Route path='requests' element={<ClientSupportRequests />} />
            <Route path='connect' element={<ClientConnect />} />
            <Route path='insight' element={<ClientInsight />} />
            <Route path='plan' element={<ClientWellnessPlan />} />
            <Route path='share' element={<ClientShare />} />
          </Route>
          <Route path="faq" element={<Schedule />} />
          <Route path="privacy" element={<PrivacyPolicy />} />
          <Route path="terms" element={<Terms />} />
          <Route path="support" element={<Support />} />
          <Route path="support/close" element={<SupportClose />} />
          <Route path="view-support" element={<ViewSupport />} />
          <Route path="view-support-close" element={<ViewSupportClose />} />
          <Route path="password" element={<Password />} />
          <Route path="availability" element={<Available />} />
          <Route path="chat" element={<Chat />} />
        </Route>
        <Route path="video" element={<Video />} />
        <Route
          path="/login"
          element={<Login />}
        />
      </Routes>
    </BrowserRouter>
  )
}
