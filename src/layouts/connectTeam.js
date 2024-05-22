import React from 'react'

export default function ConnectTeam() {
    return (
        <div className="bg-white border border-gray-200 rounded-lg drop-shadow-lg  ml-0 mb-3 w-full max-w-sm">
            <div className='px-8 py-4'>
                <div className='flex flex-row justify-between items-center'>
                    <h2 className='font-bold text-sm lg:text-xl'>Connect Team</h2>
                </div>
            </div>
            <hr />
            <div className='px-8 py-4'>
                <div className='shadow-lg rounded py-1 mb-4'>
                    <span className='px-4 font-medium text-gray-500 text-sm'>Heaalth Nav</span>
                </div>
                <div>
                    <div className='flex flex-row items-center bg-gray-100 py-2 rounded mb-3'>
                        <img className='ml-3 w-10 h-10 rounded-full shadow-lg object-cover' src='images/Ellipse 261.png' alt='...' />
                        <span className='ml-3'>Jerry Helfer</span>
                    </div>
                </div>
                <div className='shadow-lg rounded py-1 mb-4'>
                    <span className='px-4 font-medium text-gray-500 text-sm'>Health Coach</span>
                </div>
                <div>
                    <div className='flex flex-row items-center bg-gray-100 py-2 rounded mb-3'>
                        <img className='ml-3 w-10 h-10 rounded-full shadow-lg object-cover' src='images/Ellipse 261.png' alt='...' />
                        <span className='ml-3'>Jerry Helfer</span>
                    </div>
                </div>
            </div>
        </div>
    )
}
