import { useState } from 'react';
import { Link } from 'react-router-dom';
import '../css/navbar.css' ; 

function Navbar (){

    const [activeIndex, setActiveIndex] = useState(1);
    const handleClick = (index) => {
        setActiveIndex(index); 
    };

return (
    
    <nav className="navbar navbar-expand-lg navbar-dark bg-dark sticky-top">
    <div className="container">
        <Link className="title fs-3 mx-3" to='/'>Employees</Link>
        <button className="navbar-toggler" type="button" data-bs-toggle="offcanvas" data-bs-target="#offcanvas" aria-controls="offcanvas" aria-expanded="false" aria-label="Toggle navigation">
            <span className="navbar-toggler-icon"></span>
        </button>
        
        <div className="offcanvas offcanvas-end bg-dark text-white" tabindex="-1" id="offcanvas" aria-labelledby="offcanvasLabel">
            <div className="offcanvas-header">
                <h5 className="title offcanvas-title" id="offcanvasLabel">Employees</h5>
                <button type="button" className="btn-close bg-white" data-bs-dismiss="offcanvas" aria-label="Close"></button>
            </div>
            <div className="offcanvas-body mx-auto ms-lg-auto mx-lg-0  ">
                <ul className="navbar-nav me-auto mb-2 mb-lg-0 ">
                    <li className="nav-item my-sm-3">
                        <div className={`navbar-item mx-3 ${activeIndex === 1 ? "active" : ""}`} onClick={() => handleClick(1)}>
                            <Link className="l text-decoration-none text-white" to='/'>
                                <i class="fa-solid fa-house me-1"></i>
                                Home
                            </Link>
                        </div>
                    </li>
                    <li className="nav-item  my-3">
                        <div className={`navbar-item mx-3 ${activeIndex === 2 ? "active" : ""}`} onClick={() => handleClick(2)}>
                            <Link className="l text-decoration-none text-white" to='/employee'>
                                <i class="fa-solid fa-users me-1"></i>
                                Employees
                            </Link>
                        </div>
                    </li>
                    <li className="nav-item  my-3">
                    <div className={`navbar-item mx-3 ${activeIndex === 3 ? "active" : ""}`} onClick={() => handleClick(3)}>
                        <Link className="l text-decoration-none text-white" to='/create'>
                            <i class="fa-solid fa-user-plus me-1"></i>
                            New
                        </Link>
                        </div>
                    </li>
                    <li className="nav-item  my-3">
                    <div className={`navbar-item mx-3 ${activeIndex === 4 ? "active" : ""}`} onClick={() => handleClick(4)}>
                        <Link className="l text-decoration-none text-white" to='/search'>
                            <i class="fa-solid fa-search me-1"></i>
                        </Link>
                        </div>
                    </li>
                </ul> 
            </div>
        </div>

    </div>
    </nav>
    
);
}
export default Navbar;