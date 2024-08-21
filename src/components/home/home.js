import React, { useEffect, useState } from 'react';
import Header from '../header/header';
import CustomButton from '../../utility/customButton';
import { BsFillPersonFill } from 'react-icons/bs';
import { BiSupport } from 'react-icons/bi';
import { Link } from 'react-router-dom';
import { getAllFaqs, getAllUsers } from '../../config/config';
export default function Home() {
  const [appointments, setAppointments] = useState([]);
  const [userCount, setUserCount] = useState(0);
  const [faqCount, setFaqCount] = useState(0);
  const [render, setRender] = useState(0);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const users = await getAllUsers();
        const faqs = await getAllFaqs();
        setUserCount(users.length);
        setFaqCount(faqs.length);
      } catch (error) {
        console.error("Error fetching data: ", error);
      }
    };

    fetchData();
  }, [render]);

  return (
    <>
      <Header header={'home'} />
      <div className='px-4 sm:px-9 lg:ml-64 ' style={{ marginTop: '-180px' }}>
        <div className='flex flex-row flex-wrap'>
          <div className="block py-3 px-6 bg-white border border-gray-200 w-full sm:max-w-xs sm:mr-6 mb-2 rounded-lg shadow hover:bg-gray-100">
            <h5 className="mb-1 font-medium text-sm text-gray-500 ">Total Users</h5>
            <div className='flex flex-row justify-between'>
              <div>
                <h5 className='mb-1 font-medium text-lg'>{userCount}</h5>
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
            <h5 className="mb-1 font-medium text-sm text-gray-500 ">FAQs</h5>
            <div className='flex flex-row justify-between'>
              <div>
                <h5 className='mb-1 font-medium text-lg'>{faqCount}</h5>
                <Link to='/faq'>
                  <CustomButton content={'View All'} />
                </Link>
              </div>
              <div className='p-3 rounded-full bg-orange-200'>
                <BiSupport className='text-4xl font-normal text-orange-900' />
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
                  <th scope="col" className="px-6 py-3">Name</th>
                  <th scope="col" className="px-6 py-3">Age group</th>
                  <th scope="col" className="px-6 py-3">Occupation</th>
                  <th scope="col" className="px-6 py-3">Current Income</th>
                  <th scope="col" className="px-6 py-3">Desired occupation</th>
                  <th scope="col" className="px-6 py-3">Desired income</th>
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
