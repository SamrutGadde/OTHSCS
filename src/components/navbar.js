import React, { useState, setState } from "react";
import logo from "./lgo.svg";
import { MDBNavbar, MDBNavbarBrand, MDBNavbarNav, MDBNavItem } from "mdbreact";
import { BrowserRouter as Router, Link } from "react-router-dom";
export default function Navbar() {
  return (
    <MDBNavbar color="indigo" dark expand="md">
      <MDBNavbarBrand>
        <Link className="nav-link" to="/">
          <img
            src={logo}
            width="30"
            height="30"
            class="d-inline-block align-top"
            style={{ marginRight: "1rem" }}
          />
          <strong className="white-text">OTHS Computer Science</strong>
        </Link>
      </MDBNavbarBrand>

      <MDBNavbarNav left>
        <MDBNavItem>
          <Link className="nav-link" to="/resources">
            Resources
          </Link>
        </MDBNavItem>
        <MDBNavItem>
          <Link className="nav-link" to="/events">
            Upcoming Events
          </Link>
        </MDBNavItem>
        <MDBNavItem>
          <Link className="nav-link" to="/about">
            About Us
          </Link>
        </MDBNavItem>
      </MDBNavbarNav>
      <MDBNavbarNav right></MDBNavbarNav>
    </MDBNavbar>
    // <div>
    //   <nav class="navbar navbar-expand-lg navbar-dark bg-dark ">
    //     <a class="navbar-brand" style={{ marginLeft: "1rem" }} href="/">
    //       <img
    //         src={img}
    //         width="30"
    //         height="30"
    //         class="d-inline-block align-top"
    //         style={{ marginRight: "1rem" }}
    //       />
    //       OTHS CS
    //     </a>
    //     <button
    //       class="navbar-toggler"
    //       type="button"
    //       data-toggle="navbar-collapse"
    //       data-target="#navbarNav"
    //       aria-controls="navbarNav"
    //       aria-expanded="true"
    //       aria-label="Toggle navigation"
    //     >
    //       <span class="navbar-toggler-icon"></span>
    //     </button>
    //     <div class=" navbar-collapse collapse" id="navbarNav">
    //       <ul class="navbar-nav mr-auto mt-2 mt-lg-0">
    //         <li class="nav-item">
    //           <a class="nav-link" href="#">
    //             Upcoming Events
    //           </a>
    //         </li>
    //         <li class="nav-item">
    //           <a class="nav-link" href="/resources">
    //             Resources
    //           </a>
    //         </li>
    //         <li class="nav-item">
    //           <a class="nav-link" href="#">
    //             About
    //           </a>
    //         </li>
    //       </ul>
    //     </div>
    //   </nav>
    // </div>
  );
}
