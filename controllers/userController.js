
const userModel= require("../models/userModel")
// login callback
const loginController=async (req,res)=>{
    try {
        const {email,password}=req.body;
        const user=await userModel.findOne({email,password});
        if(!user){
            return res.status(404).send("user Not Found");
        }
        console.log("login ")
        res.status(200).json({
            success:true,
            user
        });
    }
     catch (error) {
        console.log("login error")

        res.status(400).json({
            success:false,
            error
        });
    }
}

//register callback
const registerController=async (req,res)=>{
    try {
        console.log(req.body)
        const newUser= new userModel(req.body);
        await newUser.save();
        console.log("register ")

        res.status(201).json({
            success:true,
            newUser
        });
    } catch (error) {
        console.log("register error")

        res.status(400).json({
            success:false,
            error
        });
    }
}

module.exports={loginController,registerController}