import React from 'react'
import {useChatStore} from '../store/useChatStore'

import ChatContainer from '../components/ChatContainer';
import NoChatSelected from '../components/NoChatSelected';
import Sidebar from '../components/Sidebar';

 const HomePage = () => {
  const {selectedUser}=useChatStore();
  return (
    <div className='h-screen '>
      <div className='flex items-center justify-center pt-20 px-8'>
        <div className='bg-base-200 rounded-lg shadow-cl w-full max-w-6xl h-[calc(100vh-8rem)]'>
            <div className='flex h-full  rounded-lg overflow-hidden'>
            <Sidebar/>

            {selectedUser ? <ChatContainer/> : <NoChatSelected/>}

            </div>
        </div>
      </div>
      
    </div>
  )
}

export default HomePage;
