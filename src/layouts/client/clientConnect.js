import React from 'react'
import { BsThreeDots } from 'react-icons/bs'
import { Link } from 'react-router-dom'

export default function ClientConnect() {
    return (
        <div className='px-9 lg:ml-64 max-w-screen-2xl mb-9'>
            <div className='grid grid-cols-1 xl:grid-cols-3 gap-4 lg:gap-8'>
                <div className='bg-white border border-gray-200 shadow-lg shadow-gray-500/70 rounded-md'>
                    <div className='py-2'>
                        <div className='px-8 font-bold text-lg py-2'>
                            <span>Open Support Requests</span>
                        </div>
                        <hr />
                        <div className='flex justify-center items-center'>
                            <div className='flex justify-center font-semibold my-3 items-center rounded-full border border-blue-950 w-28 h-28'>
                                <span>2H</span>
                            </div>
                        </div>
                    </div>
                </div>
                <div className='bg-white border border-gray-200 shadow-lg shadow-gray-500/70 rounded-md col-span-2 me-4 '>
                    <div className='py-2'>
                        <div className='font-bold text-lg px-8 py-2'>
                            <span>Appointment History</span>
                        </div>
                        <div className='relative overflow-x-auto shadow-md sm:rounded-lg'>
                            <table className="w-full text-sm text-left border border-gray-100 text-gray-500 ">
                                <thead className="text-xs text-gray-700 uppercase">
                                    <tr>
                                        <th scope="col" className="px-6 py-3">
                                            Session ID
                                        </th>
                                        <th scope="col" className="px-6 py-3">
                                            Date
                                        </th>
                                        <th scope="col" className="px-6 py-3">
                                            Provider
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
                                    <tr className="bg-white border-b dark:bg-gray-800 dark:border-gray-700">
                                        <th scope="row" className="px-6 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white">
                                            1
                                        </th>
                                        <td className="px-6 py-4">
                                            1/1/2023 9:00 AM
                                        </td>
                                        <td className="px-6 py-4">
                                            John Doe
                                        </td>
                                        <td className="px-6 py-4">
                                            UP Coming
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
                <div className='bg-white border border-gray-200 shadow-lg shadow-gray-500/70 rounded-md col-span-2 me-4'>
                    <div className='py-2'>
                        <div className='font-bold text-lg px-8 py-2'>
                            <span>Change Log</span>
                        </div>
                        <div className='relative overflow-x-auto shadow-md sm:rounded-lg' >
                            <table className="w-full text-sm text-left border border-gray-100 text-gray-500 ">
                                <thead className="text-xs text-gray-700 uppercase border-b">
                                    <tr>
                                        <th scope="col" className="px-6 py-3">
                                            Date
                                        </th>
                                        <th scope="col" className="px-6 py-3">
                                            Team Member
                                        </th>
                                        <th scope="col" className="px-6 py-3">
                                            Old Value
                                        </th>
                                        <th scope="col" className="px-6 py-3">
                                            New Value
                                        </th>
                                        <th scope="col" className="px-6 py-3">
                                            Reason
                                        </th>
                                    </tr>
                                </thead>
                                <tbody>
                                    <tr className="bg-white border-b">
                                        <th scope="row" className="px-6 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white">
                                            1/1/2023
                                        </th>
                                        <td className="px-6 py-4">
                                            John Doe
                                        </td>
                                        <td className="px-6 py-4">
                                            1h 30m
                                        </td>
                                        <td className="px-6 py-4">
                                            2h
                                        </td>
                                        <td className="px-6 py-4">
                                            Administrative
                                        </td>
                                    </tr>
                                </tbody>
                            </table>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}
