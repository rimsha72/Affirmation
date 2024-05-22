import React, { useEffect, useState } from 'react';
import Header from '../header/header';
import CustomButton from '../../utility/customButton';
import { BsFillPersonFill } from 'react-icons/bs';
import { IoCalendarOutline } from 'react-icons/io5';
import { BiSupport } from 'react-icons/bi';
import { Link } from 'react-router-dom';
import { MdOutlineWidgets } from "react-icons/md";
export default function Home() {
  const [user, setUser] = useState([]);
  const [support, setSupport] = useState([]);
  const [appointments, setAppointments] = useState([]);
  const [render, setRender] = useState(0);

  useEffect(() => {

    const dummyAppointments = [
      {
        id: 1,
        appointmentTime: '10:00 AM',
        user: {
          firstName: 'John',
          lastName: 'Doe',
          ageGroup: '30-40',
          occupation: 'Engineer',
          currentIncome: '$70,000',
          desiredOccupation: 'Manager',
          desiredIncome: '$90,000'
        }
      },
      {
        id: 2,
        appointmentTime: '11:00 AM',
        user: {
          firstName: 'Jane',
          lastName: 'Smith',
          ageGroup: '25-35',
          occupation: 'Teacher',
          currentIncome: '$50,000',
          desiredOccupation: 'Principal',
          desiredIncome: '$80,000'
        }
      },
      {
        id: 3,
        appointmentTime: '12:00 PM',
        user: {
          firstName: 'Bob',
          lastName: 'Johnson',
          ageGroup: '40-50',
          occupation: 'Developer',
          currentIncome: '$80,000',
          desiredOccupation: 'Tech Lead',
          desiredIncome: '$110,000'
        },
        
      },
      {
        id: 4,
        appointmentTime: '10:00 AM',
        user: {
          firstName: 'John',
          lastName: 'Doe',
          ageGroup: '30-40',
          occupation: 'Engineer',
          currentIncome: '$70,000',
          desiredOccupation: 'Manager',
          desiredIncome: '$90,000'
        }
      },
      {
        id: 5,
        appointmentTime: '11:00 AM',
        user: {
          firstName: 'Jane',
          lastName: 'Smith',
          ageGroup: '20-25',
          occupation: 'Teacher',
          currentIncome: '$50,000',
          desiredOccupation: 'Principal',
          desiredIncome: '$80,000'
        }
      },
      {
        id: 6,
        appointmentTime: '12:00 PM',
        user: {
          firstName: 'Bob',
          lastName: 'Johnson',
          ageGroup: '40-50',
          occupation: 'Developer',
          currentIncome: '$80,000',
          desiredOccupation: 'Tech Lead',
          desiredIncome: '$110,000'
        },
        
      }
    ];

    setAppointments(dummyAppointments);
  }, [render]);

  return (
    <>
      <Header header={'home'} />
      <div className='px-4 sm:px-9 lg:ml-64 ' style={{ marginTop: '-180px' }}>
        <div className='flex flex-row flex-wrap'>
          <div className="block py-3 px-6 bg-white border border-gray-200 w-full sm:max-w-xs sm:mr-6 mb-2 rounded-lg shadow hover:bg-gray-100">
            <h5 className="mb-1 font-medium text-sm text-gray-500 ">Total Users</h5>
            <div className='flex flex-row justify-between'>
              <div className=''>
                <h5 className='mb-1 font-medium text-lg '>12</h5>
                <Link to='/client'>
                  <CustomButton content={'View All'} />
                </Link>
              </div>
              <div className='p-3 rounded-full bg-purple-300'>
                <BsFillPersonFill className='text-4xl text-purple-900' />
              </div>
            </div>
          </div>
          <div className="block py-3 px-6 bg-white border border-gray-200 w-full sm:max-w-xs sm:mr-6 mb-2 rounded-lg shadow hover:bg-gray-100">
            <h5 className="mb-1 font-medium text-sm text-gray-500 ">Open Support Requests</h5>
            <div className='flex flex-row justify-between'>
              <div>
                <h5 className='mb-1 font-medium text-lg'>34 </h5>
                <Link to='/support'>
                  <CustomButton content={'View All'} />
                </Link>
              </div>
              <div className='p-3 rounded-full bg-orange-200'>
                <BiSupport className='text-4xl font-normal text-orange-900' />
              </div>
            </div>
          </div>
          <div className="block py-3 px-6 bg-white border border-gray-200 w-full sm:max-w-xs sm:mr-6 mb-2 rounded-lg shadow hover:bg-gray-100">
            <h5 className="mb-1 font-medium text-sm text-gray-500 ">Total widgets </h5>
            <div className='flex flex-row justify-between'>
              <div>
                <h5 className='mb-1 font-medium text-lg'>7</h5>
                <Link to='/schedule'>
                  <CustomButton content={'View All'} />
                </Link>
              </div>
              <div className='p-3 rounded-full bg-teal-400'>
                <MdOutlineWidgets className='text-4xl text-teal-900' />
              </div>
            </div>
          </div>
        </div>
        <div className='flex flex-row flex-wrap' style={{ marginTop: '25px' }}>
          <div className="relative bg-white rounded-lg overflow-x-auto shadow-md sm:rounded-lg w-full max-w-5xl">
            <table className="w-full text-sm text-left text-gray-500 dark:text-gray-400">
              <caption className="p-5 text-lg font-bold text-left text-gray-900 dark:text-white dark:bg-gray-800">
                Today's Users
              </caption>
              <thead className="text-xs text-gray-700 uppercase">
                <tr>
                  <th scope="col" className="px-6 py-3">
                    Name
                  </th>
                  <th scope="col" className="px-6 py-3 ">
                    Age group
                  </th>
                  <th scope="col" className="px-6 py-3 ">
                    Occupation
                  </th>
                  <th scope="col" className="px-6 py-3 ">
                    Current Income
                  </th>
                  <th scope="col" className="px-6 py-3 ">
                    Desired occupation
                  </th>
                  <th scope="col" className="px-6 py-3 ">
                    Desired income
                  </th>
                </tr>
              </thead>
              <tbody className="bg-white divide-y divide-gray-200">
                {appointments.map((appointment) => (
                  <tr key={appointment.id}>
                    <td className="px-6 py-4">
                      {appointment.user.firstName} {appointment.user.lastName}
                    </td>
                    <td className="px-6 py-4">
                      {appointment.user.ageGroup}
                    </td>
                    <td className="px-6 py-4">
                      {appointment.user.occupation}
                    </td>
                    <td className="px-6 py-4">
                      {appointment.user.currentIncome}
                    </td>
                    <td className="px-6 py-4">
                      {appointment.user.desiredOccupation}
                    </td>
                    <td className="px-6 py-4">
                      {appointment.user.desiredIncome}
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </div>
    </>
  );
}
