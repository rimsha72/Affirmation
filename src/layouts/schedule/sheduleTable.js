import React from 'react'
import { BsCheckLg, BsThreeDots } from 'react-icons/bs'
import { Link } from 'react-router-dom'
import ScheduleModal from './scheduleModal'

export default function ScheduleTable({ modalToggle, setModalToggle, appointments }) {
  return (
    <>
      <div className="relative bg-white rounded-md overflow-x-auto max-w-screen-2xl" style={{ marginTop: 25 }}>
        <h1 className='w-full bg-white border-b px-6 py-4 font-black text-gray-900 whitespace-nowrap text-xl'>Appointments</h1>
        <table className="w-full text-sm text-left text-gray-500">
          <thead className="text-sm text-gray-400 uppercase border-b font-black">
            <tr>
              <th scope="col" className="px-6 py-3">
                Session ID
              </th>
              <th scope="col" className="px-6 py-3">
                Date
              </th>
              <th scope="col" className="px-6 py-3">
                Client
              </th>
              <th scope="col" className="px-6 py-3">
                Status
              </th>
              <th scope="col" className="px-6 py-3">
                Action
              </th>
            </tr>
          </thead>
          <tbody>
            {appointments.length > 0 ?
              appointments.map((appo, val) => {
                const date = new Date(appo.appointmentDate).toLocaleDateString();
                return (
                  <tr className="border-b font-semibold text-gray-900 whitespace-nowrap ">
                    <th scope="row" className="px-6 py-4">
                      {val + 1}
                    </th>
                    <td className="px-6 py-4">
                      {date}
                    </td>
                    <td className="px-6 py-4">
                      {`${appo.user.firstName} ${appo.user.lastName}`}
                    </td>
                    <td className="px-6 py-4">
                      upcoming
                    </td>
                    <td className="px-6 py-4">
                      <Link onClick={e => setModalToggle(!modalToggle)}>
                        <BsThreeDots className='bg-gray-300 w-8 text-xl rounded-md' />
                      </Link>
                    </td>
                  </tr>
                )
              })
              :
              <tr className="border-b font-semibold text-gray-900 whitespace-nowrap ">
                <th scope="row" className="px-6 py-4">
                  You have no appointments!
                </th>
              </tr>
            }
          </tbody>
        </table>
      </div>
      <ScheduleModal modalToggle={modalToggle} setModalToggle={setModalToggle} />
    </>
  )
}
