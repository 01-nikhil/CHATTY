import { create } from 'zustand';
import { axiosInstance } from '../lib/axios';
import toast from 'react-hot-toast'; // Ensure you install react-toastify if not already installed
import { useAuthStore } from './useAuthStore';

export const useChatStore = create((set,get) => ({
    users: [],
    messages: [],
    selectedUser: null,
    isMessageLoading: false,
    isUserLoading: false,

    getUsers: async () => {
        try {
            set({ isUserLoading: true });
            const res = await axiosInstance.get('/messages/users');
            set({ users: res.data });
        } catch (error) {
            toast.error(error.response?.data?.message || 'Failed to load users');
        } finally {
            set({ isUserLoading: false });
        }
    },

    getMessages: async (userId) => {
        try {
            set({ isMessageLoading: true });
            const res = await axiosInstance.get(`/messages/${userId}`);
            set({ messages: res.data });
        } catch (error) {
            toast.error(error.response?.data?.message || 'Failed to load messages');
        } finally {
            set({ isMessageLoading: false });
        }
    },
    
    sendMessages: async (messageData) => {
        const { selectedUser, messages } = get();
        try {
            const res = await axiosInstance.post(`/messages/send/${selectedUser._id}`, messageData);
            set({ messages: [...messages, res.data] });
        } catch (error) {
            toast.error(error.response.data.message);
        }
    },
    
      subscribeToMessages:()=>{
          const {selectedUser,messages}=get();
          const socket=useAuthStore.getState().socket;
          if(!selectedUser) return;
          
          socket.on('newMessage',(newMessage)=>{
              console.log("Socket received message1233:");
              const isMessageFromSelectedUser = newMessage.senderId === selectedUser._id;
              if(!isMessageFromSelectedUser) return;
              
            set({
                  messages:[...get().messages,newMessage]
                });
                console.log("Socket received message:",newMessage);
            });
            
        },
        unSubscribeFromMessages:()=>{
            const socket=useAuthStore.getState().socket;
            socket.off('newMessage');
        },

        clearMessages: async (userId) => {
            try {    
              const res=await axiosInstance.delete(`/messages/clear/${userId}`);
              set({ messages: [] }); // Clear messages in the store
              if (res.status === 204) {
                toast.info("No messages to clear"); // Inform the user
              } else {
                set({ messages: [] }); // Clear messages in the store
                toast.success("Chat cleared successfully");
              }
            } catch (error) {
              toast.error(error.response?.data?.message || "Failed to clear chat");
            }
          },          
    
        setSelectedUser:(selectedUser)=>set({selectedUser}),
    }));
