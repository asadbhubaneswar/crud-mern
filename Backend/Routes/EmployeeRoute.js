const express = require("express")
const router = express.Router()
const {getEmployees, addEmployee, updateEmployee, deleteEmployee, viewEmployee } = require('../Controllers/EmployeeController')

router.get('/employees', getEmployees)
router.post('/employee/add', addEmployee)
router.get('/employee/:id', viewEmployee)
router.delete('/employee/delete/:id', deleteEmployee)
router.put('/employee/update/:id', updateEmployee)

module.exports = router