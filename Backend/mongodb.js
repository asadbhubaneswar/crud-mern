require('dotenv').config()

const mongoose = require("mongoose")
const connectDB = async()=>{
try{
await mongoose.connect(process.env.DATABASE_URL)
console.log('DB connected')
}catch(error){
console.error('Error:', error)
}

    
}
module.exports = connectDB