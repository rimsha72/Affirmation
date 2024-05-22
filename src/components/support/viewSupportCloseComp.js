import React from 'react'
import ViewSupportDetails from '../../layouts/support/viewSupportDetails'

export default function ViewSupportCloseComp() {
    return (
        <div className='max-w-screen-2xl' style={{ marginTop: '-180px' }}>
            <ViewSupportDetails />
            <div className='w-full max-w-xl'>
                <div className='bg-white px-8 py-4 rounded shadow-lg'>
                    <h4>Activity</h4>
                </div>
                <div className='my-6'>
                    <div className='bg-white rounded-md'>
                        <div className='px-2 py-1'>
                            <div className='font-medium text-sm py-2 flex justify-between items-center'>
                                <div className='flex justify-center items-center'>
                                    <img className='rounded-full' src='images/Ellipse 7.png' alt='...' />
                                    <span className='pl-4'>Jerry Helfer</span>
                                </div>
                                <span>Dec 1, 2022; 10:30 am</span>
                            </div>
                        </div>
                        <hr />
                        <div className='my-4 '>
                            <span className='px-3 text-lg font-medium'>fasfasdfsadfsd</span>
                        </div>
                    </div>
                </div>
                <div className='my-6'>
                    <div className='bg-white rounded-md'>
                        <div className='px-2 py-1'>
                            <div className='font-medium text-sm py-2 flex justify-between items-center'>
                                <div className='flex justify-center items-center'>
                                    <img className='rounded-full' src='images/Ellipse 7.png' alt='...' />
                                    <span className='pl-4'>You</span>
                                </div>
                                <span>Dec 1, 2022; 10:30 am</span>
                            </div>
                        </div>
                        <hr />
                        <div className='my-4 '>
                            <span className='px-3 text-lg font-medium'>fasfasdfsadfsd</span>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}
