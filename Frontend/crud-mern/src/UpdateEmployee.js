import React from 'react'
import {useState, useEffect} from 'react'
import {useParams} from 'react-router-dom'
import { useDispatch } from 'react-redux'
import {updatingEmployee} from './employeeSlice'
import axios from 'axios'
export default function UpdateEmployee() {
  const[editData, setEditData]= useState({
    name:'',
    email:'',
    gender:'',
    age:''
  })
  const dispatch = useDispatch()
const {id} = useParams()
  useEffect(()=>{
EditEmployeeData()
  },[id])
  const base_url = 'http://localhost:5000'

const EditEmployeeData = async() =>{
try{
const response = await axios.get(`${base_url}/employee/${id}`)
console.log(response.data)
setEditData(response.data)
}catch(error){
console.error(error)
}
}

const handleChange = (e)=>{
  const {name,value}= e.target
  setEditData({...editData, [name]:value})
}

const handleSubmit = (e)=>{
  e.preventDefault()
  console.log("Dispatching:", { id }); // Add this line for debugging

  dispatch(updatingEmployee({id, updatedData:editData}))
}

  return (
    <div>
           <form onSubmit={handleSubmit} >
  <div className="form-group">
    <label for="exampleInputEmail1">Name</label>
    <input onChange={handleChange} value={editData.name} type="text" name='name' className="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" placeholder="Enter Name"/>
  </div>
  <div class="form-group">
    <label for="exampleInputPassword1">Email</label>
    <input onChange={handleChange} type="email" value={editData.email} name='email' className="form-control" id="exampleInputPassword1" placeholder="Email"/>
  </div>
  <div class="form-group">
    <label for="exampleInputPassword1">Age</label>
    <input onChange={handleChange} value={editData.age} type="number" name='age' className="form-control" id="exampleInputPassword1" placeholder="Age"/>
  </div>
  <div className="form-group">
    <label for="exampleInputPassword1">Select Gender</label>
    <select onChange={handleChange} value={editData.gender} className="form-control" id="gender" placeholder="Gender" name='gender'>
        <option value='Male'>Male</option>
        <option value='Female'>Female</option>
    </select>
  </div>
  <button type="submit" className="btn btn-primary">Submit</button>
</form>
    </div>
  )
}
