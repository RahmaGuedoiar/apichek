const User=require("../Models/User")
const CreateUser=async(req,res)=>{
    try {
        const CreateUser=await User.create(req.body)
        res.status(201).json({msg:"User is created",CreateUser})
    } catch (error) {
        res.status(500).json({msg:"Somthing went wrong",error})
    }
}
const GetUser=async(req,res)=>{
    try {
        const GetUser=await User.find()
        res.status(201).json({msg:"User is geted",Users:GetUser})
    } catch (error) {
        res.status(500).json({msg:"Somthing went wrong",error})
    }
}
const UpdateUser=async(req,res)=>{
    try {
        const UpdateUser=await User.findByIdAndUpdate({_id:req.params.a},req.body,{new:true})
        res.status(201).json({msg:"User is updated",UpdateUser})
    } catch (error) {
        res.status(500).json({msg:"Somthing went wrong",error})
    }
}
const DeleteUser=async(req,res)=>{
    try {
        const DeleteUser=await User.findByIdAndDelete({_id:req.params.a})
        res.status(201).json({msg:"User is deleted",DeleteUser})
    } catch (error) {
        res.status(500).json({msg:"Somthing went wrong",error})
    }
}
module.exports={ CreateUser,GetUser,UpdateUser,DeleteUser}