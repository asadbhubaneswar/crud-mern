import {createSlice, createAsyncThunk} from '@reduxjs/toolkit'
import axios from 'axios'

const base_url = 'http://localhost:5000'

export const addEmployee = createAsyncThunk('employees/addEmployee',async(newEmployee)=>{
    const response = await axios.post(`${base_url}/employee/add`, newEmployee)
    return response.data
})

export const fetchEmployees = createAsyncThunk('employees/fetchEmployees', async()=>{
    const response = await axios.get(`${base_url}/employees`)
    return response.data
})
export const deleteEmployee = createAsyncThunk('employees/deleteEmployee', async(id)=>{
     await axios.delete(`${base_url}/employee/delete/${id}`)
     return id
})

export const updatingEmployee = createAsyncThunk('employees/updatingEmployee', async({id, updatedData})=>{
const response = await axios.put(`${base_url}/employee/update/${id}`, updatedData)
return response.data
})

const employeeSlice = createSlice({
    name:'employees',
    initialState:{
        employeeList:[]
    },
    reducers:{},
    extraReducers:(builder)=>{
builder
.addCase(addEmployee.fulfilled,(state,action)=>{
    state.employeeList.push(action.payload)
})
.addCase(fetchEmployees.fulfilled, (state,action)=>{
    state.employeeList = action.payload
})
.addCase(deleteEmployee.fulfilled, (state,action)=>{
    state.employeeList = state.employeeList.filter(emp=> emp.id !== action.payload)
})
.addCase(updatingEmployee.fulfilled, (state,action)=>{
    const index = state.employeeList.findIndex(emp=> emp.id === action.payload.id)
    state.employeeList[index]= action.payload
})
    }
})

export default employeeSlice.reducer