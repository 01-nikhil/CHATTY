import { create } from 'zustand';
import { axiosInstance } from '../lib/axios';
import toast from 'react-hot-toast'; // Ensure you install react-toastify if not already installed

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
    setSelectedUser:(selectedUser)=>set({selectedUser}),

    sendMessages:async(messageData)=>{
        const {selectedUser,messages}=get();
        try {
            const res=await axiosInstance.post(`/messages/send/${selectedUser._id}`,messageData);
            set({messages:[...messages,res.data]});

        } catch (error) {
            toast.error(error.response?.data?.message +" send messages");
        }
        
    }

}));
