
const express=require('express')
const mongoose=require('mongoose')
const bodyParser=require('body-parser')
const path=require('path')
const cors=require('cors')
const s1=require('./schemas/schedulentry');
const app=express()
app.use(bodyParser.json())
app.use(bodyParser.urlencoded({extended:true}))
app.use(cors({origin: true, credentials: true}))

//connection
mongoose.connect('mongodb+srv://roshanxavier24:roshxavier@cluster0.1rjoo.mongodb.net/scheduler?retryWrites=true&w=majority',{
    useNewUrlParser:true,
    useUnifiedTopology:true
}).then(()=>{
    console.log('connection successful')

}).catch((error)=>{
    console.log('some error',error)
})

//email
let nodemailer = require('nodemailer');

hello();
 async function hello (){
    const resultz=await s1.findOneAndDelete({date:{$lt:Date.now()}});
    console.log(resultz)}
n();
async function n(){
    
    
        var start = new Date();
        start.setHours(0,0,0,0);
    
        var end = new Date();
        end.setHours(23,59,59,999);
        const results=await s1.find({date:{$gte: start, $lt: end}});
               
           
        
        results.map(each=>{console.log(each)
        const froms='u2004061@rajagiri.edu.in';
        const tos='rxgody@gmail.com'
        const frps='roshXAVIER01+';
        const subs=each.title+"(TODAYS SCHEDULE BY SCHEDULER)";
        const tes=each.body;
        const nodemailer = require('nodemailer');
    let mailOptions = {
        from: froms,
        to: tos,
        subject: subs,
        text: tes
    };
    let transporter = nodemailer.createTransport({
        service: 'gmail',
        auth: {
          user: froms,
          pass: frps
        }
    });
        transporter.sendMail(mailOptions, function(error, info){
            if (error) {
              console.log(error);
            } else {
              console.log('Email sent');
            }
      });
       });
    };
    