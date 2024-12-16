import '../css/employees.css'; 
import { Link } from 'react-router-dom';
import { useEffect, useState } from 'react';

function Employees (){

    // jsx  java script xml   

    const [Employee ,  setEmployee] = useState([]) ; 
    useEffect(()=>{
        fetch("https://localhost:44300/api/Employees").then((res)=> res.json()).then((data)=> setEmployee(data)) ; 
    },[]); 

    return (
        <>
            <h2 className='Title text-center my-5'>Employees</h2>

            <div className='container m-auto row'>
            {Employee.map((e) => {
                return(
                    
                    <div className="col-12 col-md-6 col-lg-4 my-5 ">
                        <Link to={`/employee/${e.ID}`} className='text-decoration-none'>
                            <div className='card p-2 bg-dark-subtle rounded-5 shadow-sm'>
                                <div className='image position-relative'>
                                    <img className='w-100 h-100'  src='../../images/al-azhar.png' alt="image"/>
                                </div>
                                <div className='text-center'>
                                    <h2 className='text-success-emphasis'>{e.FirstName} {e.LastName}</h2>
                                    <div className='p-4'>
                                        <p className='text-success'><span className='fw-bold text-black'>Salary: </span> {e.Salary} $</p>
                                        <p className='text-warning-emphasis'><span className='fw-bold text-black'>Gender: </span> {e.Gender}</p>
                                        
                                    </div>
                                </div>
                            </div>
                        </Link>
                    </div>
                );
            })}
            </div>
        
        </>
    );
};
export default Employees;