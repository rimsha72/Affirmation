import React, { useEffect, useState } from 'react';
import ScheduleHeader from '../../layouts/schedule/scheduleHeader';
import ScheduleTable from '../../layouts/schedule/sheduleTable';
import axios from 'axios';
import { baseUrl, Config } from '../../config/config';

export default function ScheduleComp() {
    const [modalToggle, setModalToggle] = useState(true)
    const [appointments, setAppointments] = useState([]);
    const config = Config();
    const fetchAppointments = async () => {

        await axios.get(`${baseUrl}appointment/get`, config)
            .then((res) => {
                console.log(res.data.data)
                setAppointments(res.data.data)
            })
            .catch((err) => {
                console.log(err)
            })
    }
    useEffect(() => {
        fetchAppointments();
    }, [])
    return (
        <div style={{ marginTop: '-180px' }}>
            <ScheduleHeader />
            <ScheduleTable modalToggle={modalToggle} setModalToggle={setModalToggle} appointments={appointments} />
            {/* <ScheduleModal modalToggle={modalToggle} setModalToggle={setModalToggle} /> */}
        </div>
    )
}
