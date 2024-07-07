const mongoose=require('mongoose');
const connectDb=()=>{
    mongoose.connect("").then((data,err)=>{
 
    if(err) console.log(err);
    else    console.log(`Mongodb  is connected ${data.connection.port}`);
}

)}
module.exports=connectDb
