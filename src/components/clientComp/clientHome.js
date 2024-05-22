import React from 'react';
import ClientHeader from '../../layouts/client/clientHeader';
import { BsThreeDots } from 'react-icons/bs';
import { Link } from 'react-router-dom';

export default function ClientHome({ data, loader }) {
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
  return (
    <>
      <div className='lg:ml-64' style={{ marginTop: '-180px' }}>
        <ClientHeader />
        <div className="relative bg-white rounded-md overflow-x-auto mr-4 max-w-screen-2xl" style={{ marginTop: 25 }}>
          <table className="w-full text-sm text-left text-gray-500 dark:text-gray-400">
            <caption className="p-5 text-lg font-bold text-left text-gray-900 dark:text-white dark:bg-gray-800">

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
              {dummyAppointments.map((appointment) => (
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
    </>
  )
}
