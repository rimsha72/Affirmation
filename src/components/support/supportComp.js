import React, { useEffect, useState } from 'react'
import SupportHeader from '../../layouts/support/supportHeader'
import SupportTable from '../../layouts/support/supportTable'
import axios from 'axios';
import { baseUrl, Config } from '../../config/config';

export default function SupportComp() {
    const [support, setSupport] = useState([]);
    const config = Config();
    const fetchSupports = async () => {
        await axios.get(`${baseUrl}support/open`, config)
            .then(res => {
                // console.log('open', res.data)
                setSupport(res.data.data)
            }).catch(err => console.log(err))
    }
    useEffect(() => {
        fetchSupports();
    }, [])
    return (
        <div style={{ marginTop: '-180px' }}>
            <SupportHeader requestName={'Close Request'} />
            <SupportTable requestName={'Close Request'} support={support} />
        </div>
    )
}
