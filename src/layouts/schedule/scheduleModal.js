import React from 'react'

export default function ScheduleModal({ modalToggle, setModalToggle }) {
  return (
    <div>
      <div className={`fixed flex items-center justify-center bg-gray-900/60 z-50 ${modalToggle ? `hidden` : null} w-full p-4 overflow-x-hidden overflow-y-auto inset-0 h-[calc(100%-1rem)] max-h-full`}>
        <div className="relative w-full max-w-4xl max-h-full">
          {/* <!-- Modal content --> */}
          <div className="relative bg-white rounded-lg shadow ">
            {/* <!-- Modal header --> */}
            <div className="flex items-start justify-between p-4 border-b rounded-t">
              <h3 className="text-xl font-semibold text-gray-900">
                Session 123
              </h3>
              <button onClick={e => setModalToggle(!modalToggle)} type="button" className="text-gray-400 bg-transparent hover:bg-gray-200 hover:text-gray-900 rounded-lg text-sm p-1.5 ml-auto inline-flex items-center">
                <svg aria-hidden="true" className="w-5 h-5" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fillRule="evenodd" d="M4.293 4.293a1 1 0 011.414 0L10 8.586l4.293-4.293a1 1 0 111.414 1.414L11.414 10l4.293 4.293a1 1 0 01-1.414 1.414L10 11.414l-4.293 4.293a1 1 0 01-1.414-1.414L8.586 10 4.293 5.707a1 1 0 010-1.414z" clipRule="evenodd"></path></svg>
                <span className="sr-only">Close modal</span>
              </button>
            </div>
            <div className="flex flex-wrap items-start justify-between p-4 border-b rounded-t">
              <div>
                <h3 className="text-base font-semibold pb-3 text-gray-900">Status</h3>
                <button className="rounded-lg bg-gray-100 text-sm px-4 py-2 w-60 text-center inline-flex items-center justify-between" type="button">Upcoming</button>
              </div>
              <div>
                <h3 className="text-base font-semibold pb-3 text-gray-900">Date</h3>
                <p className='rounded-lg bg-gray-100 text-sm px-4 py-2 w-60 text-center border border-gray-100'>05/22/2023</p>
              </div>
              <div>
                <h3 className="text-base font-semibold pb-3 text-gray-900">Time</h3>
                <p className='rounded-lg bg-gray-100 text-sm px-4 py-2 w-60 text-center border border-gray-100'>10:15</p>
              </div>
            </div>
            {/* <!-- Modal body --> */}
            <div className="p-6 space-y-6">
              <h4>Details</h4>
              <div className="relative overflow-x-auto">
                <table className="w-full text-sm text-left text-gray-500 ">
                  <thead className="text-xs text-gray-700 uppercase bg-gray-50 ">
                    <tr>
                      <th scope="col" className="px-6 py-3">
                        Participant
                      </th>
                      <th scope="col" className="px-6 py-3">
                        First Join
                      </th>
                      <th scope="col" className="px-6 py-3">
                        Leave Time
                      </th>
                      <th scope="col" className="px-6 py-3">
                        In session Duration
                      </th>
                    </tr>
                  </thead>
                  <tbody>
                    <tr className="bg-white dark:bg-gray-800 dark:border-gray-700">
                      <th scope="row" className="px-6 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white">
                        User
                      </th>
                      <td className="px-6 py-4">
                        05/22/23; 10:15 am
                      </td>
                      <td className="px-6 py-4">
                        05/22/23; 10:45 am
                      </td>
                      <td className="px-6 py-4">
                        29m 11s
                      </td>
                    </tr>
                    <tr className="bg-white dark:bg-gray-800 dark:border-gray-700">
                      <th scope="row" className="px-6 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white">
                        Provider
                      </th>
                      <td className="px-6 py-4">
                        05/22/23; 10:15 am
                      </td>
                      <td className="px-6 py-4">
                        05/22/23; 10:45 am
                      </td>
                      <td className="px-6 py-4">
                        30m 11s
                      </td>
                    </tr>
                  </tbody>
                </table>
              </div>
            </div>
            {/* <!-- Modal footer --> */}
            <div className="flex items-center justify-center p-6 space-x-2 border-t border-gray-200 rounded-b">
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
