import React, { useEffect, useRef, useState } from 'react'
import { BiDotsVerticalRounded } from 'react-icons/bi'
import { RiSendPlaneFill } from 'react-icons/ri'
import { useUser } from '../../context/UserContext';
import axios from 'axios';
import Config, { baseUrl } from '../../config/config';

export default function ChatComp({ socket, currentChat, currentUsers }) {
  const { user } = useUser();
  const scrollRef = useRef();
  const config = Config();
  const [arrivalMessage, setArrivalMessage] = useState(null);
  const [message, setMessage] = useState("");
  const [messages, setMessages] = useState([]);
  const [senderId, setSenderId] = useState({ id: null, name: null, image: null });
  const [messageRecieved, setMessageRecieved] = useState("");
  const [dropDown, setDropDown] = useState(false);
  // console.log(messages)
  const handleMessage = (event) => {
    event.preventDefault();
    if (message.length > 0) {
      setMessages(oldmessages => [...oldmessages, message]);
      handleSendMsg(message);
      setMessage('')
      event.target.reset()
    }
  }

  const handleSendMsg = async (msg) => {
    socket.current.emit("send-msg", {
      to: senderId.id,
      from: user._id,
      msg,
    });

    await axios.post(`${baseUrl}message/addmessage`, { to: senderId.id, message: msg }, config)
      .then(res => {
        console.log(res.data)
      })
      .catch(err => {
        console.log(err)
      });

    const msgs = [...messages];
    msgs.push({ fromSelf: true, message: msg });
    setMessages(msgs);
  };

  const fetchMessages = async (userId) => {
    await axios.post(`${baseUrl}message/getmessage`, { from: user._id, to: userId })
      .then(res => {
        // console.log(res.data)
        setMessages(res.data.data)
      })
      .catch(err => {
        console.log(err.message)
      })
  }

  useEffect(() => {
    if (socket.current) {
      socket.current.on("msg-recieve", (msg) => {
        setArrivalMessage({ fromSelf: false, message: msg });
      });
    }
  }, []);

  useEffect(() => {
    arrivalMessage && setMessages((prev) => [...prev, arrivalMessage]);
  }, [arrivalMessage]);

  useEffect(() => {
    scrollRef.current?.scrollIntoView({ behavior: "smooth" });
  }, [messages]);


  return (
    <div className='grid grid-cols-1 sm:grid-cols-2 xl:grid-cols-3 gap-5 xl:gap-8'>
      <div className=''>
        {/* <div className='mb-4'>
          <button className='bg-purple-800 rounded-lg text-white px-4 py-3 text-sm'>+ Create New Chat</button>
        </div> */}
        <div className='mb-4 hidden sm:block'>
          <form>
            <div className="relative">
              <div className="absolute inset-y-0 left-0 flex items-center pl-3 pointer-events-none">
                <svg aria-hidden="true" className="w-5 h-5 text-gray-500 dark:text-gray-400" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"></path></svg>
              </div>
              <input type="search" className="block w-full px-8 py-4 pl-10 text-sm text-gray-900 border border-gray-300 rounded bg-gray-50" placeholder="Search " required />
            </div>
          </form>
        </div>
        <div className='h-[64vh] overflow-y-scroll message-scrollBar pr-2 hidden sm:block'>
          {currentUsers ? currentUsers.map(user => {
            return (
              <div key={user._id} className='py-6 px-4 bg-white mb-4 rounded shadow-md cursor-pointer' onClick={e => { setSenderId({ id: user._id, name: `${user.firstName} ${user.lastName}`, image: user.image }); fetchMessages(user._id) }}>
                <div className='flex justify-between items-center mb-3'>
                  <div className='flex items-center'>
                    <img className='rounded-full w-10 h-10 mr-4' src={user.image ? user.image : "images/24.png"} alt='...' />
                    <h2 className='font-black'>{user?.firstName} {user?.lastName}</h2>
                  </div>
                  {/* <p className='text-xs text-gray-400'>1 minute ago</p> */}
                </div>
                <div className='flex justify-between text-xs text-gray-400'>
                  {/* <p className='w-11/12'>Check this out. </p> */}
                  {/* <div className='w-4 h-4 rounded-full bg-[#FF3366]'></div> */}
                </div>
              </div>
            )
          })
            :
            <div>No chat History</div>
          }
        </div>
      </div>
      {senderId.id ?
        <div className='relative xl:col-span-2 border bg-white rounded-lg mb-5'>
          <div className='flex justify-between items-center bg-[#FAFBFF] border-b rounded-lg'>
            <div className=' hidden sm:flex items-center py-4 pl-8'>
              <img className='rounded-full w-10 h-10 object-cover' src={senderId.image} alt='...' />
              <h4 className='font-black px-3'>{senderId.name}</h4>
            </div>
            <div className='sm:hidden'>
              <div className='px-4 py-2' onClick={e => setDropDown(pre => !pre)}>
                <h4 className='font-black px-3'>Jese Leos</h4>
              </div>
              <div className={`absolute z-10 bg-white rounded-lg shadow mt-2 w-full ${!dropDown && `hidden`}`}>
                <ul className="h-48 py-5 overflow-y-auto text-gray-700" >
                  <li className='mb-2 px-4'>
                    <input type="search" id="site-search" name="q" placeholder='Search' className='rounded-full w-full border border-gray-400 py-1 text-sm px-5' />
                  </li>
                  <li>
                    <p className="flex items-center px-4 py-2 hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white">
                      <img className="w-6 h-6 mr-2 rounded-full" src="https://images.pexels.com/photos/7562313/pexels-photo-7562313.jpeg?auto=compress&cs=tinysrgb&w=1600" alt="..." />
                      Jese Leos
                    </p>
                  </li>
                  <li>
                    <p className="flex items-center px-4 py-2 hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white">
                      <img className="w-6 h-6 mr-2 rounded-full" src="https://images.pexels.com/photos/7562313/pexels-photo-7562313.jpeg?auto=compress&cs=tinysrgb&w=1600" alt="..." />
                      Robert Gough
                    </p>
                  </li>
                  <li>
                    <p className="flex items-center px-4 py-2 hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white">
                      <img className="w-6 h-6 mr-2 rounded-full" src="https://images.pexels.com/photos/7562313/pexels-photo-7562313.jpeg?auto=compress&cs=tinysrgb&w=1600" alt="..." />
                      Bonnie Green
                    </p>
                  </li>
                  <li>
                    <p className="flex items-center px-4 py-2 hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white">
                      <img className="w-6 h-6 mr-2 rounded-full" src="https://images.pexels.com/photos/7562313/pexels-photo-7562313.jpeg?auto=compress&cs=tinysrgb&w=1600" alt="..." />
                      Leslie Livingston
                    </p>
                  </li>
                  <li>
                    <p className="flex items-center px-4 py-2 hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white">
                      <img className="w-6 h-6 mr-2 rounded-full" src="https://images.pexels.com/photos/7562313/pexels-photo-7562313.jpeg?auto=compress&cs=tinysrgb&w=1600" alt="..." />
                      Michael Gough
                    </p>
                  </li>
                  <li>
                    <p className="flex items-center px-4 py-2 hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white">
                      <img className="w-6 h-6 mr-2 rounded-full" src="https://images.pexels.com/photos/7562313/pexels-photo-7562313.jpeg?auto=compress&cs=tinysrgb&w=1600" alt="..." />
                      Joseph Mcfall
                    </p>
                  </li>
                  <li>
                    <p className="flex items-center px-4 py-2 hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white">
                      <img className="w-6 h-6 mr-2 rounded-full" src="https://images.pexels.com/photos/7562313/pexels-photo-7562313.jpeg?auto=compress&cs=tinysrgb&w=1600" alt="..." />
                      Roberta Casas
                    </p>
                  </li>
                  <li>
                    <p className="flex items-center px-4 py-2 hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white">
                      <img className="w-6 h-6 mr-2 rounded-full" src="https://images.pexels.com/photos/7562313/pexels-photo-7562313.jpeg?auto=compress&cs=tinysrgb&w=1600" alt="..." />
                      Neil Sims
                    </p>
                  </li>
                </ul>
              </div>
            </div>
            <div className='px-8 py-4'>
              <BiDotsVerticalRounded className='rounded-full shadow-lg bg-white w-10 h-10 p-2' />
            </div>
          </div>
          <div ref={scrollRef} className='px-8 h-[70vh] xl:h-[65vh] py-4 overflow-y-scroll scroll-smooth message-scrollBar space-y-4'>
            {messages && messages.map((mess, index) => {
              return (
                <div key={index} className={`${mess.fromSelf ? "text-right" : "text-left"}`}>
                  <span className='border text-sm lg:text-base px-3 py-1 text-gray-500 rounded-lg'>{mess.message}</span>
                </div>
              )
            })}
          </div>
          <div className=' bottom-0 border-t px-8 py-8 '>
            <form className='text-gray-500 text-sm flex bg-white w-full px-4 py-1 items-center' onSubmit={handleMessage}>
              <input className='w-full py-2 px-4 border drop-shadow-sm rounded-lg placeholder:text-gray-400 focus:outline-none mr-3' placeholder='Type a message here' onChange={e => { setMessage(e.target.value) }} />
              <div className='bg-[#2A8BF2] rounded-full w-8 h-7 flex items-center justify-center' >
                <button type='submit'>
                  <RiSendPlaneFill className='text-white ' />
                </button>
              </div>
            </form>
          </div>
        </div>
        :
        <div className='relative xl:col-span-2 flex flex-col items-center justify-center border bg-white rounded-lg mb-5'>

          <img className='h-72 object-contain' src='https://img.freepik.com/free-vector/message-sent-concept-illustration_114360-3363.jpg?w=826&t=st=1691161151~exp=1691161751~hmac=ccd6b8b158b08a89f8c26a4a32b1773cfbed96ffb87731851caab731439ac890' alt='...' />
          <h1 className='text-xl text-gray-500'>Chat with users!</h1>

        </div>
      }
    </div>
  )
}
