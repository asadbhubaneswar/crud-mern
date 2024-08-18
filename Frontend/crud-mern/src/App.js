import {Routes, Route} from 'react-router-dom'
import './App.css';
import Navbar from './Navbar';
import EmployeeList from './EmployeeList';
import AddEmployee from './AddEmployee';
import ViewEmployee from './ViewEmployee';
import UpdateEmployee from './UpdateEmployee';

function App() {
  return (
    <div className="App">
      <Navbar/>
   <Routes>
<Route path="/" element={<EmployeeList/>}/>
<Route path="/add" element={<AddEmployee/>}/>
<Route path="/view/:id" element={<ViewEmployee/>}/>
<Route path="/update/:id" element={<UpdateEmployee/>}/>
   </Routes>
    </div>
  );
}

export default App;
