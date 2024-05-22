import React from 'react'

export default function CustomButton({ content }) {
  return (
    <button className='px-4 sm:px-5 py-1 bg-blue-950 text-sm rounded-md text-white'>{content}</button>
  )
}
