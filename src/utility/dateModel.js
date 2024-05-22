import React, { useState } from 'react';
import { addDays } from 'date-fns';
import { DateRange, DateRangePicker } from 'react-date-range';

export default function DateModel({ modalToggle, setModalToggle }) {
    const [state, setState] = useState([
        {
            startDate: new Date(),
            endDate: addDays(new Date(), 1),
            key: 'selection'
        }
    ]);
    const [datRange, setDatRange] = useState({
        selection: {
            startDate: new Date(),
            endDate: null,
            key: 'selection'
        },
        compare: {
            startDate: new Date(),
            endDate: addDays(new Date(), 1),
            key: 'compare'
        }
    });
    const [datMobRange, setDatMobRange] = useState([
        {
            startDate: new Date(),
            endDate: null,
            key: 'selection'
        }
    ]);
    return (
        <div>
            <div className={`fixed flex items-center justify-center bg-gray-900/60 z-50 ${modalToggle ? `hidden` : null} w-full p-4 overflow-x-hidden overflow-y-auto inset-0 h-[calc(100%-1rem)] max-h-full`}>
                <div className="relative max-h-full">
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
                        {/* <!-- Modal body --> */}
                        <div className="p-6 space-y-6">
                            <div className='hidden lg:block'>
                                <DateRangePicker
                                    onChange={item => setState([item.selection])}
                                    showSelectionPreview={true}
                                    moveRangeOnFirstSelection={false}
                                    months={2}
                                    ranges={state}
                                    direction="horizontal"
                                />
                            </div>
                            <div className='hidden sm:block lg:hidden'>
                                <DateRangePicker
                                    onChange={item => setDatRange({ ...datRange, ...item })}
                                    months={1}
                                    minDate={addDays(new Date(), -300)}
                                    maxDate={addDays(new Date(), 900)}
                                    direction="vertical"
                                    scroll={{ enabled: true }}
                                    ranges={[datRange.selection, datRange.compare]}
                                />
                            </div>
                            <div className='sm:hidden'>
                                <DateRange
                                    editableDateInputs={true}
                                    onChange={item => setDatMobRange([item.selection])}
                                    moveRangeOnFirstSelection={false}
                                    ranges={datMobRange}
                                />
                            </div>
                        </div>
                        {/* <!-- Modal footer --> */}
                        <div className="flex items-center justify-center p-6 space-x-2 border-t border-gray-200 rounded-b">
                            <button className='px-3 py-1 border border-gray-600 rounded-md' onClick={e => setModalToggle(!modalToggle)}>Save</button>
                            <button className='px-3 py-1 border border-red-600 rounded-md' onClick={e => setModalToggle(!modalToggle)}>Close</button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}
