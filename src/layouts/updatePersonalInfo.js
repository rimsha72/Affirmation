import React, { useState } from 'react'
import Header from '../components/header/header'
import { Link } from 'react-router-dom'
import { useUser } from '../context/UserContext'
import { coolGray } from 'tailwindcss/colors'
import axios from 'axios'
import Config, { baseUrl } from '../config/config'

export default function UpdatePersonalInfo() {
  const [message, setMessage] = useState('');
  const [data, setData] = useState({
    firstName: null,
    lastName: null,
    dob: null,
    gender: null,
    race: null,
    pronoun: null,
    phoneNo: null,
    zipCode: null
  })
  const { user } = useUser();
  const config = Config();

  const updateUser = async () => {
    console.log(data)
    if (data.firstName && data.lastName && data.dob && data.gender && data.race && data.pronoun && data.phoneNo && data.zipCode) {
      console.log("inside of if")
      const body = {
        firstName: data.firstName,
        lastName: data.lastName,
        dob: data.dob,
        gender: data.gender,
        race: data.race,
        pronoun: data.pronoun,
        zipCode: data.zipCode
      }
      await axios.put(`${baseUrl}specialist/update`, body, config)
        .then(res => {
          console.log(res)
          setMessage(res.data.message)
        })
        .catch(err => console.log(err))
    } else {
      setMessage("please fill all the fields!")
    }
  }
  return (
    <>
      <Header header={'Personal Information'} />
      <div className='px-9 lg:ml-64' style={{ marginTop: '-175px' }}>
        <div className='d-flex flex-row '>
          <div className='flex flex-row flex-wrap'>
            <div className="flex justify-center items-center bg-white rounded-l-lg mb-4 border border-gray-200 shadow w-full sm:w-1/3 lg:1/3 xl:w-1/4">
              <div className="flex flex-col justify-center items-center py-10">
                <img className="w-24 h-24 mb-3 rounded-full shadow-lg object-cover" src={user.image} alt="Bonnie" />
                <h5 className="mb-1 text-xl font-medium text-gray-900 dark:text-white">{user.firstName} {user.lastName}</h5>
                <span className="text-sm text-gray-500 mb-2 ">{user.qualification}</span>
                <span className="text-sm text-green-500 rounded-full px-8 py-1" style={{ backgroundColor: '#F5FBF7' }}>Active</span>
              </div>
            </div>
            <div className="bg-white border border-gray-200 rounded-r-lg drop-shadow-lg mb-4 w-full sm:w-2/3 xl:w-1/2">
              <div className='px-8 py-4'>
                <div className='flex flex-row justify-between items-center'>
                  <h2 className='font-bold text-xl'>Provider Information</h2>
                  {/* <button className='rounded-lg text-white text-sm sm:text-medium font-medium bg-blue-950 px-4 sm:px-8 py-1'>Update</button> */}
                </div>
              </div>
              <hr />
              <div className='px-8 py-4'>
                <div className='flex flex-row justify-between items-center my-3'>
                  <span><label className='font-poppins text-gray-400 font-semibold'>First Name</label></span>
                  <input
                    className='bg-gray-200 rounded-md py-1 text-center border border-gray-300 focus:ring-blue-500 focus:border-blue-500'
                    type='text'
                    placeholder={user?.firstName}
                    onChange={e => setData({ ...data, firstName: e.target.value })}
                  />
                </div>
                <div className='flex flex-row justify-between items-center my-3'>
                  <span><label className='font-poppins text-gray-400 font-semibold'>Last Name</label></span>
                  <input
                    className='bg-gray-200 rounded-md py-1 text-center border border-gray-300 focus:ring-blue-500 focus:border-blue-500'
                    type='text'
                    placeholder={user?.lastName}
                    onChange={e => setData({ ...data, lastName: e.target.value })}
                  />
                </div>
                {/* <div className='flex flex-row justify-between items-center my-3'>
                                    <span><label className='font-poppins text-gray-400 font-semibold'>Provider Type</label></span>
                                    <input className='bg-gray-200 rounded-md py-1 text-center border border-gray-300 focus:ring-blue-500 focus:border-blue-500' type='text' placeholder='Health Nav' />
                                </div> */}
                <div className='flex flex-row justify-between items-center my-3'>
                  <span><label className='font-poppins text-gray-400 font-semibold'>Birth Date</label></span>
                  <input
                    className='bg-gray-200 rounded-md py-1 text-center border border-gray-300 focus:ring-blue-500 focus:border-blue-500'
                    type='Date'
                    onChange={e => setData({ ...data, dob: e.target.value })}
                  />
                </div>
                <div className='flex flex-row justify-between items-center my-3'>
                  <span><label className='font-poppins text-gray-400 font-semibold'>Gender Identity</label></span>
                  <input
                    className='bg-gray-200 rounded-md py-1 text-center border border-gray-300 focus:ring-blue-500 focus:border-blue-500'
                    type='text'
                    placeholder={user.gender}
                    onChange={e => setData({ ...data, gender: e.target.value })}
                  />
                </div>
                <div className='flex flex-row justify-between items-center my-3'>
                  <span><label className='font-poppins text-gray-400 font-semibold'>Race</label></span>
                  <input
                    className='bg-gray-200 rounded-md py-1 text-center border border-gray-300 focus:ring-blue-500 focus:border-blue-500'
                    type='text'
                    placeholder={user.race}
                    onChange={e => setData({ ...data, race: e.target.value })}
                  />
                </div>
                <div className='flex flex-row justify-between items-center my-3'>
                  <span><label className='font-poppins text-gray-400 font-semibold'>Pronouns</label></span>
                  <input
                    className='bg-gray-200 rounded-md py-1 text-center border border-gray-300 focus:ring-blue-500 focus:border-blue-500'
                    type='text'
                    placeholder={user.pronoun}
                    onChange={e => setData({ ...data, pronoun: e.target.value })}
                  />
                </div>
                <div className='flex flex-row justify-between items-center my-3'>
                  <span><label className='font-poppins text-gray-400 font-semibold'>Phone Number</label></span>
                  <input
                    className='bg-gray-200 rounded-md py-1 text-center border border-gray-300 focus:ring-blue-500 focus:border-blue-500'
                    type='number'
                    placeholder='(123) 456-7890'
                    onChange={e => setData({ ...data, phoneNo: e.target.value })}
                  />
                </div>
                {/* <div className='flex flex-row justify-between items-center my-3'>
                                    <span><label className='font-poppins text-gray-400 font-semibold'>Email</label></span>
                                    <input className='bg-gray-200 rounded-md py-1 text-center border border-gray-300 focus:ring-blue-500 focus:border-blue-500' type='email' placeholder='jdoe@villa.com' />
                                </div> */}
                <div className='flex flex-row justify-between items-center my-3'>
                  <span><label className='font-poppins text-gray-400 font-semibold'>Zip Code</label></span>
                  <input
                    className='bg-gray-200 rounded-md py-1 text-center border border-gray-300 focus:ring-blue-500 focus:border-blue-500'
                    type='number'
                    placeholder='12345'
                    onChange={e => setData({ ...data, zipCode: parseInt(e.target.value) })}
                  />
                </div>
                <div>
                  <p className='text-sm text-red-600 text-center py-2'>{message}</p>
                </div>
                <div className='flex flex-row justify-evenly items-center my-3'>
                  <button type="button" className="text-white bg-blue-500 hover:bg-blue-800 focus:ring-4 focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 mr-2 mb-2" onClick={updateUser}>Save</button>
                  <Link to='/'>
                    <button type="button" className="focus:outline-none text-white bg-red-600 hover:bg-red-800 focus:ring-4 focus:ring-red-300 font-medium rounded-lg text-sm px-5 py-2.5 mr-2 mb-2">Cancel</button>
                  </Link>
                </div>
              </div>
            </div>
            {/* <VideoInto/> */}
          </div>
        </div>
      </div>
    </>
  )
}
