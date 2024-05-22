import React, { useEffect, useState } from 'react'
import { FaCrown } from 'react-icons/fa'
import { useLoaderData, useLocation } from 'react-router-dom'
import Config, { baseUrl } from '../../config/config';
import axios from 'axios';

export default function ClientUserDetails() {
    const [user, setUser] = useState([]);
    const config = Config();
    let { state } = useLocation();

    const fetchUser = async () => {
        await axios.get(`${baseUrl}specialist/user/${state.id}`, config)
            .then(res => {
                setUser(res.data.data.users)
            })
            .catch(err => {
                console.log(err)
            })
    }

    useEffect(() => {
        fetchUser();
    }, [])
    return (
        <div className='px-9 lg:ml-64 max-w-screen-2xl mb-9'>
            <div className='grid grid-cols-1 xl:grid-cols-3 gap-4 '>
                <div className='grid grid-cols-1 md:grid-cols-2 gap-4 col-span-2'>
                    <div className='border border-gray-200 shadow-lg shadow-gray-500/70 rounded-md bg-white'>
                        <div className='px-8 py-2'>
                            <div className='font-bold text-lg py-2'>
                                <span>User Details</span>
                            </div>
                            <hr />
                            <div className='flex flex-row justify-between'>
                                <span className='font-semibold text-gray-400'>Height</span>
                                <span className='text-gray-400'>{user[0]?.height}</span>
                            </div>
                            <div className='flex flex-row justify-between'>
                                <span className='font-semibold text-gray-400'>Weight</span>
                                <span className='text-gray-400'>{user[0]?.weight} lbs</span>
                            </div>
                            <div className='flex flex-row justify-between'>
                                <span className='font-semibold text-gray-400'>Drink Alcohol</span>
                                <span className='text-gray-400'>{user[0]?.alcoholConsumption}</span>
                            </div>
                            <div className='flex flex-row justify-between'>
                                <span className='font-semibold text-gray-400'>Smoke Tobacco</span>
                                <span className='text-gray-400'>{user[0]?.tobaccoConsumption}</span>
                            </div>
                        </div>
                    </div>
                    <div className='border border-gray-200 shadow-lg shadow-gray-500/70 rounded-md bg-white'>
                        <div className='px-8 py-2'>
                            <div className='font-bold text-lg py-2'>
                                <span>Membership Info</span>
                            </div>
                            <hr className='mb-1' />
                            <div className='flex flex-row justify-between items-center text-white py-8 px-6 my-3 bg-blue-950 rounded-lg'>
                                <div>
                                    <p>{user[0]?.membershipPlan}</p>
                                    <span className='text-gray-200 text-sm'>Renewal Date: March 1, 2024</span>
                                </div>
                                <div>
                                    <FaCrown />
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className='border border-gray-200 shadow-lg shadow-gray-500/70 rounded-md bg-white'>
                        <div className='px-8 py-2'>
                            <div className='font-bold text-lg py-2'>
                                <span>Open Support Requests</span>
                            </div>
                            <hr />
                            <div className='flex justify-center items-center'>
                                <div className='flex justify-center text-white text-5xl my-3 items-center rounded-full bg-blue-950 w-28 h-28'>
                                    3
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className='border border-gray-200 shadow-lg shadow-gray-500/70 rounded-md bg-white'>
                        <div className='px-8 py-2'>
                            <div className='font-bold text-lg py-2'>
                                <span>Upcoming Appointment</span>
                            </div>
                            <hr />
                            <div className='flex py-4 bg-gray-100 my-3 rounded-lg'>
                                <span className='px-3'>April 15, 2023 9 AM</span>
                            </div>
                        </div>
                    </div>
                </div>
                <div className='border border-gray-200 shadow-lg shadow-gray-500/70 rounded-md bg-white'>
                    <div className='px-4 xl:px-8 py-2'>
                        <div className='font-bold text-lg py-2'>
                            <span>Health Status</span>
                        </div>
                        <hr />
                        <div className='py-4'>
                            <div className='shadow-md rounded px-3 py-1 mb-4'>
                                <span className='font-medium text-gray-500'>How do you feel about your health today?</span>
                            </div>
                            <div className='bg-gray-100 py-3 px-3 rounded mb-3'>
                                <span className=''>{user[0]?.todayHealthCondition}</span>
                            </div>
                            <div className='shadow-md rounded px-3 py-1 mb-4'>
                                <span className='font-medium text-gray-500'>What's your main motivation for focusing on your health?</span>
                            </div>
                            <div className='bg-gray-100 py-3 px-3 rounded mb-3'>
                                <span className=''>{user[0]?.healthMotivation}</span>
                            </div>
                            <div className='shadow-md rounded px-3 py-1 mb-4'>
                                <span className='font-medium text-gray-500'>3 Wellness Goals</span>
                            </div>
                            <div className='bg-gray-100 py-3 px-3 rounded mb-3'>
                                <ul className=' list-disc list-inside'>
                                    {user[0]?.wellnessGoals.map((goal, index) => {
                                        return (
                                            <li key={index}>{goal}</li>
                                        )
                                    })}
                                </ul>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}
