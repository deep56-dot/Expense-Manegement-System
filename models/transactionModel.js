const mongoose= require('mongoose')

const transactionSchema=new mongoose.Schema(
    {
        userid:{
            type:String,
            require:[true,"userid is required"]
        },
        amount:{
            type:Number,
            required:[true,"amount is required"]
        },
        type:{
            type:String,
            required:[true,'type is required']
        },
        catagory:{
            type:String,
            required:[true,'catagory is required']
        },
        refrence:{
            type:String
        },
        description:{
            type:String,
            required:[true,'description is required']
        },
        date:{
            type:Date,
            required:[true,'date is required']
        }
    },
    {timestamps:true}
)

const transactionModel=mongoose.model("transactions",transactionSchema)
module.exports=transactionModel;