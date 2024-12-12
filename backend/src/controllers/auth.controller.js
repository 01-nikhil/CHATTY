import cloudinary from "../lib/cloudinary.js";
import { genToken } from "../lib/utils.js";
import User from "../models/user.model.js";
import bcrypt from 'bcryptjs';

export const signUp= async(req,res)=>{
    const {email,fullName,password} =req.body;
    // console.log(req.body);
    try {

        if(password.length<6){
            return res.status(400).json({message:"Password must be atleast 6 characters"});
        }
        const check = await User.findOne({ email });
    if (check) {
      console.log("Email already exists:", email);  // Log if email is already taken
      return res.status(400).json({ message: "Email already exists" });
    }

        const salt=await bcrypt.genSalt(10);
        const hashedPassword=await bcrypt.hash(password,salt);

        const newUser= new User({
            email,
            fullName,
            password:hashedPassword,

        })
        
        if(newUser){
            //create a token nikhil
            genToken(newUser._id,res);
            await newUser.save();

            res.status(201).json({
                _id:newUser._id,
                fullName:newUser.fullName,
                email:newUser.email,
                profile:newUser.profile,
            });
        }
        else{
            return res.status(500).json({message:"Error in signup"});
        }
        
    } catch (error) {
        
        return res.status(500).json({message:"Internal server error signup"});
    }
}
export const logIn=async (req,res)=>{
    const {email,password}=req.body;
    try {
        const user=await User.findOne({email});
    if(!user){
        return res.status(401).json({message:"Invalid credentials"});
    }
    const isPassword=await bcrypt.compare(password,user.password);
    if(!isPassword){
        return res.status(401).json({message:"Invalid credentials"});
    }
    
    genToken(user._id,res);
    res.status(200).json({
        _id:user._id,
        fullName:user.fullName,
        email:user.email,
        profile:user.profile,
    })
    
    } catch (error) {
        res.status(501).json({message:"Internal server error"});
    }
    
}
export const logOut= (req,res)=>{
    try {
        res.cookie("jwt","",{maxAge:0});
        res.status(200).json({message:"Logged out successfully"});
    } catch (error) {

        res.status(500).json({message:"Internal server error logout"});
    }
}

export const updateProfile = async (req, res) => {
    try {
      const { profile, fullName, email } = req.body; // Destructure profile, fullName, and email from the request body
  
      if (!profile && !fullName && !email) {
        return res.status(400).json({ message: 'No data to update' }); // Return an error if no data is provided
      }
  
      const userId = req.user._id;
      if (!userId) {
        return res.status(400).json({ message: 'User not found' });
      }
  
      // Update profile picture if provided
      let updatedFields = {};
      if (profile) {
        const response = await cloudinary.uploader.upload(profile);
        updatedFields.profile = response.secure_url;
      }
  
      // Update full name if provided
      if (fullName) {
        updatedFields.fullName = fullName;
      }
  
      // Update email if provided
      if (email) {
        updatedFields.email = email;
      }
  
      // Perform the update
      const updatedProfile = await User.findByIdAndUpdate(userId, updatedFields, { new: true });
  
      if (!updatedProfile) {
        return res.status(404).json({ message: 'User not found' });
      }
  
      return res.status(200).json(updatedProfile); // Return the updated profile
  
    } catch (error) {
      console.error(error);
      return res.status(500).json({ message: 'Error in updating profile' });
    }
  };
  

    export const checkAuth = (req, res) => {
        try {
          res.status(200).json(req.user);
        } catch (error) {
          console.log("Error in checkAuth controller", error.message);
          res.status(500).json({ message: "Internal Server Error" });
        }
      };  

