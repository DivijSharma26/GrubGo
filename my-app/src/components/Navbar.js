import React from 'react'
import { Link,useNavigate } from 'react-router-dom'
export default function Navbar() {

  const navigate = useNavigate();
  const handleLogout = ()=>{
    localStorage.removeItem("authToken");
    navigate("/login");
  }
  return (
    <div>
        <nav className="navbar navbar-expand-lg navbar-dark bg-secondary">
  <div className="container-fluid">
    <Link className="navbar-brand fs-1 fst-italic " to="/">GrubGo</Link>
    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="/navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
      <span className="navbar-toggler-icon"></span>
    </button>
    <div className="collapse navbar-collapse" id="navbarNav">
      <ul className="navbar-nav me-auto">
        <li className="nav-item">
          <Link className="nav-link active fs-5" aria-current="page" to="/">Home</Link>
       </li>
       {(localStorage.getItem("authToken"))?
        <li className="nav-item">
        <Link className="nav-link active fs-5" aria-current="page" to="/">Orders</Link>
     </li>
       :""}
      </ul>
      {(!localStorage.getItem("authToken"))?
        <div className='d-flex'>
          <Link className="btn bg-success mx-1" to="/login">Login</Link>
          <Link className="btn bg-primary mx-1" to="/createuser">Sign Up</Link>
        </div>
        : 
        <div>
          <div className='btn bg-white mx-1 text-success' >
          Cart
        </div>

        <div className='btn bg-white mx-1 text-dark' onClick={handleLogout} >
          Logout
        </div>
        </div>
        }
    </div>
  </div>
</nav>
    </div>
  )
}
