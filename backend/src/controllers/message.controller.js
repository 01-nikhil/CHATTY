import cloudinary from "../lib/cloudinary.js";
import { getReceiverSocetId, io } from "../lib/socket.js";
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

export const getMessages = async (req, res) => {
    try {
      const { id: userToChatId } = req.params;
      const myId = req.user._id;
  
      const messages = await Message.find({
        $or: [
          { senderId: myId, receiverId: userToChatId },
          { senderId: userToChatId, receiverId: myId },
        ],
      });
  
      res.status(200).json(messages);
    } catch (error) {
      console.log("Error in getMessages controller: ", error.message);
      res.status(500).json({ error: "Internal server error" });
    }
  };

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

    //socket connection to that particular user
    const receiverSocketId=getReceiverSocetId(receiverId);
    if(receiverSocketId){
        io.to(receiverSocketId).emit("newMessage",newMessage);
    }
    res.status(201).json(newMessage);

} catch (error) {
    res.status(500).json({message:"Internal Server Error sendMessages"});
}
};

export const clearMessages = async (req, res) => {
  try {
    const myId = req.user._id; // Logged-in user's ID
    const { id: receiverId } = req.params; // Selected user's ID
    const messages = await Message.find({
      $or: [
        { senderId: myId, receiverId },
        { senderId:receiverId, receiverId: myId },
      ],
    });

    if (messages.length === 0) {
      // No messages to clear
      return res.status(204).json({ message: "No messages to clear" }); // Use 204 No Content
    }
    // Delete all messages between the logged-in user and the receiver
    if(messages){

      await Message.deleteMany({
        $or: [
          { senderId: myId, receiverId },
          { senderId: receiverId, receiverId: myId },
        ],
        
      });
      res.status(200).json({ message: "Messages cleared successfully" });
    }
    else
    {
      res.status(400).json({messgae:"No messages to clear"})
    }
    console.log('Messgae clearing is working');
  } catch (error) {
    console.error("Error clearing messages:", error.message);
    res.status(500).json({ message: "Internal Server Error" });
  }
};
