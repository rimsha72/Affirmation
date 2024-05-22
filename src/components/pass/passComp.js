import React, { useState } from 'react'

export default function PassComp({ currentPassword, setCurrentPassword, password, setPassword, confirmPassword, setConfirmPassword, message, handlePassword }) {
	const [isPasswordVisible, setIsPasswordVisible] = useState({
		currentPassword: false,
		password: false,
		confirmPassword: false,
	});

	function togglePasswordVisibility() {
		setIsPasswordVisible({ ...isPasswordVisible, currentPassword: !isPasswordVisible.currentPassword });
	}
	return (
		<div className='w-full max-w-2xl rounded-lg py-4 shadow-lg mt-6 sm:mt-0' style={{ background: '#F7FAFC' }}>
			<div className='text-xl font-black py-6 px-8 border-b'>
				<h1>Change Password</h1>
			</div>
			<div className='px-8 py-4'>
				<label className='font-black text-gray-400'>Current Password</label>
				<div className="relative mt-2">
					<input
						type={isPasswordVisible.currentPassword ? "text" : "password"}
						placeholder="Password"
						className="w-full px-4 py-2 text-base border border-gray-50 shadow rounded outline-none focus:ring-blue-500 focus:border-blue-500 focus:ring-1"
						onChange={e => setCurrentPassword(e.target.value)}
					/>
					<button
						className="absolute inset-y-0 right-0 flex items-center px-4 text-gray-600"
						onClick={togglePasswordVisibility}
					>
						{!isPasswordVisible.currentPassword ? (
							<svg
								xmlns="http://www.w3.org/2000/svg"
								fill="none"
								viewBox="0 0 24 24"
								strokeWidth={1.5}
								stroke="currentColor"
								className="w-5 h-5"
							>
								<path
									strokeLinecap="round"
									strokeLinejoin="round"
									d="M3.98 8.223A10.477 10.477 0 001.934 12C3.226 16.338 7.244 19.5 12 19.5c.993 0 1.953-.138 2.863-.395M6.228 6.228A10.45 10.45 0 0112 4.5c4.756 0 8.773 3.162 10.065 7.498a10.523 10.523 0 01-4.293 5.774M6.228 6.228L3 3m3.228 3.228l3.65 3.65m7.894 7.894L21 21m-3.228-3.228l-3.65-3.65m0 0a3 3 0 10-4.243-4.243m4.242 4.242L9.88 9.88"
								/>
							</svg>
						) : (
							<svg
								xmlns="http://www.w3.org/2000/svg"
								fill="none"
								viewBox="0 0 24 24"
								strokeWidth={1.5}
								stroke="currentColor"
								className="w-5 h-5"
							>
								<path
									strokeLinecap="round"
									strokeLinejoin="round"
									d="M2.036 12.322a1.012 1.012 0 010-.639C3.423 7.51 7.36 4.5 12 4.5c4.638 0 8.573 3.007 9.963 7.178.07.207.07.431 0 .639C20.577 16.49 16.64 19.5 12 19.5c-4.638 0-8.573-3.007-9.963-7.178z"
								/>
								<path
									strokeLinecap="round"
									strokeLinejoin="round"
									d="M15 12a3 3 0 11-6 0 3 3 0 016 0z"
								/>
							</svg>
						)}
					</button>
				</div>
			</div>
			<div className='px-8 py-3'>
				<label className='font-black text-gray-400'>New Password</label>
				<div className="relative mt-2">
					<input
						type={isPasswordVisible.password ? "text" : "password"}
						placeholder="Password"
						className="w-full px-4 py-2 text-base border border-gray-50 shadow rounded outline-none focus:ring-blue-500 focus:border-blue-500 focus:ring-1"
						onChange={e => setPassword(e.target.value)}
					/>
					<button
						className="absolute inset-y-0 right-0 flex items-center px-4 text-gray-600"
						onClick={e => { setIsPasswordVisible({ ...isPasswordVisible, password: !isPasswordVisible.password }) }}
					>
						{!isPasswordVisible.password ? (
							<svg
								xmlns="http://www.w3.org/2000/svg"
								fill="none"
								viewBox="0 0 24 24"
								strokeWidth={1.5}
								stroke="currentColor"
								className="w-5 h-5"
							>
								<path
									strokeLinecap="round"
									strokeLinejoin="round"
									d="M3.98 8.223A10.477 10.477 0 001.934 12C3.226 16.338 7.244 19.5 12 19.5c.993 0 1.953-.138 2.863-.395M6.228 6.228A10.45 10.45 0 0112 4.5c4.756 0 8.773 3.162 10.065 7.498a10.523 10.523 0 01-4.293 5.774M6.228 6.228L3 3m3.228 3.228l3.65 3.65m7.894 7.894L21 21m-3.228-3.228l-3.65-3.65m0 0a3 3 0 10-4.243-4.243m4.242 4.242L9.88 9.88"
								/>
							</svg>
						) : (
							<svg
								xmlns="http://www.w3.org/2000/svg"
								fill="none"
								viewBox="0 0 24 24"
								strokeWidth={1.5}
								stroke="currentColor"
								className="w-5 h-5"
							>
								<path
									strokeLinecap="round"
									strokeLinejoin="round"
									d="M2.036 12.322a1.012 1.012 0 010-.639C3.423 7.51 7.36 4.5 12 4.5c4.638 0 8.573 3.007 9.963 7.178.07.207.07.431 0 .639C20.577 16.49 16.64 19.5 12 19.5c-4.638 0-8.573-3.007-9.963-7.178z"
								/>
								<path
									strokeLinecap="round"
									strokeLinejoin="round"
									d="M15 12a3 3 0 11-6 0 3 3 0 016 0z"
								/>
							</svg>
						)}
					</button>
				</div>
			</div>
			<div className='px-8 py-3'>
				<label className='font-black text-gray-400'>Confirm Password</label>
				<div className="relative mt-2">
					<input
						type={isPasswordVisible.confirmPassword ? "text" : "password"}
						placeholder="Password"
						className="w-full px-4 py-2 text-base border border-gray-50 shadow rounded outline-none focus:ring-blue-500 focus:border-blue-500 focus:ring-1"
						onChange={e => setConfirmPassword(e.target.value)}
					/>
					<button
						className="absolute inset-y-0 right-0 flex items-center px-4 text-gray-600"
						onClick={e => { setIsPasswordVisible({ ...isPasswordVisible, confirmPassword: !isPasswordVisible.confirmPassword }) }}
					>
						{!isPasswordVisible.confirmPassword ? (
							<svg
								xmlns="http://www.w3.org/2000/svg"
								fill="none"
								viewBox="0 0 24 24"
								strokeWidth={1.5}
								stroke="currentColor"
								className="w-5 h-5"
							>
								<path
									strokeLinecap="round"
									strokeLinejoin="round"
									d="M3.98 8.223A10.477 10.477 0 001.934 12C3.226 16.338 7.244 19.5 12 19.5c.993 0 1.953-.138 2.863-.395M6.228 6.228A10.45 10.45 0 0112 4.5c4.756 0 8.773 3.162 10.065 7.498a10.523 10.523 0 01-4.293 5.774M6.228 6.228L3 3m3.228 3.228l3.65 3.65m7.894 7.894L21 21m-3.228-3.228l-3.65-3.65m0 0a3 3 0 10-4.243-4.243m4.242 4.242L9.88 9.88"
								/>
							</svg>
						) : (
							<svg
								xmlns="http://www.w3.org/2000/svg"
								fill="none"
								viewBox="0 0 24 24"
								strokeWidth={1.5}
								stroke="currentColor"
								className="w-5 h-5"
							>
								<path
									strokeLinecap="round"
									strokeLinejoin="round"
									d="M2.036 12.322a1.012 1.012 0 010-.639C3.423 7.51 7.36 4.5 12 4.5c4.638 0 8.573 3.007 9.963 7.178.07.207.07.431 0 .639C20.577 16.49 16.64 19.5 12 19.5c-4.638 0-8.573-3.007-9.963-7.178z"
								/>
								<path
									strokeLinecap="round"
									strokeLinejoin="round"
									d="M15 12a3 3 0 11-6 0 3 3 0 016 0z"
								/>
							</svg>
						)}
					</button>
				</div>
			</div>
			<div>
				<p className='text-red-600 text-sm text-center'>{message}</p>
			</div>
			<div className='flex justify-center'>
				<button className='bg-blue-500 rounded-lg px-8 py-2 text-white mr-6' onClick={handlePassword}>Save</button>
				<button className='bg-red-500 rounded-lg px-8 py-2 text-white'>Cancel</button>
			</div>
		</div>
	)
}
