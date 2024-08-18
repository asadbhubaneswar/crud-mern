import React, { useState } from 'react'
import { useDispatch } from 'react-redux'
import {addEmployee as addNewEmployee} from './employeeSlice'
export default function AddEmployee() {
    const[addEmployee,setAddEmployee] = useState({
        name:'',
        email:'',
        gender:'male',
        age:''
    })
const dispatch = useDispatch()
    const handleChange = (e)=>{
        const {name, value} = e.target
        setAddEmployee({...addEmployee, [name]: value})
    }

    const handleSubmit = (e)=>{
        e.preventDefault()
        console.log(addEmployee.name)
        console.log(addEmployee.email)
        console.log(addEmployee.gender)
        console.log(Number(addEmployee.age))
        dispatch(addNewEmployee(addEmployee))
    }

  return (
    <div>
        <form onSubmit={handleSubmit}>
  <div className="form-group">
    <label for="exampleInputEmail1">Name of Employee</label>
    <input onChange={handleChange} value={addEmployee.name} type="text" name='name' className="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" placeholder="Enter Name"/>
  </div>
  <div class="form-group">
    <label for="exampleInputPassword1">Email</label>
    <input onChange={handleChange} type="email" value={addEmployee.email} name='email' className="form-control" id="exampleInputPassword1" placeholder="Email"/>
  </div>
  <div class="form-group">
    <label for="exampleInputPassword1">Age</label>
    <input onChange={handleChange} value={addEmployee.age} type="number" name='age' className="form-control" id="exampleInputPassword1" placeholder="Age"/>
  </div>
  <div className="form-group">
    <label for="exampleInputPassword1">Select Gender</label>
    <select onChange={handleChange} value={addEmployee.gender} className="form-control" id="gender" placeholder="Gender" name='gender'>
        <option value='Male'>Male</option>
        <option value='Female'>Female</option>
    </select>
  </div>
  <button type="submit" className="btn btn-primary">Submit</button>
</form>
    </div>
  )
}
