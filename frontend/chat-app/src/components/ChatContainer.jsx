import React, { useEffect, useRef, useState } from 'react';
import { useChatStore } from '../store/useChatStore';
import { useAuthStore } from '../store/useAuthStore';
import ChatHeader from './ChatHeader';
import MessageSkeleton from './skeletons/MessageSkeleton';
import MessageInput from './MessageInput';
import { formatMessageTime } from '../lib/utils';

const ChatContainer = () => {
  const {
    selectedUser,
    messages,
    getMessages,
    isMessageLoading,
    subscribeToMessages,
    unSubscribeFromMessages,
  } = useChatStore();
  const {authUser}=useAuthStore();

  useEffect(() => {
    getMessages(selectedUser._id);
    subscribeToMessages();
    return () => {
      unSubscribeFromMessages();
    };
    
  }, [selectedUser._id, getMessages,subscribeToMessages,unSubscribeFromMessages]);

  const chatEndRef = useRef(null); 
    useEffect(() => {
        if (chatEndRef.current && messages) {
            chatEndRef.current.scrollIntoView({ behavior: 'smooth' });
        }
    }, [messages]); 

  // useEffect(() => {
  //   // Log messages every time they update
  //   console.log('Messages:', messages);
  // }, [messages]);

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
    <div className="flex-1 flex flex-col overflow-auto">
      {/* Header Section */}
      <ChatHeader/>

      <div className='flex-1 overflow-y-auto p-4 space-y-4'>
        {messages.map((message)=>(
          <div 
          key={message._id}
          className={`chat ${message.senderId===authUser._id ? "chat-end" : "chat-start"}`}
          ref={chatEndRef}>
            <div className='chat-image avatar'>
              <div className='size-10 rounded-full border'>
                <img src={message.senderId===authUser._id ? authUser.profile ||'/avatar.png' :
                  selectedUser.profile || '/avatar.png'
                }/>
                </div>
              </div>

              <div className='chat-header mb-1'>
                <time className='text-xs  opacity-50'>{formatMessageTime(message.createdAt)}</time>
                </div>
                <div className='chat-bubble bg-base-100 flex flex-col'>
                  {message.image&&(
                    <img src={message.image}
                    className='sm:max-w-[200px] rounded-md mb-2'/>
                  )}
                  {message.text&& <p>{message.text}</p>}
                  </div>
            </div>
        ))}
      </div>
      {/* Messages Section */}
      <MessageInput/>

      {/* Input Section */}
      
    </div>
  );
};

export default ChatContainer;
