import { useEffect, useState } from "react";
import { NavItem } from "react-bootstrap";
import { Link } from "react-router-dom";

function navbar() {

  return (
    <>
      <nav class="navbar navbar-expand-lg navbar-light " id="nav1">
        <div class="container-fluid">
          <span className=" fs-3 fw-bold">
            <i className="fas fa-clipboard-list"></i>
            <span> Digital Token Generation</span>
          </span>
          <span><h3>Admin Panel</h3> </span>
          <button
            class="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarText"
            aria-controls="navbarText"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span class="navbar-toggler-icon"></span>
          </button>

          <span class="navbar-text">
            <div class="collapse navbar-collapse" id="navbarText">
              <ul class="navbar-nav me-auto mb-lg-0 ">
                
                <li class="nav-item fs-5 mx-2 py-1 px-2">
                  <Link to="/feedback" style={{ textDecoration: "none" }}>
                    Feedback
                  </Link>
                </li>

                              
                

                <li class="nav-item fs-5 mx-2 py-1 px-2">
                  <Link to="/record" style={{ textDecoration: "none" }}>
                    Records
                  </Link>
                </li>

               
              </ul>
            </div>
          </span>
        </div>
      </nav>
    </>
  );
}

export default navbar;
