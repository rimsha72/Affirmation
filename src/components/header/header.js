import React, { useState } from 'react'
import { BiBell } from 'react-icons/bi'
import Notifications from '../../layouts/notifications';
import { Link } from 'react-router-dom';
import { useAuth } from '../../context/AuthContext';

export default function Header({ header }) {
  const [drop, setDrop] = useState(false);
  const { logout } = useAuth()
  return (
    <>
      <div className='bg-black lg:ml-64 rounded-b-xl h-72' >
        <nav className="text-white">
          <div className="max-w-screen-2xl flex flex-wrap items-center justify-between px-4 py-9 sm:p-9">
            <div className="flex items-center">
              <span className="self-center text-xl sm:text-2xl font-semibold whitespace-nowrap uppercase ">{header ? header : 'Home'}</span>
            </div>
            <div className="relative" id="navbar-default">
              <div className='flex flex-row items-center'>
                <div className='rounded-full bg-white flex justify-center items-center  mr-1 sm:mr-4 w-9 h-9'>
                  <BiBell className='text-black' />
                </div>
                <button type="button" className="flex text-sm rounded-full md:mr-0" onClick={e => setDrop(!drop)} >
                  <div className='flex items-center text-sm '>

                    <span className='hidden sm:block'>Jane doe</span>
                  </div>
                </button>
              </div>
              {/* <div className="absolute items-center z-20"> */}
              <div className={`z-50 ${drop ? null : 'hidden'} absolute w-full px-4 my-4 text-base list-none bg-white divide-y divide-gray-100 rounded-lg shadow`}>
                <ul className="py-2" aria-labelledby="user-menu-button">
                  <li>
                    <Link to="/" className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 dark:hover:bg-gray-600 dark:text-gray-200 dark:hover:text-white">Profile</Link>
                  </li>
                  <li>
                    <a href="/" className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 dark:hover:bg-gray-600 dark:text-gray-200 dark:hover:text-white"
                      onClick={logout}

                    >Log Out</a>
                  </li>
                </ul>
              </div>
              {/* </div> */}
            </div>
          </div>
          <Notifications />
        </nav>
      </div>
    </>
  )
}
