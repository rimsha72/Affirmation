import React, { useState } from 'react'
import { BsSearch } from 'react-icons/bs'
import { RiArrowDropDownLine } from 'react-icons/ri'
import DateModel from '../../utility/dateModel';

export default function ClientHeader() {
  const [membership, setMembership] = useState(false);
  const [joinDate, setJoinDate] = useState(false);
  const [modalToggle, setModalToggle] = useState(true)
  return (
    <>
      <div className='max-w-screen-2xl'>
        <div className='flex flex-wrap justify-center sm:justify-end items-center'>
          <form className='basis-full sm:basis-1/4 mb-3'>
            <div className="mr-4 ">
              <BsSearch className="absolute pl-2 mt-2 w-5 h-5 text-gray-200" />
              <input type="search" id="search" className=" pl-7 text-sm text-slate-200 bg-transparent rounded-full border border-gray-300 w-full placeholder:text-slate-200 focus:border-sky-400" placeholder="Search (ID or Last Name)" required />
            </div>
          </form>
          <div className='px-2'>
            <button onClick={e => setMembership(pre => !pre)}
              className="text-gray-400 bg-white font-medium rounded-md text-sm px-4 py-1.5 text-center inline-flex items-center w-full mb-2" type="button">
              Membership <RiArrowDropDownLine className='w-5 h-5' />
            </button>
            <div id="dropdown" className={`z-10 ${!membership && `hidden`} absolute bg-white divide-y divide-gray-100 rounded-lg shadow w-44 dark:bg-gray-700`}>
              <ul className="py-2 text-sm text-gray-700 dark:text-gray-200" aria-labelledby="dropdownDefaultButton">
                <li>
                  <p className="block px-4 py-2 hover:bg-gray-100">Monthly</p>
                </li>
                <li>
                  <p className="block px-4 py-2 hover:bg-gray-100">Yearly</p>
                </li>
              </ul>
            </div>
          </div>
          <div className='px-4'>
            <button onClick={e => setModalToggle(pre => !pre)} className="text-gray-400 bg-white font-medium rounded-md text-sm px-4 py-1.5 mb-2 text-center inline-flex items-center" type="button">Join Date
            </button>
            <div id="dropdown" className={`absolute z-10 ${!joinDate && `hidden`} bg-white divide-y divide-gray-100 rounded-lg shadow w-44 dark:bg-gray-700`}>
              <ul className="py-2 text-sm text-gray-700 dark:text-gray-200" aria-labelledby="dropdownDefaultButton">
                <li>
                  <p className="block px-4 py-2 hover:bg-gray-100">11/11/23</p>
                </li>
                <li>
                  <p className="block px-4 py-2 hover:bg-gray-100">1/1/23</p>
                </li>
              </ul>
            </div>
          </div>
        </div>
        <DateModel modalToggle={modalToggle} setModalToggle={setModalToggle} />
      </div>
    </>
  )
}
