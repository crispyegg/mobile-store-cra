import React from "react";
import { Link } from "react-router-dom";

const Header = () => {
  return (
    <header className=" container-fluid ">
        <nav className="navbar navbar-expand-lg bg-body-tertiary ">
                <div className="container">
                      <Link className="navbar-brand" to="/">
                        <strong> Ashif<span className="text-danger"> TechStore</span></strong>
                        </Link>
                      <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#mainNav" aria-controls="mainNav" aria-expanded="false" aria-label="Toggle navigation">
                        <span className="navbar-toggler-icon"></span>
                      </button>
                    <div className="collapse navbar-collapse" id="mainNav">
                        <ul className="navbar-nav ms-auto">

                          <li className="nav-item">
                            <Link className="nav-link active" aria-current="page" to="/">Home</Link>
                          </li>


                          <li className="nav-item">
                            <Link className="nav-link" to="/Mobiles">Mobiles</Link>
                          </li>

                          <li className="nav-item">
                            <Link className="nav-link" to="/laptop">Laptops</Link>
                          </li>

                          <li className="nav-item">
                            <Link className="nav-link" to="/about">About</Link>
                          </li>

                          <li className="nav-item">
                            <Link className="nav-link" to="/contact">Contact</Link>
                          </li>
                          <li className="nav-item">
                            <Link className="nav-link bg-danger-subtle  border-3 rounded-4 text-danger" to="/admin">AdminLogin</Link>
                          </li>
                          
                        </ul>
                    </div>
                </div>
         </nav>
     
    </header>
  );
};

export default Header;
