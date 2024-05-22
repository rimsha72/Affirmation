import React, { useState } from 'react'
import CustomButton from '../../utility/customButton'

export default function ClientShare() {
  const [modalToggle, setModalToggle] = useState(false);
  return (
    <div className='px-9 lg:ml-64 max-w-screen-2xl mb-9'>
      <div className='bg-white rounded-md border border-gray-100 shadow-lg shadow-gray-500/40 px-4 py-4 flex justify-between items-center'>
        <span className='font-semibold text-lg'>Share</span>
        <CustomButton content={'Add'} />
      </div>
      <div className='grid grid-cols-1 lg:grid-cols-2 gap-8 '>
        <div className='my-6 '>
          <div className='my-5 px-8'>
            <span className='text-xl font-bold'>General</span>
          </div>
          <div className='bg-white border border-gray-100 shadow-lg shadow-gray-500/70 rounded-md'>
            <div className='px-2 py-2'>
              <div className='font-bold text-sm text-gray-500 py-2 flex justify-between items-center'>
                <div className='flex justify-center items-center'>
                  <img className='rounded-full' src='images/Ellipse 7.png' alt='...' />
                  <span className='pl-4'>Jerry Helfer</span>
                </div>
                <span>Dec 1, 2022; 10:30 am</span>
                <button className='py-1 px-6 text-white text-sm bg-blue-950 font-normal rounded-md' onClick={e => setModalToggle(!modalToggle)}>View</button>
              </div>
            </div>
            <hr className='my-2' />
            <div className='mb-12'>
              <span className='px-3 text-base font-medium'>fasfasdfsadfsd</span>
            </div>
          </div>
        </div>
        <div className='my-6'>
          <div className='my-5 px-8'>
            <span className='text-xl font-black'>Connect</span>
          </div>
          <div className='bg-white border border-gray-100 shadow-lg shadow-gray-500/70 rounded-md'>
            <div className='px-2 py-2'>
              <div className='font-bold py-2 text-sm text-gray-500 flex justify-between items-center'>
                <div className='flex justify-center items-center'>
                  <img className='rounded-full' src='images/Ellipse 7.png' alt='...' />
                  <span className='pl-4'>Jerry Helfer</span>
                </div>
                <span>Dec 1, 2022; 10:30 am</span>
                <button className='py-1 px-6 text-white text-sm bg-blue-950 font-normal rounded-md' onClick={e => setModalToggle(!modalToggle)}>View</button>
              </div>
            </div>
            <hr className='my-2' />
            <div className='mb-12'>
              <span className='px-3 text-base font-medium'>fasfasdfsadfsd</span>
            </div>
          </div>
        </div>

      </div>

      {/* <!-- Main modal --> */}
      <div className={`fixed flex items-center justify-center bg-gray-900/60 z-50 ${modalToggle ? null : `hidden`} w-full p-4 overflow-x-hidden overflow-y-auto inset-0 h-[calc(100%-1rem)] max-h-full`}>
        <div className="relative w-full max-w-4xl max-h-full">
          {/* <!-- Modal content --> */}
          <div className="relative bg-white rounded-lg shadow ">
            {/* <!-- Modal header --> */}
            <div className="flex items-start justify-between p-4 border-b rounded-t">
              <h3 className="text-xl font-semibold text-gray-900">
                Share
              </h3>
            </div>
            <div className="flex flex-wrap items-start justify-between p-4 border-b rounded-t">
              <div>
                <h3 className="text-base font-semibold pb-3 text-gray-900">Type</h3>
                <button className="rounded-lg bg-gray-100 text-sm px-4 py-2 w-72 text-center inline-flex items-center justify-between" type="button">General<svg className="w-4 h-4 ml-2" aria-hidden="true" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M19 9l-7 7-7-7"></path></svg></button>
                {/* <!-- Dropdown menu --> */}
                <div className="z-10 hidden bg-white divide-y divide-gray-100 rounded-lg shadow w-44">
                  <ul className="py-2 text-sm text-gray-700 dark:text-gray-200" aria-labelledby="dropdownDefaultButton">
                    <li>
                      <p className="block px-4 py-2 hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white">Dashboard</p>
                    </li>
                    <li>
                      <p className="block px-4 py-2 hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white">Settings</p>
                    </li>
                    <li>
                      <p className="block px-4 py-2 hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white">Earnings</p>
                    </li>
                    <li>
                      <p className="block px-4 py-2 hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white">Sign out</p>
                    </li>
                  </ul>
                </div>
              </div>
              <div>
                <h3 className="text-base font-semibold pb-3 text-gray-900">Date</h3>
                <input className="rounded-lg bg-gray-100 text-sm px-4 py-2 text-center border border-gray-100" type="date" />
              </div>
              <div>
                <h3 className="text-base font-semibold pb-3 text-gray-900">Time</h3>
                <input className="rounded-lg bg-gray-100 text-sm px-4 py-2 text-center border border-gray-100" defaultValue='10:30' type="time" />
              </div>
            </div>
            {/* <!-- Modal body --> */}
            <div className="p-6 space-y-6">
              <h4>Notes</h4>
              <textarea id="message" rows="4" className="block p-2.5 w-full text-sm text-gray-900 bg-gray-50 rounded-lg border border-gray-300" placeholder="General"></textarea>
            </div>
            {/* <!-- Modal footer --> */}
            <div className="flex items-center justify-center p-6 space-x-2 border-t border-gray-200 rounded-b">
              <button onClick={e => setModalToggle(!modalToggle)} type="button" className="text-white bg-blue-700 hover:bg-blue-800 font-medium rounded-lg text-sm px-5 py-2.5 text-center mr-6">Save</button>
              <button onClick={e => setModalToggle(!modalToggle)} type="button" className="text-white bg-red-600 hover:bg-red-500 rounded-lg border border-gray-200 text-sm font-medium px-5 py-2.5 hover:text-white">Cancel</button>
            </div>
          </div>
        </div>
      </div>

    </div>
  )
}
