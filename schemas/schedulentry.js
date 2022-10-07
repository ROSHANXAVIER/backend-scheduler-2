var mongoose=require('mongoose');

const SchedulerSchema=new mongoose.Schema({
    title:{type:String,default:'unknown'},
    body:{type:String,default:'unknown'},
    date:{type:Date,default:Date.now}},
    {collection:'SCHEDULE'}
)
const s1=mongoose.model('SchedulerModel',SchedulerSchema)
module.exports=s1;