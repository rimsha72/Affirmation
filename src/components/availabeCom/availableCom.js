import React, { useEffect, useState } from 'react'
import AvailableModal from '../../layouts/avilable/availableModal'
import ClientInsight from '../../layouts/client/clientInsight';
import axios from 'axios';
import { baseUrl, Config } from '../../config/config';

export default function AvailableCom({ availability, days, setDays, selectedDay, setSelectedDay, render, setRender, title, setTitle, startDate, setStartDate }) {
  const [from, setFrom] = useState('');
  const [to, setTo] = useState('');
  const [message, setMessage] = useState('');
  const [showModal, setShowModal] = useState(false);
  const [showAvailable, setShowAvailable] = useState(false);
  const fromtime = availability?.from?.split(":");
  const toTime = availability?.to?.split(":");
  const config = Config();

  const manageDays = (day) => {
    if (days.find(e => e === day)) {
      const removeDay = days.filter(d => d !== day);
      setDays(removeDay)
    } else {
      setDays(prev => [...prev, day])
    }
  }

  const manageTime = (e, status) => {
    // console.log(e.target.value, status);
    const date = new Date();
    const [hours, minutes] = e.target.value.split(':');
    date.setHours(hours);
    date.setMinutes(minutes);

    const timeAMPM = date.toLocaleTimeString([], { hour: 'numeric', minute: 'numeric', hour12: true });
    if (status) {
      setFrom(timeAMPM)
    } else {
      setTo(timeAMPM);
    }
    // return timeAMPM;
  }

  const setAvailability = async () => {
    console.log(title, selectedDay, from, to)
    if (title && selectedDay && from && to) {
      const body = {
        day: days,
        from: from,
        to: to,
        title: title,
        startDate: startDate
      }
      await axios.post(`${baseUrl}specialist/create/avialability`, body, config)
        .then(res => {
          setShowAvailable(pre => !pre)
          setRender(Math.random())
          console.log(res.data)
        })
        .catch(err => {
          console.log(err.message)
        })
    } else {
      setMessage("Please fill title, date, from and to fields!")
    }
  }
  return (
    <div>
      <div className='mt-6 sm:mt-0'>
        <button className='bg-purple-700 rounded-lg text-white px-4 py-3 text-sm' onClick={e => { setShowAvailable(pre => !pre) }}>+ Add Availability</button>
      </div>
      <div className='flex justify-between flex-wrap py-8 my-4 '>
        <div className={`bg-white me-2 ${showAvailable ? null : `hidden`} rounded shadow-lg w-full lg:max-w-xl xl:max-w-2xl mb-7`}>
          <div className='py-4 px-8 border-b'>
            <h4 className='text-gray-500 font-black py-4'>Availability Name <span className='text-red-600/90'>*</span></h4>
            <input type='text' placeholder='Weekday Availability' defaultValue={title} className='border-0 bg-gray-200 py-3 rounded-lg w-full text-sm' onChange={e => setTitle(e.target.value)} />
          </div>
          <div className='py-3 px-8 border-b flex justify-between flex-wrap'>
            <div className='w-full sm:w-auto'>
              <h4 className='text-gray-500 font-black py-4'>Start Date<span className='text-red-600/90'>*</span></h4>
              <input type='Date' className='border-0 w-full bg-gray-200 py-3 px-6 rounded-lg text-sm' onChange={e => setStartDate(e.target.value)} />
            </div>
            <div className='w-full sm:w-auto'>
              <h4 className='text-gray-500 font-black py-4'>From<span className='text-red-600/90'>*</span></h4>
              <input type='time' id="appt-time" className='border-0 w-full bg-gray-200 py-3 px-6 rounded-lg text-sm' onChange={e => manageTime(e, true)} />
            </div>
            <div className='w-full sm:w-auto'>
              <h4 className='text-gray-500 font-black py-4'>To<span className='text-red-600/90'>*</span></h4>
              <input type='time' className='border-0 w-full bg-gray-200 py-3 px-6 rounded-lg text-sm' onChange={e => manageTime(e, false)} />
            </div>
          </div>
          <div className='py-3 px-8 border-b'>
            <div>
              <h4 className='text-gray-500 font-black py-4'>Select Days</h4>
              <div className='flex text-gray-500 justify-center items-center flex-wrap'>
                <button className={`${selectedDay.sun ? 'bg-blue-750 text-white' : 'bg-gray-200'} border-white border-r  px-2 sm:px-4 xl:px-7 py-2 rounded-l-lg`} onClick={e => { setSelectedDay(e => ({ ...e, sun: !selectedDay.sun })); manageDays('Sun') }}>Sun</button>
                <button className={`${selectedDay.mon ? 'bg-blue-750 text-white' : 'bg-gray-200'} border-white border-r  px-2 sm:px-4 xl:px-7 py-2 `} onClick={e => { setSelectedDay(e => ({ ...e, mon: !selectedDay.mon })); manageDays('Mon') }}>Mon</button>
                <button className={`${selectedDay.tue ? 'bg-blue-750 text-white' : 'bg-gray-200'} border-white border-r  px-2 sm:px-4 xl:px-7 py-2 `} onClick={e => { setSelectedDay(e => ({ ...e, tue: !selectedDay.tue })); manageDays('Tue') }}>Tue</button>
                <button className={`${selectedDay.wed ? 'bg-blue-750 text-white' : 'bg-gray-200'} border-white border-r  px-2 sm:px-4 xl:px-7 py-2 `} onClick={e => { setSelectedDay(e => ({ ...e, wed: !selectedDay.wed })); manageDays('Wed') }}>Wed</button>
                <button className={`${selectedDay.thu ? 'bg-blue-750 text-white' : 'bg-gray-200'} border-white border-r  px-2 sm:px-4 xl:px-7 py-2 `} onClick={e => { setSelectedDay(e => ({ ...e, thu: !selectedDay.thu })); manageDays('Thu') }}>Thu</button>
                <button className={`${selectedDay.fri ? 'bg-blue-750 text-white' : 'bg-gray-200'} border-white border-r  px-2 sm:px-4 xl:px-7 py-2 `} onClick={e => { setSelectedDay(e => ({ ...e, fri: !selectedDay.fri })); manageDays('Fri') }}>Fri</button>
                <button className={`${selectedDay.sat ? 'bg-blue-750 text-white' : 'bg-gray-200'} border-white border-r  px-2 sm:px-4 xl:px-7 py-2 rounded-r-lg`} onClick={e => { setSelectedDay(e => ({ ...e, sat: !selectedDay.sat })); manageDays('Sat') }}>Sat</button>
              </div>
            </div>
            <div className='flex justify-center space-x-3 py-8'>
              <button className='bg-blue-600 text-white px-8 py-2 rounded-lg shadow-lg' onClick={e => { setAvailability(); }}>Save</button>
              <button className='bg-red-600 text-white px-8 py-2 rounded-lg shadow-lg' onClick={e => { setShowAvailable(pre => !pre) }}>Cancel</button>
            </div>
            <div className='text-xs text-red-700 text-center'>
              {message}
            </div>
          </div>
        </div>
        {availability.title ?
          <div className='w-full max-w-2xl'>
            <div className='bg-white rounded-lg shadow-lg mb-4'>
              <div className='flex justify-between px-8 py-4 border-b'>
                <h4 className='text-gray-500 font-bold truncate w-2/3'>{availability.title}</h4>
                <div>
                  <button className='text-blue-500 font-black text-sm mr-4' onClick={e => { setShowAvailable(pre => !pre) }}>Update</button>
                  <button className='text-red-500 font-black text-sm' onClick={e => setShowModal(previous => !previous)}>Delete</button>
                </div>
              </div>
              <div className='flex flex-col sm:flex-row justify-between text-gray-500 px-8 py-6'>
                <div className='flex justify-between sm:flex-col'>
                  <button className='mb-3'>Sun</button>
                  <p>{selectedDay.sun ? fromtime[0] + fromtime[1].charAt(3) + '-' + toTime[0] + toTime[1].charAt(3) : ''} </p>
                </div>
                <div className='flex justify-between sm:flex-col'>
                  <button className='mb-3'>Mon</button>
                  <p>{selectedDay.mon ? fromtime[0] + fromtime[1].charAt(3) + '-' + toTime[0] + toTime[1].charAt(3) : ''} </p>
                </div>
                <div className='flex justify-between sm:flex-col'>
                  <button className='mb-3'>Tue</button>
                  <p>{selectedDay.tue ? fromtime[0] + fromtime[1].charAt(3) + '-' + toTime[0] + toTime[1].charAt(3) : ''} </p>
                </div>
                <div className='flex justify-between sm:flex-col'>
                  <button className='mb-3'>Wed</button>
                  <p>{selectedDay.wed ? fromtime[0] + fromtime[1].charAt(3) + '-' + toTime[0] + toTime[1].charAt(3) : ''} </p>
                </div>
                <div className='flex justify-between sm:flex-col'>
                  <button className='mb-3'>Thu</button>
                  <p>{selectedDay.thu ? fromtime[0] + fromtime[1].charAt(3) + '-' + toTime[0] + toTime[1].charAt(3) : ''} </p>
                </div>
                <div className='flex justify-between sm:flex-col'>
                  <button className='mb-3'>Fri</button>
                  <p>{selectedDay.fri ? fromtime[0] + fromtime[1].charAt(3) + '-' + toTime[0] + toTime[1].charAt(3) : ''} </p>
                </div>
                <div className='flex justify-between sm:flex-col'>
                  <button className='mb-3'>Sat</button>
                  <p>{selectedDay.sat ? fromtime[0] + fromtime[1].charAt(3) + '-' + toTime[0] + toTime[1].charAt(3) : ''} </p>
                </div>
              </div>
            </div>
            <div></div>
          </div>
          :
          ''
        }
      </div>
      <AvailableModal showModal={showModal} setShowModal={setShowModal} setRender={setRender} />
    </div>
  )
}
