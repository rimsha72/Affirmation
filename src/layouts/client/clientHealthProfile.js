import React from 'react'
import { useLocation } from 'react-router-dom'
// import CustomButton from '../utility/customButton'

export default function ClientHealthProfile() {
    const { state } = useLocation();
    console.log(state.user)
    return (
        <div className='px-9 lg:ml-64 max-w-screen-2xl mb-9 grid grid-cols-1 md:grid-cols-2 gap-10'>
            <div className='border border-gray-100 shadow-lg shadow-gray-500/70 rounded-md bg-white'>
                <div className='px-8 py-2'>
                    <div className='flex flex-row justify-between items-center'>
                        <div className='font-bold text-lg py-2'>
                            <span>Insurance & Benefits</span>
                        </div>
                        <div>
                            <button className='px-4 py-1 rounded-lg bg-blue-950 text-white text-sm'>Update</button>
                        </div>
                    </div>
                    <hr className='my-2' />
                    <div className='flex flex-row justify-between my-2'>
                        <span className='font-medium text-gray-400'>Health Insurance Plan</span>
                        <span className='text-gray-400'>Amerihealth Caritas DC</span>
                    </div>
                    <div className='flex flex-row justify-between my-2'>
                        <span className='font-medium text-gray-400'>Member ID</span>
                        <span className='text-gray-400'>1234567</span>
                    </div>
                    <div className='flex flex-row justify-between my-2'>
                        <span className='font-medium text-gray-400'>Group #</span>
                        <span className='text-gray-400'>1234567</span>
                    </div>
                    <div className='flex flex-row justify-between my-2'>
                        <span className='font-medium text-gray-400'>Effective Date</span>
                        <span className='text-gray-400'>1/1/2023</span>
                    </div>
                </div>
            </div>
            <div className='border border-gray-100 shadow-lg shadow-gray-500/70 rounded-md bg-white'>
                <div className='px-8 py-2'>
                    <div className='flex flex-row justify-between items-center'>
                        <div className='font-bold text-lg py-2'>
                            <span>Wellness Team</span>
                        </div>
                        <div>
                            <button className='px-4 py-1 rounded-lg bg-blue-950 text-white text-sm'>Add</button>
                        </div>
                    </div>
                    <hr className='my-2' />
                    <div className='flex justify-between items-center px-4 py-4 bg-gray-100 my-3 rounded-lg'>
                        <div>
                            <p className='text-sm'>Dr. John Doe</p>
                            <span className='text-xs'>primary Care</span>
                        </div>
                        <div>
                            <button className='px-4 py-1 rounded-lg bg-blue-950 text-white text-sm'>Action</button>
                        </div>
                    </div>
                    <div className='flex justify-between items-center px-4 py-4 bg-gray-100 my-3 rounded-lg'>
                        <div>
                            <p className='text-sm'>Dr. John Doe</p>
                            <span className='text-xs'>Therapist</span>
                        </div>
                        <div>
                            <button className='px-4 py-1 rounded-lg bg-blue-950 text-white text-sm'>Action</button>
                        </div>
                    </div>
                </div>
            </div>
            <div className='border border-gray-100 shadow-lg shadow-gray-500/70 rounded-md bg-white'>
                <div className='px-8 py-2'>
                    <div className='flex flex-row justify-between items-center'>
                        <div className='font-bold text-lg py-2'>
                            <span>Medications</span>
                        </div>
                        <div>
                            <button className='px-4 py-1 rounded-lg bg-blue-950 text-white text-sm'>Add</button>
                        </div>
                    </div>
                    <hr className='my-2' />
                    <div className='flex justify-between items-center px-4 py-4 bg-gray-100 my-3 rounded-lg'>
                        <div>
                            <p className='text-sm'>Tylenol</p>
                            <span className='text-xs'>25 mg</span>
                        </div>
                        <div>
                            <button className='px-4 py-1 rounded-lg bg-blue-950 text-white text-sm'>Action</button>
                        </div>
                    </div>
                    <div className='flex justify-between items-center px-4 py-4 bg-gray-100 my-3 rounded-lg'>
                        <div>
                            <p className='text-sm'>Tylenol</p>
                            <span className='text-xs'>25mg</span>
                        </div>
                        <div>
                            <button className='px-4 py-1 rounded-lg bg-blue-950 text-white text-sm'>Action</button>
                        </div>
                    </div>
                </div>
            </div>
            <div className='border border-gray-100 shadow-lg shadow-gray-500/70 rounded-md bg-white'>
                <div className='px-8 py-2'>
                    <div className='flex flex-row justify-between items-center'>
                        <div className='font-bold text-lg py-2'>
                            <span>Allergies</span>
                        </div>
                        <div>
                            <button className='px-4 py-1 rounded-lg bg-blue-950 text-white text-sm'>Add</button>
                        </div>
                    </div>
                    <hr className='my-2' />
                    <div className='flex justify-between items-center px-4 py-4 bg-gray-100 my-3 rounded-lg'>
                        <div>
                            <p className='text-sm'>Pollen</p>
                            <span className='text-xs'>Severe</span>
                        </div>
                        <div>
                            <button className='px-4 py-1 rounded-lg bg-blue-950 text-white text-sm'>Action</button>
                        </div>
                    </div>
                    <div className='flex justify-between items-center px-4 py-4 bg-gray-100 my-3 rounded-lg'>
                        <div>
                            <p className='text-sm'>Pollen</p>
                            <span className='text-xs'>Moderate</span>
                        </div>
                        <div>
                            <button className='px-4 py-1 rounded-lg bg-blue-950 text-white text-sm'>Action</button>
                        </div>
                    </div>
                </div>
            </div>
            <div className='border border-gray-100 shadow-lg shadow-gray-500/70 rounded-md bg-white'>
                <div className='px-8 py-2'>
                    <div className='flex flex-row justify-between items-center'>
                        <div className='font-bold text-lg py-2'>
                            <span>Conditions</span>
                        </div>
                        <div>
                            <button className='px-4 py-1 rounded-lg bg-blue-950 text-white text-sm'>Add</button>
                        </div>
                    </div>
                    <hr className='my-2' />
                    <div className='flex justify-between items-center px-4 py-4 bg-gray-100 my-3 rounded-lg'>
                        <div>
                            <p className='text-sm'>Heart Disease</p>
                        </div>
                        <div>
                            <button className='px-4 py-1 rounded-lg bg-blue-950 text-white text-sm'>Action</button>
                        </div>
                    </div>
                    <div className='flex justify-between items-center px-4 py-4 bg-gray-100 my-3 rounded-lg'>
                        <div>
                            <p className='text-sm'>Heart Disease</p>
                        </div>
                        <div>
                            <button className='px-4 py-1 rounded-lg bg-blue-950 text-white text-sm'>Action</button>
                        </div>
                    </div>
                </div>
            </div>
            <div className='border border-gray-100 shadow-lg shadow-gray-500/70 rounded-md bg-white'>
                <div className='px-8 py-2'>
                    <div className='flex flex-row justify-between items-center'>
                        <div className='font-bold text-lg py-2'>
                            <span>Procedures</span>
                        </div>
                        <div>
                            <button className='px-4 py-1 rounded-lg bg-blue-950 text-white text-sm'>Add</button>
                        </div>
                    </div>
                    <hr className='my-2' />
                    <div className='flex justify-between items-center px-4 py-4 bg-gray-100 my-3 rounded-lg'>
                        <div>
                            <p className='text-sm'>Foot Sugery</p>
                            <span className='text-xs'>11/11/2022</span>
                        </div>
                        <div>
                            <button className='px-4 py-1 rounded-lg bg-blue-950 text-white text-sm'>Action</button>
                        </div>
                    </div>
                    <div className='flex justify-between items-center px-4 py-4 bg-gray-100 my-3 rounded-lg'>
                        <div>
                            <p className='text-sm'>Foot Sugery</p>
                            <span className='text-xs'>11/11/2022</span>
                        </div>
                        <div>
                            <button className='px-4 py-1 rounded-lg bg-blue-950 text-white text-sm'>Action</button>
                        </div>
                    </div>
                </div>
            </div>
            <div className='border border-gray-100 shadow-lg shadow-gray-500/70 rounded-md bg-white'>
                <div className='px-8 py-2'>
                    <div className='flex flex-row justify-between items-center'>
                        <div className='font-bold text-lg py-2'>
                            <span>Labs</span>
                        </div>
                        <div>
                            <button className='px-4 py-1 rounded-lg bg-blue-950 text-white text-sm'>Add</button>
                        </div>
                    </div>
                    <hr className='my-2' />
                    <div className='h-32'>

                    </div>
                </div>
            </div>
        </div>
    )
}
