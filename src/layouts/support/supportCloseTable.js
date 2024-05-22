import React from 'react'
import { BsThreeDots } from 'react-icons/bs'
import { Link } from 'react-router-dom'

export default function SupportCloseTable({ requestName }) {
    console.log(requestName)
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
                                Open Request
                            </th>
                            <th scope="col" className="px-6 py-3">
                                Action
                            </th>
                        </tr>
                    </thead>
                    <tbody>
                        <tr className=" border-b text-gray-900 whitespace-nowrap ">
                            <th scope="row" className="px-6 py-4">
                                1
                            </th>
                            <td className="px-6 py-4">
                                1/1/2023
                            </td>
                            <td className="px-6 py-4">
                                Insurance Coverage Assistance
                            </td>
                            <td className="px-6 py-4">
                                John Doe
                            </td>
                            <td className="px-6 py-4">
                                Yes
                            </td>
                            <td className="px-6 py-4">
                                <Link to='/view-support'>
                                    <BsThreeDots className='bg-gray-300 w-8 text-xl rounded-md' />
                                </Link>
                            </td>
                        </tr>
                        <tr className=" border-b text-gray-900 whitespace-nowrap ">
                            <th scope="row" className="px-6 py-4">
                                2
                            </th>
                            <td className="px-6 py-4">
                                1/1/2023
                            </td>
                            <td className="px-6 py-4">
                                Insurance Coverage Assistance
                            </td>
                            <td className="px-6 py-4">
                                John Doe
                            </td>
                            <td className="px-6 py-4">
                                -
                            </td>
                            <td className="px-6 py-4">
                                <Link to='/view-support-close'>
                                    <BsThreeDots className='bg-gray-300 w-8 text-xl rounded-md' />
                                </Link>
                            </td>
                        </tr>
                        <tr className=" border-b text-gray-900 whitespace-nowrap ">
                            <th scope="row" className="px-6 py-4">
                                3
                            </th>
                            <td className="px-6 py-4">
                                1/1/2023
                            </td>
                            <td className="px-6 py-4">
                                Insurance Coverage Assistance
                            </td>
                            <td className="px-6 py-4">
                                John Doe
                            </td>
                            <td className="px-6 py-4">
                                Yes
                            </td>
                            <td className="px-6 py-4">
                                <Link>
                                    <BsThreeDots className='bg-gray-300 w-8 text-xl rounded-md' />
                                </Link>
                            </td>
                        </tr>
                        <tr className=" border-b text-gray-900 whitespace-nowrap ">
                            <th scope="row" className="px-6 py-4">
                                4
                            </th>
                            <td className="px-6 py-4">
                                1/1/2023
                            </td>
                            <td className="px-6 py-4">
                                Insurance Coverage Assistance
                            </td>
                            <td className="px-6 py-4">
                                John Doe
                            </td>
                            <td className="px-6 py-4">
                                -
                            </td>
                            <td className="px-6 py-4">
                                <Link>
                                    <BsThreeDots className='bg-gray-300 w-8 text-xl rounded-md' />
                                </Link>
                            </td>
                        </tr>
                        <tr className=" border-b text-gray-900 whitespace-nowrap ">
                            <th scope="row" className="px-6 py-4">
                                5
                            </th>
                            <td className="px-6 py-4">
                                1/1/2023
                            </td>
                            <td className="px-6 py-4">
                                Insurance Coverage Assistance
                            </td>
                            <td className="px-6 py-4">
                                John Doe
                            </td>
                            <td className="px-6 py-4">
                                Yes
                            </td>
                            <td className="px-6 py-4">
                                <Link>
                                    <BsThreeDots className='bg-gray-300 w-8 text-xl rounded-md' />
                                </Link>
                            </td>
                        </tr>
                    </tbody>
                </table>
            </div>
        </>
    )
}
