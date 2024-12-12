import { create } from "zustand";
import { axiosInstance } from "../lib/axios";

import toast from "react-hot-toast";

export const useAuthStore=create((set)=>({
    authUser:null,
    isSigningUp:false,
    isLoggingIn:false,
    isUpdatingProfile:false,
    isCheckingAuth:true,

    checkAuth: async () => {
      try {
        const res = await axiosInstance.get("/auth/check");
  
        set({ authUser: res.data });
        // console.log(res.data);
        // get().connectSocket();
      } catch (error) {
        console.log("Error in checkAuth:", error);
        set({ authUser: null });
      } finally {
        set({ isCheckingAuth: false });
      }
    },

   signup: async (data) => {
    set({ isSigningUp: true });
    try {
      const res = await axiosInstance.post("/auth/signup", data);
      set({ authUser: res.data });
      toast.success("Account created successfully");
      // get().connectSocket();
    } catch (error) {
      toast.error("Email prob: "+error.response.data.message);
    } finally {
      set({ isSigningUp: false });
    }
  },

  logout:async()=>{
    try {
      await axiosInstance.post("/auth/logout");
      set({authUser:null})
      toast.success("Logged out successully");
    } catch (error) {
      toast.error("Something went wrong");
      console.log("Error in logging out");
    }
  },

  login:async(data)=>{
    try {
      const res=await axiosInstance.post('/auth/login',data);
      set({authUser:res.data});
      toast.success("Logged in Succesfully");
    } catch (error) {
      toast.error(error.response.data.message);
    }finally{
      set({isLoggingIn:false});
    }
  },

  updateProfile: async (data) => {
    set({isUpdatingProfile:true});
    try {
      const res=await axiosInstance.put('/auth/update-profile',data);
      set({authUser:res.data});
      toast.success("Profile updated Successfully");
    } catch (error) {
        console.log("Error in profile update",error);
        toast.error("Error:"+error.response.data.message);
    }finally{
      set({isUpdatingProfile:false});
    }
  },
}));