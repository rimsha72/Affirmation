import React, { useState } from 'react'
import { BsSearch } from 'react-icons/bs'
import DateModel from '../../utility/dateModel'

export default function ScheduleHeader() {
	const [modalToggle, setModalToggle] = useState(true)
	return (
		<>
			<div className='max-w-screen-2xl'>
				<div className='flex flex-wrap justify-center sm:justify-end'>
					<form className='basis-full sm:basis-1/4 mb-3'>
						<div className="sm:mr-4">
							<BsSearch className="absolute pl-2 mt-2 w-5 h-5 text-gray-200" />
							<input type="search" id="search" className=" pl-7 text-sm text-slate-200 bg-transparent rounded-full border border-gray-300 w-full placeholder:text-slate-200 focus:border-sky-400" placeholder="Search (ID or Last Name)" required />
						</div>
					</form>
					<div>
						<button
							onClick={e => setModalToggle(pre => !pre)}
							className="text-gray-400 w-32 bg-white font-medium rounded-md text-sm px-4 py-2.5 mr-3 text-center inline-flex items-center" type="button">
							Date
						</button>
						<div id="dropdown" className="z-10 hidden bg-white divide-y divide-gray-100 rounded-lg shadow w-44 dark:bg-gray-700">
							<ul className="py-2 text-sm text-gray-700 dark:text-gray-200" aria-labelledby="dropdownDefaultButton">
								<li>
									<p className="block px-4 py-2 hover:bg-gray-100">Dashboard</p>
								</li>
								<li>
									<p className="block px-4 py-2 hover:bg-gray-100">Settings</p>
								</li>
								<li>
									<p className="block px-4 py-2 hover:bg-gray-100">Earnings</p>
								</li>
								<li>
									<p className="block px-4 py-2 hover:bg-gray-100">Sign out</p>
								</li>
							</ul>
						</div>
					</div>
					<div>
						<button className="text-gray-400 w-32 bg-white font-medium rounded-md text-sm px-4 py-2.5 text-center inline-flex items-center" type="button">
							Status
						</button>
						<div id="dropdown" className="z-10 hidden bg-white divide-y divide-gray-100 rounded-lg shadow w-44 dark:bg-gray-700">
							<ul className="py-2 text-sm text-gray-700 dark:text-gray-200" aria-labelledby="dropdownDefaultButton">
								<li>
									<p className="block px-4 py-2 hover:bg-gray-100">Dashboard</p>
								</li>
								<li>
									<p className="block px-4 py-2 hover:bg-gray-100">Settings</p>
								</li>
								<li>
									<p className="block px-4 py-2 hover:bg-gray-100">Earnings</p>
								</li>
								<li>
									<p className="block px-4 py-2 hover:bg-gray-100">Sign out</p>
								</li>
							</ul>
						</div>
					</div>
				</div>
				<DateModel modalToggle={modalToggle} setModalToggle={setModalToggle} />
			</div>
		</>
	)
}
