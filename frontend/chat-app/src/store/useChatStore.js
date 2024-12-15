import create from 'zustand';
import { axiosInstance } from '../lib/axios';
import { getMessages } from '../../../../backend/src/controllers/message.controller';

const useChatStore=create((set)=>({
    users:[],
    messages:[],
    selectedUser:null,
    isMessageLoading:false,
    isUserLoading:false,
}));

getUsers:async()=>{
    try {
        set({isUserLoading:true});
        const res=await axiosInstance.get('/messages/users');
        set({users:res.data});
    } catch (error) {
        toast.error(error.response.data.message);
    }
    finally{
        set({isUserLoading:false});
    }
}

getMessages:async(userId)=>{
    try {
        set({isMessagesLoading:true});
        const res=await axiosInstance.get(`/messages/${userId}`)
        set({messages:res.data});
    } catch (error) {
        toast.error(error.response.data.message);
    }
    finally{
        set({isMessageLoading:false});
    }
}

