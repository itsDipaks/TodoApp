const mongoose=require("mongoose")
const { GetCurrentTime, GetCurrentDate } = require("../utilities/GettimeData")

const getTime=GetCurrentTime()
const getDate=GetCurrentDate()

const TodoSchema=mongoose.Schema({
    todo:{type:String},
    todoaddedTime:{type:String,default:getTime},
    todoaddedDate:{type:String,default:getDate},
    user_id:{type:String,required:true},
    Status:{type:Boolean,default:false,enum:[false,true]}
})


const TodoModel=mongoose.model("Todo",TodoSchema)

module.exports={TodoModel}