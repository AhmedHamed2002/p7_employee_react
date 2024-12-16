import './App.css';
import Navbar from './components/Navbar';
import Home from './components/Home';
import { Route, Routes } from 'react-router-dom';
import Create from './components/Create';
import Notfound from './components/Notfound';
import EmployeesDetails from './components/EmployeeDetails';
import Employees from './components/Employees';
import Search from './components/Search';

function App() {
  return (
    <>
    <Navbar/>
    
    <main>
    <Routes>
      <Route path="/" element = {<Home/>}/>
      <Route path="create" element = {<Create/>}/>
      <Route path="search" element = {<Search/>}/>
      <Route path="employee" element = {<Employees/>}/>
      <Route path="/employee/:id"  element= {<EmployeesDetails/>}/> 
      <Route path="*" element = {<Notfound/>}/>
    </Routes>
    </main>
  </>
  );
}

export default App;
