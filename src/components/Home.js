import React from 'react'
import  './../css/home.css'; 

export default function Home() {
  return (
  //  jsx  
    <div className="main vh-100 w-100 overflow-hidden">
        <img src='../../images/bg.png' alt='background'/>

        <div className="text container h-100 d-flex justify-content-center align-items-center flex-column flex-lg-row">
            <div className="h-100 w-50  d-flex justify-content-center flex-column mt-5 pt-5 mt-lg-0 pt-lg-0">
                <h1  className="mainTitle text-white display-3 fw-medium z-3">Welcome to <br/> our website!</h1>
                <p className="text-white mt-3 fs-5">Employees Management System</p>
            </div>
            <div className="h-100 w-50  d-flex justify-content-center align-items-end flex-row flex-lg-column mb-5 pb-5 mb-lg-0 pb-lg-0">
                <a href="https://ahmedhamed.surge.sh/">
                    <i className="fa-solid fa-user bg-dark p-3 fs-4 rounded-circle my-3 text-white mx-3 mx-lg-0"></i>
                </a>
                <a href="https://www.linkedin.com/in/ahmed-hamed-610537294?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=android_app">
                    <i className="fa-brands fa-linkedin bg-dark p-3 fs-4 rounded-circle my-3 text-white mx-3 mx-lg-0"></i>
                </a>
                <a href="https://www.facebook.com/ahmedhamed.hammed?mibextid=ZbWKwL">
                    <i className="fa-brands fa-facebook bg-dark p-3 fs-4 rounded-circle my-3 text-white mx-3 mx-lg-0"></i>
                </a>
            </div>
        </div>
    </div>

  )
}
