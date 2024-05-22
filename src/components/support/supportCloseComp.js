import React, { useEffect, useState } from 'react'
import SupportHeader from '../../layouts/support/supportHeader'
import SupportTable from '../../layouts/support/supportTable'
import axios from 'axios';
import { baseUrl, Config } from '../../config/config';

export default function SupportCloseComp() {
    const [support, setSupport] = useState([]);
    const config = Config();
    const fetchSupports = async () => {
        await axios.get(`${baseUrl}support/close`, config)
            .then(res => {
                console.log("close support", res.data)
                setSupport(res.data.data)
            }).catch(err => console.log(err))
    }
    useEffect(() => {
        fetchSupports();
    }, [])
    return (
        <div style={{ marginTop: '-180px' }}>
            <SupportHeader requestName={'Open Request'} />
            <SupportTable requestName={'Open Request'} support={support} />
        </div>
    )
}
