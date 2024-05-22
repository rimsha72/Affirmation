import React from 'react'
import { FaUserAlt } from 'react-icons/fa'
import { NavLink } from 'react-router-dom'

export default function ClientSubHeader({ user }) {
  return (
    <>
      <div className='px-7 lg:ml-64 flex flex-row flex-wrap py-8 mb-3'>
        <NavLink
          to="/view-client"
          className={({ isActive, isPending }) =>
            isActive ? "flex flex-row items-center w-full md:w-auto my-2 bg-blue-950 drop-shadow-lg px-6 mx-3 py-1 rounded-md text-white font-normal"
              :
              "flex flex-row items-center w-full md:w-auto my-2 py-1 px-6 mx-3 text-gray-500 rounded-lg bg-white drop-shadow-lg hover:bg-blue-950 hover:text-white hover:font-medium"
          }
          end
          state={{ user: user }}
        >
          <div className='pe-3'>
            <FaUserAlt />
          </div>
          <span className="flex-1 ml-3 whitespace-nowrap">User Details</span>
        </NavLink>

        <NavLink
          to="/view-client/profile"
          className={({ isActive, isPending }) =>
            isActive ? "flex flex-row items-center w-full md:w-auto my-2 bg-blue-950 drop-shadow-lg px-6 mx-3 py-1 rounded-md text-white font-normal"
              :
              "flex flex-row items-center w-full md:w-auto my-2 py-1 px-6 mx-3 text-gray-500 rounded-lg bg-white drop-shadow-lg hover:bg-blue-950 hover:text-white hover:font-medium"
          }
          state={{ user: user }}
        >
          <div className='pe-3'>
            <FaUserAlt />
          </div>
          <span >
            Heaalth Profile
          </span>
        </NavLink>
        <NavLink
          to="/view-client/requests"
          className={({ isActive, isPending }) =>
            isActive ? "flex flex-row items-center w-full md:w-auto my-2 bg-blue-950 drop-shadow-lg px-6 mx-3 py-1 rounded-md text-white font-normal"
              :
              "flex flex-row items-center w-full md:w-auto my-2 py-1 px-6 mx-3 text-gray-500 rounded-lg bg-white drop-shadow-lg hover:bg-blue-950 hover:text-white hover:font-medium"
          }
          state={{ user: user }}
        >
          <div className='pe-3'>
            <FaUserAlt />
          </div>
          <span >
            Support Requests
          </span>
        </NavLink>
        <NavLink
          to="/view-client/connect"
          className={({ isActive, isPending }) =>
            isActive ? "flex flex-row items-center w-full md:w-auto my-2 bg-blue-950 drop-shadow-lg px-6 mx-3 py-1 rounded-md text-white font-normal"
              :
              "flex flex-row items-center w-full md:w-auto my-2 py-1 px-6 mx-3 text-gray-500 rounded-lg bg-white drop-shadow-lg hover:bg-blue-950 hover:text-white hover:font-medium"
          }
          state={{ user: user }}
        >
          <div className='pe-3'>
            <FaUserAlt />
          </div>
          <span>
            Connect
          </span>
        </NavLink>
        <NavLink
          to="/view-client/insight"
          className={({ isActive, isPending }) =>
            isActive ? "flex flex-row items-center w-full md:w-auto my-2 bg-blue-950 drop-shadow-lg px-6 mx-3 py-1 rounded-md text-white font-normal"
              :
              "flex flex-row items-center w-full md:w-auto my-2 py-1 px-6 mx-3 text-gray-500 rounded-lg bg-white drop-shadow-lg hover:bg-blue-950 hover:text-white hover:font-medium"
          }
          state={{ user: user }}
        >
          <div className='pe-3'>
            <FaUserAlt />
          </div>
          <span >
            Insights
          </span>
        </NavLink>
        <NavLink
          to="/view-client/plan"
          className={({ isActive, isPending }) =>
            isActive ? "flex flex-row items-center w-full md:w-auto my-2 bg-blue-950 drop-shadow-lg px-6 mx-3 py-1 rounded-md text-white font-normal"
              :
              "flex flex-row items-center w-full md:w-auto my-2 py-1 px-6 mx-3 text-gray-500 rounded-lg bg-white drop-shadow-lg hover:bg-blue-950 hover:text-white hover:font-medium"
          }
          state={{ user: user }}
        >
          <div className='pe-3'>
            <FaUserAlt />
          </div>
          <span>
            Wellness Plan
          </span>
        </NavLink>
        <NavLink
          to="/view-client/share"
          className={({ isActive, isPending }) =>
            isActive ? "flex flex-row items-center w-full md:w-auto my-2 bg-blue-950 drop-shadow-lg px-6 mx-3 py-1 rounded-md text-white font-normal"
              :
              "flex flex-row items-center w-full md:w-auto my-2 py-1 px-6 mx-3 text-gray-500 rounded-lg bg-white drop-shadow-lg hover:bg-blue-950 hover:text-white hover:font-medium"
          }
          state={{ user: user }}
        >
          <div className='pe-3'>
            <FaUserAlt />
          </div>
          <span>
            Share
          </span>
        </NavLink>
      </div>
    </>
  )
}
