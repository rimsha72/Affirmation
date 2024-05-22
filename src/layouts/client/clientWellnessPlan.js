import React from 'react'

export default function ClientWellnessPlan() {
    return (
        <>
            <div className='px-9 lg:ml-64 max-w-screen-2xl mb-9'>
                <div className='grid grid-cols-1 lg:grid-cols-2 xl:grid-cols-3 gap-8'>
                    <div className='border border-gray-100 shadow-lg bg-white shadow-gray-500/70 rounded-md'>
                        <div className='px-8 py-2'>
                            <div className=''>
                                <div className='font-bold text-lg py-2'>
                                    <span>Countdown</span>
                                </div>
                            </div>
                        </div>
                        <hr className='my-2' />
                        <div className='flex justify-center items-center py-12'>
                            <div>
                                <span className='text-3xl font-semibold'>39</span><span className='font-medium'> Days</span>
                            </div>
                        </div>
                    </div>
                    <div className='border border-gray-100 shadow-lg bg-white shadow-gray-500/70 rounded-md'>
                        <div className='px-8 py-2'>
                            <div className=''>
                                <div className='font-bold text-lg py-2'>
                                    <span>Weight Goal</span>
                                </div>
                            </div>
                        </div>
                        <hr className='my-2' />
                        <div className='flex items-center px-8 py-7'>
                            <img className='w-16 h-16' src='images/Weight 1.png' alt='' />
                            <div className='flex flex-col w-full pl-4'>
                                <div className='flex justify-between mb-2'>
                                    <span>Current: 175 lb</span>
                                    <span>Goal: 150 lb</span>
                                </div>
                                <div className="w-full bg-gray-200 rounded-full h-2.5 dark:bg-gray-700">
                                    <div className="bg-blue-600 h-2.5 rounded-full"></div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className='border border-gray-100 shadow-lg bg-white shadow-gray-500/70 rounded-md'>
                        <div className='px-8 py-2'>
                            <div className=''>
                                <div className='font-bold text-lg py-2'>
                                    <span>Diet Goal</span>
                                </div>
                            </div>
                        </div>
                        <hr className='my-2' />
                        <div className='flex items-center px-8 py-7'>
                            <img src='images/Diet 1.png' alt='' />
                            <div className='pl-8'>
                                <span>Eat fruits and vegetables daily.</span>
                            </div>
                        </div>
                    </div>
                    <div className='border border-gray-100 shadow-lg bg-white shadow-gray-500/70 rounded-md'>
                        <div className='px-8 py-2'>
                            <div className=''>
                                <div className='font-bold text-lg py-2'>
                                    <span>Primary Wellness Focus</span>
                                </div>
                            </div>
                        </div>
                        <hr className='my-2' />
                        <div className='flex items-center px-8 py-7'>
                            <span>Mind-Body Connection</span>
                        </div>
                    </div>
                    <div className='border border-gray-100 shadow-lg bg-white shadow-gray-500/70 rounded-md'>
                        <div className='px-8 py-2'>
                            <div className=''>
                                <div className='font-bold text-lg py-2'>
                                    <span>Fitness Goal</span>
                                </div>
                            </div>
                        </div>
                        <hr className='my-2' />
                        <div className='flex items-center px-8 py-7'>
                            <img src='images/Fitness 1.png' alt='' />
                            <span>Go for a walk 3-5 times per week.</span>
                        </div>
                    </div>
                    <div className='border border-gray-100 shadow-lg bg-white shadow-gray-500/70 rounded-md'>
                        <div className='px-8 py-2'>
                            <div className='font-bold text-lg py-2'>
                                <span>Mental Health Goal</span>
                            </div>
                        </div>
                        <hr className='my-2' />
                        <div className='flex items-center px-8 py-7'>
                            <img src='images/image 179.png' alt='' />
                            <span>Meditate 3-5 times per week.</span>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}
