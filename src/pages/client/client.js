import React, { useEffect, useState } from 'react'
import Header from '../../components/header/header'
import ClientHome from '../../components/clientComp/clientHome'
import axios from 'axios';
import { baseUrl, Config } from '../../config/config';

export default function Client() {
  const [clients, setClients] = useState([]);
  const [loader, setLoader] = useState(false);
  const config = Config();

  const fetchClients = async () => {
    const body = {
      email: "maazt23@gmail.com"
    }
    await axios.get(`${baseUrl}specialist/get`, config)
      .then((res) => {
        // console.log(res.data)
        setClients(res.data.data);
        setLoader(true)
      })
      .catch((err) => {
        console.log(err)
        setLoader(true)
      })
  }
  useEffect(() => {
    fetchClients();
  }, [])
  return (
    <>
      <Header header={'Users'} />
      <div className='px-4 sm:px-9'>
        <ClientHome data={clients} loader={loader} />
      </div>
    </>
  )
}
