import React from 'react'

export default function VideoCallHeader() {
  return (
    <div className='px-8 py-4 bg-white max-w-screen-2xl'>
      <div className='flex justify-between items-center'>
        <div>
          <h1 className='font-medium text-2xl'>Jane Doe</h1>
          <p className='font-medium text-sm text-gray-500'>June 12th, 2022 | 11:00 AM</p>
        </div>
        {/* <div className='flex justify-start items-center rounded-full bg-[#F6F6F6] space-x-2 p-3 max-w-xs w-full'>
          <img src='images/Ellipse 253.png' className='w-11 h-11 rounded-full object-cover' />
          <h1>Adam Joseph</h1>
        </div> */}
      </div>
    </div>
  )
}
