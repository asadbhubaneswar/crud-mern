
const Employee = require('../Models/EmployeeModel')

const addEmployee = async (req,res)=>{
   try{
      console.log("received Data:", req.body)
      const employee = new Employee({
         name: req.body.name,
         email: req.body.email,
         gender: req.body.gender,
         age:req.body.age
        })
        const addedEmployee = await employee.save()
        console.log('AddedEmployee:', addedEmployee)
        res.json(addedEmployee)
   }catch(error){
console.error("Error saving employee:", error)
res.status(500).json({message:"failed adding employee", error})
   }
  
}

   const getEmployees = async (req,res)=>{
      try{
         const employeeList = await Employee.find()
   res.status(200).json(employeeList)
      }catch(error){
   console.log("Error:", error)
   res.status(500).json({message:'The is an error in fetching data', error})
      }
   }

const deleteEmployee = async (req,res) =>{
   try{
const deletedEmployee = await Employee.findByIdAndDelete(req.params.id)
res.status(200).json(deletedEmployee)
   }catch(error){
res.status(500).json({message:"Error in deleting", error})
   }
}

const viewEmployee = async (req,res)=>{
   try{
      const employeeDataByID = await Employee.findById(req.params.id)
      res.status(200).json(employeeDataByID)
   }catch(error){
console.error("Error:", error)
res.status(500).json({message:"Could not fetch employee", error})
   }

}

const updateEmployee = async (req,res)=>{
   try{
      const updatedEmployee = await Employee.findByIdAndUpdate(req.params.id,{
         name:req.body.name,
         email:req.body.email,
         gender: req.body.gender,
         age: req.body.age
            },
         {
            new:true,
            runValidators:true
         }) 
            res.status(200).json(updatedEmployee)
   }catch(error){
console.error("Error in update:", error)
res.status(500).json({message:"Could not update", error})
   }
   

}

exports.addEmployee = addEmployee
exports.getEmployees = getEmployees
exports.deleteEmployee = deleteEmployee
exports.viewEmployee = viewEmployee
exports.updateEmployee = updateEmployee