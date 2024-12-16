import { useState} from "react";
import '../css/create.css' ; 
import Swal from 'sweetalert2' ; 

const Create = () => {
    const [FirstName, setFirstName] = useState("");
    const [LastName, setLastName]  = useState("");
    const [Salary, setSalary]  = useState(0);
    const [Gender, setGender] = useState("");

    const handleSubmit  = (e) => {
        e.preventDefault();
        const employee =  {FirstName, LastName, Salary, Gender};
        fetch("https://localhost:44300/api/Employees", {
            method: "POST",
            headers: { "Content-Type": "application/json" },
            body: JSON.stringify(employee), // Convert blog object to JSON
        })
        .then((res) => res.json())
        .then(() => {      
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
    return (
        <>
        <h2 className="Title text-center my-5">Add a new employee </h2>
        <div className="Card d-flex justify-content-between align-items-center flex-column w-50 rounded-5 mb-5 mx-auto py-5">
            <form className="w-75 text-center" onSubmit={handleSubmit}>  

                <div className="my-4 d-flex justify-content-between flex-column flex-lg-row">
                    <label className="fw-bold fs-6  my-2 my-lg-0">First Name : </label>
                    <input
                        type="text"
                        required
                        value={FirstName}
                        onChange={(e) => setFirstName(e.target.value)}
                        
                    />
                </div>

                <div  className="my-4 d-flex justify-content-between flex-column flex-lg-row">
                    <label className="fw-bold fs-6  my-2 my-lg-0">Last Name : </label>
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

                <button className="btn btn-outline-dark mt-5 w-50">Add</button>
            </form>
        </div>
        </>
    );
}; 

export default Create  ;  