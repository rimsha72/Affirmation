import React, { useEffect, useState } from 'react'
import Header from '../../components/header/header'
import ClientHome from '../../components/clientComp/clientHome'
import axios from 'axios';
import { baseUrl, Config } from '../../config/config';

export default function Client() {
  const [clients, setClients] = useState([]);
  const [loader, setLoader] = useState(false);
  return (
    <>
      <Header header={'Users'} />
      <div className='px-4 sm:px-9'>
        <ClientHome />
      </div>
    </>
  )
}
