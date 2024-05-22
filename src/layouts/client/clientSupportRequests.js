import React from 'react'
import { BsThreeDots } from 'react-icons/bs'
import { Link } from 'react-router-dom'

export default function ClientSupportRequests() {
    return (
        <div className='px-9 lg:ml-64 max-w-screen-2xl mb-9'>
            <div className=" overflow-x-auto">
                <div className='shadow-md bg-white rounded-lg mb-6' >
                    <table className="w-full text-sm text-left border border-gray-100 rounded-lg text-gray-500 ">
                        <caption className="p-5 text-lg font-semibold text-left text-gray-900 ">
                            Open Requests
                        </caption>
                        <thead className="text-xs text-gray-700 uppercase">
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
                                    Close Request
                                </th>
                                <th scope="col" className="px-6 py-3">
                                    Action
                                </th>
                            </tr>
                        </thead>
                        <tbody>
                            <tr className=" border-b dark:bg-gray-800 dark:border-gray-700">
                                <th scope="row" className="px-6 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white">
                                    1
                                </th>
                                <td className="px-6 py-4">
                                    1/1/2023 9:00 AM
                                </td>
                                <td className="px-6 py-4">
                                    Insurance coverage Assistance
                                </td>
                                <td className="px-6 py-4">
                                    Yes
                                </td>
                                <td className="px-6 py-4">
                                    <Link to='/view-client'>
                                        <BsThreeDots className='bg-gray-300 w-8 text-xl rounded-md' />
                                    </Link>
                                </td>
                            </tr>
                            <tr className=" border-b dark:bg-gray-800 dark:border-gray-700">
                                <th scope="row" className="px-6 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white">
                                    1
                                </th>
                                <td className="px-6 py-4">
                                    1/1/2023 9:00 AM
                                </td>
                                <td className="px-6 py-4">
                                    Insurance coverage Assistance
                                </td>
                                <td className="px-6 py-4">
                                    Yes
                                </td>
                                <td className="px-6 py-4">
                                    <Link to='/view-client'>
                                        <BsThreeDots className='bg-gray-300 w-8 text-xl rounded-md' />
                                    </Link>
                                </td>
                            </tr>
                        </tbody>
                    </table>
                </div>
                <div className='shadow-lg bg-white rounded-md' >
                    <table className="w-full text-sm text-left border border-gray-100 text-gray-500 ">
                        <caption className="p-5 text-lg font-semibold text-left text-gray-900 ">
                            Closed Requests
                        </caption>
                        <thead className="text-xs text-gray-700 uppercase">
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
                                    Open Request
                                </th>
                                <th scope="col" className="px-6 py-3">
                                    Action
                                </th>
                            </tr>
                        </thead>
                        <tbody>
                            <tr className="border-b">
                                <th scope="row" className="px-6 py-4 font-medium text-gray-900 whitespace-nowrap">
                                    1
                                </th>
                                <td className="px-6 py-4">
                                    1/1/2023 9:00 AM
                                </td>
                                <td className="px-6 py-4">
                                    Insurance coverage Assistance
                                </td>
                                <td className="px-6 py-4">
                                    Yes
                                </td>
                                <td className="px-6 py-4">
                                    <Link to='/view-client'>
                                        <BsThreeDots className='bg-gray-300 w-8 text-xl rounded-md' />
                                    </Link>
                                </td>
                            </tr>
                        </tbody>
                    </table>
                </div>
            </div>
        </div>
    )
}
