import React, {useEffect, useState} from 'react'
import axios from 'axios'
import {useSelector,useDispatch} from 'react-redux'
import {fetchEmployees, deleteEmployee as deletingEmployee} from './employeeSlice'
import { useNavigate, Link } from 'react-router-dom'
export default function EmployeeList() {
  
const listOfEmployees = useSelector(state=> state.employees.employeeList)
const navigate = useNavigate
 const dispatch = useDispatch()
useEffect( ()=>{
 dispatch(fetchEmployees())
 deleteEmployee()
},[listOfEmployees])

const deleteEmployee = (id)=>{
  dispatch(deletingEmployee(id))
}
// const editEmployee = (id)=>{
//   navigate(`/update/${id}`)
// }

  return (
    <div>
      <h1>Employee List</h1>
      <table class="table">
  <thead>
    <tr>
      <th scope="col">Name</th>
      <th scope="col">Email</th>
      <th scope="col">Gender</th>
      <th scope="col">Age</th>
      <th scope="col">Action</th>


    </tr>
  </thead>
  <tbody>
    {
      listOfEmployees.map(emp=>

      (
<tr key={emp._id}>
      <td>{emp.name}</td>
      <td>{emp.email}</td>
      <td>{emp.gender}</td>
      <td>{emp.age}</td>
      <td>
        <Link to={`/update/${emp._id}`}>Edit</Link>
        <button onClick={()=>deleteEmployee(emp._id)}>Delete</button>
      </td>
    </tr>
      ))
    }
    
  </tbody>
</table>
    </div>
  )
}
