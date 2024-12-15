import React, { useEffect, useRef, useState } from 'react';
import { useChatStore } from '../store/useChatStore';
import { useAuthStore } from '../store/useAuthStore';
import { Send, ChevronDown } from 'lucide-react';
import { toast } from 'react-toastify';
import ChatHeader from './ChatHeader';
import MessageSkeleton from './skeletons/MessageSkeleton';
import MessageInput from './MessageInput';

const ChatContainer = () => {
  const {
    selectedUser,
    messages,
    getMessages,
    isMessageLoading,
  } = useChatStore();
  const { onlineUsers } = useAuthStore();

  useEffect(() => {
    getMessages(selectedUser._id)
  }, [selectedUser, getMessages]);

if(isMessageLoading){
    return(
        <div className='flex-1 flex flex-col overflow-auto'>
        <ChatHeader/>
        <MessageSkeleton/>
        <MessageInput/>
        </div>
    )
}

  return (
    <div className="flex flex-col w-full h-full">
      {/* Header Section */}
      <ChatHeader/>

      {/* Messages Section */}
      <MessageInput/>

      {/* Input Section */}
      
    </div>
  );
};

export default ChatContainer;
