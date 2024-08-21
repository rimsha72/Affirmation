import React, { useEffect, useState } from 'react';
import ClientHeader from '../../layouts/client/clientHeader';
import { BsThreeDots } from 'react-icons/bs';
import { Link } from 'react-router-dom';
import { getAllUsers } from '../../config/config';

export default function ClientHome({ data, loader }) {
  const [users, setUsers] = useState([]);
  const [loading, setLoading] = useState(true);

  // Fetch users when the component mounts
  useEffect(() => {
    const fetchUsers = async () => {
      const fetchedUsers = await getAllUsers();  // Fetch users using getAllUsers function
      setUsers(fetchedUsers);
      setLoading(false);
    };

    fetchUsers();
  }, []);

  if (loading) {
    return <div>Loading...</div>;
  }
  console.log(users)
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
              {users.map((user) => (
                <tr key={user.id}>
                  <td className="px-6 py-4">{user.firstName} {user.lastName}</td>
                  <td className="px-6 py-4">{user.ageGroup}</td>
                  <td className="px-6 py-4">{user.occupation}</td>
                  <td className="px-6 py-4">{user.currentIncome}</td>
                  <td className="px-6 py-4">{user.desiredOccupation}</td>
                  <td className="px-6 py-4">{user.desiredIncome}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </>
  )
}
