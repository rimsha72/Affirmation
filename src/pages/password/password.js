import React, { useState } from 'react'
import Header from '../../components/header/header'
import PassComp from '../../components/pass/passComp';
import axios from 'axios';
import Config, { baseUrl } from '../../config/config';

export default function Password() {
    const [currentPassword, setCurrentPassword] = useState('');
    const [password, setPassword] = useState('');
    const [confirmPassword, setConfirmPassword] = useState('');
    const [message, setMessage] = useState('')
    const config = Config()
    const handlePassword = async () => {
        if (password && currentPassword && confirmPassword) {
            if (password === confirmPassword) {
                const body = {
                    currentPassword: currentPassword,
                    password: password
                }
                await axios.post(`${baseUrl}specialist/update-password`, body, config)
                    .then((res) => {
                        console.log(res)
                        setMessage(res.data.message)
                    })
                    .catch((err) => console.log(err))
            }
        }
    }
    return (
        <div>
            <Header header={'change password'} />
            <div className='px-4 sm:px-9 lg:ml-64 ' style={{ marginTop: '-175px' }}>
                <PassComp
                    currentPassword={currentPassword}
                    setCurrentPassword={setCurrentPassword}
                    password={password} setPassword={setPassword}
                    confirmPassword={confirmPassword}
                    setConfirmPassword={setConfirmPassword}
                    message={message}
                    handlePassword={handlePassword}
                />
            </div>
        </div>
    )
}
