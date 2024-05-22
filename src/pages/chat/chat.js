import React, { useEffect, useRef, useState } from 'react'
import Header from '../../components/header/header'
import ChatComp from '../../components/chat/chatComp'
import { io } from "socket.io-client";
import { useUser } from '../../context/UserContext';
import axios from 'axios';
import Config, { baseUrl } from '../../config/config';

export default function Chat() {
    const { user } = useUser();
    const socket = useRef();
    const [contacts, setContacts] = useState([]);
    const [currentChat, setCurrentChat] = useState(undefined);
    const [currentUsers, setCurrentUsers] = useState(undefined);
    const config = Config();

    useEffect(() => {
        if (user) {
            socket.current = io('http://localhost:8080/');
            socket.current.on('connect', () => {
                console.log('socket connected', socket.current.id)
            })
            socket.current.emit("add-user", user._id);
            // console.log(host)
        }
        console.log(socket)
    }, [user])


    const fetchCurrentuser = async () => {
        await axios.get(`${baseUrl}specialist/user`, config)
            .then(res => {
                console.log(res.data.data);
                setCurrentUsers(res.data.data.users)
            })
            .catch(err => {
                console.log(err.message)
            });
    }
    useEffect(() => {
        fetchCurrentuser();
    }, [])

    return (
        <div>
            <Header header={'chat'} />
            <div className='px-4 sm:px-9 lg:ml-64 max-w-screen-2xl' style={{ marginTop: '-175px' }}>
                <ChatComp socket={socket} currentChat={currentChat} currentUsers={currentUsers} />
            </div>
        </div>
    )
}
