const mongoose = require("mongoose")
const Schema = mongoose.Schema
const EmployeeSchema = new Schema({
    name:{
        type:String,
        required: true,
        trim: true
    },
    email:{
        type:String,
        required:true,
        trim:true
    },
    gender:{
        type: String,
        required: true,
    },
    age:{
        type: Number,
        required:true,
        trim:true
    }
})
const Employee = mongoose.model("Employee", EmployeeSchema)
module.exports = Employee