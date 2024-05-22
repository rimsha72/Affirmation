import React from 'react'
// import VideoInto from './videoIntro'
import { Link } from 'react-router-dom'
import { useUser } from '../context/UserContext'

export default function ProviderInformation() {
  const { user } = useUser();
  return (
    <>
      <div className="flex justify-center items-center bg-white rounded-l-lg mb-4 border border-gray-200 shadow w-full sm:w-1/2 lg:1/3 xl:w-1/4">
        <div className="flex flex-col justify-center items-center py-10">
          <img className="w-24 h-24 mb-3 rounded-full shadow-lg object-cover" src={user.image} alt="Bonnie" />
          <h5 className="mb-1 text-xl font-medium text-gray-900 dark:text-white">Jane Doe</h5>
          <span className="text-sm text-gray-500 mb-2 ">{user.qualification}</span>
          <span className="text-sm text-green-500 rounded-full px-8 py-1" style={{ backgroundColor: '#F5FBF7' }}>Active</span>
        </div>
      </div>
      <div className="bg-white border border-gray-200 rounded-r-lg drop-shadow-lg mb-4 mr-0 xl:mr-5 w-full sm:w-1/2 lg:w-1/2 xl:w-1/3">
        <div className='px-8 py-4'>
          <div className='flex flex-row justify-between items-center'>
            <h2 className='font-bold text-sm lg:text-xl'>Provider Information</h2>
            <Link to='/personal-information'>
              <button className='rounded-lg text-white text-sm sm:text-medium font-medium bg-blue-950 px-4 sm:px-8 py-1'>Update</button>
            </Link>
          </div>
        </div>
        <hr />
        <div className='px-8 py-4'>
          <div className='flex flex-row justify-between items-center my-3'>
            <span><label className='font-poppins text-gray-400 text-sm font-semibold'>Birth Date</label></span>
            <span><label className='font-poppins text-gray-400 font-normal'>{new Date(user.dob).toLocaleDateString()}</label></span>
          </div>
          <div className='flex flex-row justify-between items-center my-3'>
            <span><label className='font-poppins text-gray-400 text-sm font-semibold'>Gender Identity</label></span>
            <span><label className='font-poppins text-gray-400 text-sm font-normal'>{user?.gender}</label></span>
          </div>
          <div className='flex flex-row justify-between items-center my-3'>
            <span><label className='font-poppins text-gray-400 text-sm font-semibold'>Pronouns</label></span>
            <span><label className='font-poppins text-gray-400 text-sm font-normal'>{user?.pronoun}</label></span>
          </div>
          <div className='flex flex-row justify-between items-center my-3'>
            <span><label className='font-poppins text-gray-400 text-sm font-semibold'>Race</label></span>
            <span><label className='font-poppins text-gray-400 text-sm font-normal'>{user?.race}</label></span>
          </div>
          <div className='flex flex-row justify-between items-center my-3'>
            <span><label className='font-poppins text-gray-400 text-sm font-semibold'>Phone Number</label></span>
            <span><label className='font-poppins text-gray-400 text-sm font-normal'>{user?.phoneNo}</label></span>
          </div>
          <div className='flex flex-row justify-between items-center my-3'>
            <span><label className='font-poppins text-gray-400 text-sm font-semibold'>Email</label></span>
            <span><label className='font-poppins text-gray-400 text-sm font-normal'>{user?.email}</label></span>
          </div>
          <div className='flex flex-row justify-between items-center my-3'>
            <span><label className='font-poppins text-gray-400 text-sm font-semibold'>Zip Code</label></span>
            <span><label className='font-poppins text-gray-400 text-sm font-normal'>{user?.zipCode}</label></span>
          </div>
          <div className='flex flex-row justify-between items-center my-3'>
            <span><label className='font-poppins text-gray-400 text-sm font-semibold'>State</label></span>
            <span><label className='font-poppins text-gray-400 text-sm font-normal'>{user?.state}</label></span>
          </div>
        </div>
      </div>
      {/* <VideoInto /> */}
    </>
  )
}
