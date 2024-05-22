import React, { useEffect, useState } from 'react'
import Header from '../../components/header/header'
import UserInformation from '../userInformation'
import ConnectTeam from '../connectTeam'
import { Outlet, useLocation } from 'react-router-dom'
import ClientSubHeader from './clientSubHeader'
import axios from 'axios'
import Config, { baseUrl } from '../../config/config'

export default function ClientRootLayout() {
  const [user, setUser] = useState([]);
  const config = Config();
  let { state } = useLocation();

  const fetchUser = async () => {
    await axios.get(`${baseUrl}specialist/user/${state.id}`, config)
      .then(res => {
        console.log(res)
        setUser(res.data.data.users)
      })
      .catch(err => {
        console.log(err)
      })
  }

  useEffect(() => {
    fetchUser();
  }, [])
  return (
    <div>
      <div>
        <Header header={"Users"} />
        <div className='px-9 lg:ml-64' style={{ marginTop: '-175px' }}>
          <div className='d-flex flex-row '>
            <div className='flex flex-row flex-wrap'>
              <UserInformation user={user} />
              <ConnectTeam />
            </div>
          </div>
        </div>
        <ClientSubHeader user={user} />
      </div>
      <Outlet />
    </div>
  )
}