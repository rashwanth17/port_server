const mongoose = require('mongoose')

mongoose.connect(process.env.MONGOURL || "mongodb+srv://rashwanth:rash_1528@in-aws.8bzkc.mongodb.net/?retryWrites=true&w=majority&appName=in-aws")

const connection = mongoose.connection;
connection.on('connected',()=>{
    console.log("DB Connected")
})

connection.on('error',()=> console.log("DB Error"))

module.exports=mongoose