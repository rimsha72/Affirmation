import React from 'react'

export default function VideoInto() {
    return (
        <div className="bg-white border border-gray-200 rounded-lg drop-shadow-lg w-auto ml-0 lg:ml-9 mb-3 ">
            <div className='px-8 py-4'>
                <div className='flex flex-row justify-between items-center'>
                    <h2 className='font-bold text-sm lg:text-xl'>Provider Information</h2>
                    <button className='rounded-lg text-white text-sm sm:text-medium font-medium bg-blue-950 px-4 sm:px-8 py-1'>Upload</button>
                </div>
            </div>
            <hr />
            <div className='px-8 py-4'>
                <div className='flex justify-center'>
                    <img src='images/Rectangle.png' alt='...' />
                </div>
            </div>
        </div>
    )
}
