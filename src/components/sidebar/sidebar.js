import React, { useEffect, useState } from 'react'
import { SlHome } from 'react-icons/sl'
import { BsFillPersonFill, BsChatLeftDots } from 'react-icons/bs'
import { IoCalendarOutline } from 'react-icons/io5'
import { FiKey } from 'react-icons/fi'
import { RiCloseFill } from 'react-icons/ri'
import { AiOutlineLock } from 'react-icons/ai'
import { Link } from 'react-router-dom'
import { NavLink } from "react-router-dom";
import { MdOutlinePrivacyTip } from 'react-icons/md'
// import Header from '../header/header'

export default function Sidebar() {
  const [showMenue, setShowMenue] = useState(false);
  const [dropDown, setDropDown] = useState(false);
  const [test, settest] = useState(false);
  useEffect(() => {
  }, [])
  return (
    <>
      <div className='bg-gradient-to-r from-blue-950 to-blue-750'>
        <button type="button" onClick={e => setShowMenue(true)} className="flex items-center p-2 ml-3 border-0 text-sm text-gray-50 rounded-lg  lg:hidden hover:bg-gray-100">
          <span className="sr-only">Open sidebar</span>
          <svg className="w-6 h-6" aria-hidden="true" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
            <path clipRule="evenodd" fillRule="evenodd" d="M2 4.75A.75.75 0 012.75 4h14.5a.75.75 0 010 1.5H2.75A.75.75 0 012 4.75zm0 10.5a.75.75 0 01.75-.75h7.5a.75.75 0 010 1.5h-7.5a.75.75 0 01-.75-.75zM2 10a.75.75 0 01.75-.75h14.5a.75.75 0 010 1.5H2.75A.75.75 0 012 10z"></path>
          </svg>
        </button>
      </div>

      <aside className={`fixed top-0 left-0 z-40 w-64 bg-white h-screen ${showMenue ? null : `hidden`} lg:block`} aria-label="Sidebar">
        <div className="h-full px-3 py-4 overflow-y-auto shadow-xl shadow-grey-600">
          {showMenue &&
            <button className='float-right text-xl' onClick={e => setShowMenue(false)}>
              <RiCloseFill />
            </button>
          }
          <ul className="space-y-2 font-normal text-sm">
            <li>
              <Link to='/' className="flex items-center py-2 px-5 rounded-lg justify-center">
                <img src='/images/logo.svg' alt='....' className='object-cover h-24' />
              </Link>
            </li>
            <li>
              <NavLink
                to="/"
                className={({ isActive, isPending }) =>
                  isActive ? "flex items-center py-3 px-5 rounded-lg bg-black text-white font-semibold"
                    :
                    "flex items-center py-2 px-5 text-gray-500 rounded-lg hover:bg-black hover:text-white hover:font-medium"
                }
              >
                <SlHome />
                <span className="flex-1 ml-3 whitespace-nowrap">Home</span>
              </NavLink>
            </li>
            <li>
              <NavLink
                to="/client"
                className={({ isActive, isPending }) =>
                  isActive ? "flex items-center py-3 px-5 rounded-lg bg-black text-white font-semibold"
                    :
                    "flex items-center py-2 px-5 text-gray-500 rounded-lg hover:bg-black hover:text-white hover:font-medium"
                }
              >
                <BsFillPersonFill />
                <span className="flex-1 ml-3 whitespace-nowrap">Users</span>
              </NavLink>
            </li>
            {/* <li>
              <NavLink
                to="/affirm"
                className={({ isActive, isPending }) =>
                  isActive ? "flex items-center py-3 px-5 rounded-lg bg-black text-white font-semibold"
                    :
                    "flex items-center py-2 px-5 text-gray-500 rounded-lg hover:bg-black hover:text-white hover:font-medium"
                }
              >
                <IoCalendarOutline />
                <span className="flex-1 ml-3 whitespace-nowrap">Affirm</span>
              </NavLink>

            </li> */}
            <li>
              <NavLink
                to="/faq"
                className={({ isActive, isPending }) =>
                  isActive ? "flex items-center py-3 px-5 rounded-lg bg-black text-white font-semibold"
                    :
                    "flex items-center py-2 px-5 text-gray-500 rounded-lg hover:bg-black hover:text-white hover:font-medium"
                }
              >
                <IoCalendarOutline />
                <span className="flex-1 ml-3 whitespace-nowrap">FAQ</span>
              </NavLink>

            </li>
            <li>
              <NavLink
                to="/privacy"
                className={({ isActive, isPending }) =>
                  isActive ? "flex items-center py-3 px-5 rounded-lg bg-black text-white font-semibold"
                    :
                    "flex items-center py-2 px-5 text-gray-500 rounded-lg hover:bg-black hover:text-white hover:font-medium"
                }
              >
                <MdOutlinePrivacyTip />
                <span className="flex-1 ml-3 whitespace-nowrap">Privacy policy</span>
              </NavLink>

            </li>
            <li>
              <NavLink
                to="/terms"
                className={({ isActive, isPending }) =>
                  isActive ? "flex items-center py-3 px-5 rounded-lg bg-black text-white font-semibold"
                    :
                    "flex items-center py-2 px-5 text-gray-500 rounded-lg hover:bg-black hover:text-white hover:font-medium"
                }
              >
                <MdOutlinePrivacyTip />
                <span className="flex-1 ml-3 whitespace-nowrap">Terms and conditions</span>
              </NavLink>

            </li>
            {/* <li>
              <NavLink
                to='/support'
                className={({ isActive, isPending }) => {
                  setDropDown(isActive)
                  return (
                    isActive ? "flex items-center py-2 px-5 rounded-lg bg-black text-white font-semibold"
                      :
                      "flex items-center py-2 px-5 text-gray-500 rounded-lg hover:bg-black hover:text-white hover:font-medium"
                  )
                }}
              >
                <FiKey className='text-sky-400 hover:text-cyan-200' />
                <span className="flex-1 ml-3 whitespace-nowrap">Support Request</span>
              </NavLink>
              <div className={`z-10 ${dropDown ? null : `hidden`} w-full divide-y divide-gray-100 rounded-lg`}>
                <ul className="py-2 text-sm text-gray-700">
                  <li>
                    <NavLink
                      to='/support' end
                      className={({ isActive }) =>
                        !isActive ?
                          "block py-2 rounded-lg text-center"
                          :
                          "flex items-center justify-center py-2 px-5 rounded-lg bg-black text-white font-semibold"
                      }>
                      <span>Open</span></NavLink>
                  </li>
                  <li>
                    <NavLink
                      to='/support/close' end
                      className={({ isActive }) =>
                        isActive ? "flex items-center justify-center py-2 px-5 rounded-lg bg-black text-white font-semibold"
                          :
                          "block py-2 rounded-lg text-center"
                      }
                      onClick={e => setDropDown(true)}>
                      Closed
                    </NavLink>
                  </li>
                </ul>
              </div>
            </li>
            <li>
              <NavLink
                to="/chat"
                className={({ isActive, isPending }) =>
                  isActive ? "flex items-center py-2 px-5 rounded-lg bg-black text-white font-semibold"
                    :
                    "flex items-center py-2 px-5 text-gray-500 rounded-lg hover:bg-black hover:text-white hover:font-medium"
                }>
                <BsChatLeftDots />
                <span className="flex-1 ml-3 whitespace-nowrap">Chat</span>
              </NavLink>
            </li> */}
          </ul>
          {/* <ul className="pt-4 mt-4 space-y-2 font-normal text-sm border-t border-gray-200">
            <li>
              <Link className="flex items-center py-2 px-1 text-slate-500 rounded-lg">
                <span className="ml-4">SETTINGS</span>
              </Link>
            </li>
            <li>
              <NavLink to='/availability' className={({ isActive, isPending }) =>
                isActive ? "flex items-center py-2 px-5 rounded-lg bg-black text-white font-semibold"
                  :
                  "flex items-center py-2 px-5 text-gray-500 rounded-lg hover:bg-black hover:text-white hover:font-medium"
              }>
                <IoCalendarOutline />
                <span className="ml-4">Availability</span>
              </NavLink>
            </li>
            <li>
              <NavLink to='/password' className={({ isActive, isPending }) =>
                isActive ? "flex items-center py-2 px-5 rounded-lg bg-black text-white font-semibold"
                  :
                  "flex items-center py-2 px-5 text-gray-500 rounded-lg hover:bg-black hover:text-white hover:font-medium"
              }>
                <AiOutlineLock />
                <span className="ml-3">Change Password</span>
              </NavLink>
            </li>
          </ul> */}
        </div>
      </aside>

    </>
  )
}
