import React from 'react'
import { BsThreeDots } from 'react-icons/bs'
import { Link } from 'react-router-dom'

export default function SupportTable({ requestName, support }) {
  console.log(support)
  return (
    <>
      <div className="relative bg-white rounded-lg overflow-x-auto max-w-screen-2xl" style={{ marginTop: 25 }}>
        <table className="w-full text-sm text-left text-gray-500">
          <thead className="text-sm text-gray-400 uppercase  border-b font-black">
            <tr>
              <th scope="col" className="px-6 py-3">
                Request ID
              </th>
              <th scope="col" className="px-6 py-3">
                Request Date
              </th>
              <th scope="col" className="px-6 py-3">
                Type
              </th>
              <th scope="col" className="px-6 py-3">
                User
              </th>
              <th scope="col" className="px-6 py-3">
                {requestName}
              </th>
              <th scope="col" className="px-6 py-3">
                Action
              </th>
            </tr>
          </thead>
          <tbody>
            {support.length > 0 ?
              support.map((supp, val) => {
                return (
                  <tr key={supp.id} className=" border-b text-gray-900 whitespace-nowrap ">
                    <th scope="row" className="px-6 py-4">
                      {val + 1}
                    </th>
                    <td className="px-6 py-4">
                      {new Date(supp.createdAt).toLocaleDateString()}
                    </td>
                    <td className="px-6 py-4">
                      {supp.requestType}
                    </td>
                    <td className="px-6 py-4">
                      {`${supp.user.firstName} ${supp.user.lastName}`}
                    </td>
                    <td className="px-6 py-4">
                      -
                    </td>
                    <td className="px-6 py-4">
                      <Link to='/view-support' state={{ id: supp._id }}>
                        <BsThreeDots className='bg-gray-300 w-8 text-xl rounded-md' />
                      </Link>
                    </td>
                  </tr>
                )
              })
              :
              <tr className=" border-b text-gray-900 whitespace-nowrap ">
                <th scope="row" className="px-6 py-4">
                  No Support Request Found!
                </th>
              </tr>
            }
          </tbody>
        </table>
      </div>
    </>
  )
}
