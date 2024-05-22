import axios from 'axios'
import React from 'react'
import { baseUrl, Config } from '../../config/config'

export default function AvailableModal({ showModal, setShowModal, setRender }) {
    const config = Config();
    const deleteAvailability = async () => {
        await axios.delete(`${baseUrl}specialist/delete/avialability`, config)
            .then((res) => {
                setRender(Math.random())
                console.log(res.data.data)
            })
            .catch(err => {
                console.log(err)
            })
    }
    return (
        <div>
            <div className={`fixed flex items-center justify-center bg-gray-800/40 z-50 ${showModal ? null : `hidden`} w-full p-4 overflow-x-hidden overflow-y-auto md:inset-0 h-[calc(100%-1rem)] max-h-full`}>
                <div className="relative w-full max-w-2xl max-h-full">
                    {/* <!-- Modal content --> */}
                    <div className="relative bg-white rounded-lg shadow dark:bg-gray-700">
                        {/* <!-- Modal header --> */}

                        {/* <!-- Modal body --> */}
                        <div className="px-6 py-12 space-y-6 grid justify-items-center">
                            <div>
                                <img src='images/image 192.png' alt='...' />
                            </div>
                            <div className='text-gray-500 font-bold'>
                                <h5>Are you sure you want to delete this availability</h5>
                            </div>
                            <div>
                                <div className='px-20 py-2 text-white rounded-full mb-4 cursor-pointer' style={{ background: '#1380FF' }} onClick={e => { deleteAvailability(); setShowModal(pre => !pre) }}>
                                    <p className='w-full' >Yes, delete</p>
                                </div>
                                <div className='px-20 py-2 text-white rounded-full cursor-pointer' style={{ background: '#1380FF' }} onClick={e => setShowModal(pre => !pre)}>
                                    <p className='w-full' >No, go back</p>
                                </div>
                            </div>
                        </div>

                    </div>
                </div>
            </div>
        </div>
    )
}
