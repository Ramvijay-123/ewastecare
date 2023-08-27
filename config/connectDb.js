const mongoose=require('mongoose');
const connectDb=()=>{
    mongoose.connect("mongodb+srv://bitbytecoders:bitbytecoder123@cluster0.shit8by.mongodb.net/ewaste").then((data,err)=>{
 
    if(err) console.log(err);
    else    console.log(`Mongodb  is connected ${data.connection.port}`);
}

)}
module.exports=connectDb