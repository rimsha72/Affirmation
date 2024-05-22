import React, { useEffect, useState } from 'react'
import Header from '../../components/header/header'
import AvailableCom from '../../components/availabeCom/availableCom'
import axios from 'axios';
import { baseUrl, Config } from '../../config/config';

export default function Available() {
  const [days, setDays] = useState([]);
  const [availability, setAvailability] = useState([]);
  const [render, setRender] = useState(0);
  const [title, setTitle] = useState('');
  const [startDate, setStartDate] = useState('');
  const [selectedDay, setSelectedDay] = useState({
    sun: days?.find(day => day === 'Sun') ? true : false,
    mon: days?.find(day => day == 'Mon') ? true : false,
    tue: days?.find(day => day === 'Tue') ? true : false,
    wed: days?.find(day => day === 'Wed') ? true : false,
    thu: days?.find(day => day === 'Thu') ? true : false,
    fri: days?.find(day => day === 'Fri') ? true : false,
    sat: days?.find(day => day === 'Sat') ? true : false
  });
  const [loader, setLoader] = useState([]);
  const config = Config();

  const fetchUser = async () => {
    await axios.get(`${baseUrl}specialist/get/avialability`, config)
      .then(res => {
        setStartDate(new Date(res.data.data.availability.startDate).toLocaleDateString());
        setAvailability(res.data.data.availability)
        setTitle(res.data.data.availability?.title)
        setSelectedDay({
          sun: res.data.data.availability.day.find(day => day === 'Sun') ? true : false,
          mon: res.data.data.availability.day.find(day => day == 'Mon') ? true : false,
          tue: res.data.data.availability.day.find(day => day === 'Tue') ? true : false,
          wed: res.data.data.availability.day.find(day => day === 'Wed') ? true : false,
          thu: res.data.data.availability.day.find(day => day === 'Thu') ? true : false,
          fri: res.data.data.availability.day.find(day => day === 'Fri') ? true : false,
          sat: res.data.data.availability.day.find(day => day === 'Sat') ? true : false
        })
        setDays(res.data.data.availability.day)
      })
      .catch(err => {
        console.log(err.message)
      })
  }
  useEffect(() => {
    fetchUser();
  }, [render])
  return (
    <>
      <Header header={'availability'} />
      <div className='px-4 sm:px-9 lg:ml-64 max-w-screen-2xl' style={{ marginTop: '-175px' }}>
        <AvailableCom
          availability={availability}
          days={days} setDays={setDays}
          selectedDay={selectedDay}
          setSelectedDay={setSelectedDay}
          render={render}
          setRender={setRender}
          title={title}
          setTitle={setTitle}
          startDate={startDate}
          setStartDate={setStartDate}
        />
      </div>
    </>
  )
}
