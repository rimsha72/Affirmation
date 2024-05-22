import React from 'react'

export default function ViewSupportDetails({ support }) {
    return (
        <div className='w-full max-w-xl bg-white rounded shadow-lg mb-8'>
            <div className='border-b px-8 py-5'>
                <h1>Request Date</h1>
                <p>{new Date(support?.createdAt).toLocaleDateString()}</p>
            </div>
            <div className='border-b px-8 py-5'>
                <h1>Request Type</h1>
                <p>{support?.requestType}</p>
            </div>
            <div className='border-b px-8 py-5'>
                <h1>Details</h1>
                <p>{support?.details}</p>
            </div>
        </div>
    )
}
