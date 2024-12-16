import { useParams ,  useNavigate } from "react-router-dom"; 
import '../css/details.css'  ; 
import { useEffect, useState } from "react";
import Swal from 'sweetalert2' ; 


const EmployeesDetails = () => { 
    const { id } = useParams(); 
    const navigate = useNavigate(); 
    const [FirstName, setFirstName] = useState("");
    const [LastName, setLastName]  = useState("");
    const [Salary, setSalary]  = useState(0);
    const [Gender, setGender] = useState("");
    const [Employee ,  setEmployee] = useState({}) ; 

    useEffect(()=>{
        fetch(`https://localhost:44300/api/Employees/${id}`).then((res)=> res.json()).then((data)=> setEmployee(data)) ; 
    },[Employee]);

    const handleSubmit  = (e) => {
        e.preventDefault();
        const employee =  {FirstName, LastName, Salary, Gender};
        fetch(`https://localhost:44300/api/Employees/${id}`, {
            method: "PUT",
            headers: { "Content-Type": "application/json" },
            body: JSON.stringify(employee), // Convert blog object to JSON
        })
        .then((res) => res.json())
        .then((data) => {      
            setEmployee(data) ;
            const Toast = Swal.mixin({
                toast: true,
                position: "top-end",
                showConfirmButton: false,
                timer: 1000,
                timerProgressBar: true,
                didOpen: (toast) => {
                    toast.onmouseenter = Swal.stopTimer;
                    toast.onmouseleave = Swal.resumeTimer;
                }
            });
            Toast.fire({
            icon: "success",
            title: "Signed in successfully",
            iconColor:'#94ccee'
            });
        });
    };

    const  delete_employee = () =>{
        Swal.fire({
            title : `Are You Sure To Delete ${Employee.FirstName} ?` ,
            customClass: {
                confirmButton: "btn btn-danger",
                
            },
            showCancelButton: true 
        }).then((data) =>{
            if(data.isConfirmed)
            {
                fetch(`https://localhost:44300/api/Employees/${id}`,{method : "DELETE"}).then(()=>{ navigate("/employee");} ) ; 
                Swal.fire({
                    customClass: {
                        confirmButton: "btn btn-outline-primary",
                    },
                    title: "Done :)",
                    text: "You clicked the button!",
                    icon: "success",
                    iconColor:'#94ccee'
                }); 
            }
        })      
    };

    return(
        <>
        <div className="row container m-auto mid-vh-100 py-5">

            <div className="col-12 col-md-3">
                <div className="myImage m-auto mt-5">
                    <img className="w-100 h-100" src="../../images/al-azhar.png" alt="image"/>
                </div>
            </div>

            <div className="col-12 col-md-9 Card rounded-4 h-75 mt-5 py-5 pt-md-0 ">

                <div className='myCard bg-dark-subtle rounded-5'>
                    <div className='image position-relative'>
                        <img className='w-100 h-100'  src='../../images/al-azhar.png' alt="image"/>
                    </div>
                    <div className='text-center'>
                        <h2 className='text-success-emphasis'>{Employee.FirstName} {Employee.LastName}</h2>
                        <div className='py-4'>
                            <p className='text-success'><span className='fw-bold text-black'>Salary: </span> {Employee.Salary} $</p>
                            <p className='text-warning-emphasis'><span className='fw-bold text-black'>Gender: </span> {Employee.Gender}</p>
                        </div>
                    </div>
                </div>

                <div className="text-center mt-5">
                    <button type="button" class="btn btn-warning me-4" data-bs-toggle="modal" data-bs-target="#exampleModal">Update</button>
                    <button className="btn btn-outline-danger"   onClick={delete_employee}> Delete</button>
                </div>

                <div class="modal fade mt-5" id="exampleModal" tabindex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
                <div class="modal-dialog">
                    <div class="modal-content bg-info-subtle">
                        <div class="modal-header">
                            <h5 class="modal-title Title" id="exampleModalLabel">Update</h5>
                            <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                        </div>
                        <div class="modal-body">
                        <div className="Card d-flex justify-content-between align-items-center flex-column rounded-5 mb-5 mx-auto py-5">
                            <form className="w-75 text-center" onSubmit={handleSubmit}>  

                                <div className="my-4 d-flex justify-content-between flex-column flex-lg-row">
                                    <label className="fw-bold fs-6 me-3 my-2 my-lg-0">First Name : </label>
                                    <input
                                        type="text"
                                        required
                                        value={FirstName}
                                        onChange={(e) => setFirstName(e.target.value)}
                                        
                                    />
                                </div>

                                <div  className="my-4 d-flex justify-content-between flex-column flex-lg-row">
                                    <label className="fw-bold fs-6 me-3 my-2 my-lg-0">Last Name : </label>
                                    <input
                                        type="text"
                                        required
                                        value={LastName}
                                        onChange={(e) => setLastName(e.target.value)}
                                    />
                                </div>

                                <div className="my-4 d-flex justify-content-between flex-column flex-lg-row">
                                    <label className="fw-bold fs-6 my-2 my-lg-0">Salary :  </label>
                                    <input
                                        type="number"
                                        required
                                        value={Salary}
                                        onChange={(e) => setSalary(e.target.value)}
                                    />
                                </div>

                                <div  className="my-4 d-flex justify-content-between flex-column flex-lg-row">
                                    <label className="fw-bold fs-6  my-2 my-lg-0">Gender: </label>
                                    <select value={Gender} onChange={(e) => setGender(e.target.value)}>
                                        <option value="Male">Male</option>
                                        <option value="Female">Female</option>
                                    </select>
                                </div>

                                <button className="btn btn-outline-dark mt-5 w-50" data-bs-dismiss="modal"  aria-label="Close">Update</button>
                            </form>
                        </div>
                        </div>
                    </div>
                </div>
                </div>

            </div>
        </div>
        </>
    ); 


}; 


export default EmployeesDetails; 