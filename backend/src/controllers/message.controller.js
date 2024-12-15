import cloudinary from "../lib/cloudinary.js";
import Message from "../models/message.model.js";
import User from "../models/user.model.js";

export const getUsersForSidebar=async (req,res)=>{
    try {
        const loggedInUserId=req.user._id;
        const loggedUser=await User.find({_id:{$ne:loggedInUserId}}).select("-password");

        res.status(200).json(loggedUser);
    } catch (error) {
        res.status(500).json({message:"Internal Server Error"})
    }
}

export const getMessages=async(req,res)=>{
    try {
        const {id: userToChatId}=req.params;
        const myId=req.user._id;

        const messages=await Message.find({
            $or:[
                {senderId:myId,receiverId:userToChatId},
                {senderId:userToChatId,receiverId:myId}
            ]
        })

        res.status(200).json(messages);
    } catch (error) {
        res.status(500).json({message:"Internal Server Error Messages"});
    }
}

export const sendMessages=async (req,res)=>{
    try {
        
        const {text,image}=req.body;
        const {id:receiverId}=req.params;
        const myId=req.user._id;
        
        let imageUrl;
        if(image){
            const uploadedImage=await cloudinary.uploader.upload(image);
            imageUrl=uploadedImage.secure_url;
    }
    
    const newMessage = new Message({
        senderId:myId,
        receiverId:receiverId,
        text:text,
        image:imageUrl,
    });
    await newMessage.save();
    res.status(201).json(newMessage);
} catch (error) {
    res.status(500).json({message:"Internal Server Error sendMessages"});
}
}