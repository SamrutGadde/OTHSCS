import React, { useState, setState } from "react";
import logo from "./lgo.svg";
import {
  MDBContainer,
  MDBNavbar,
  MDBNavbarBrand,
  MDBNavbarToggler,
  MDBIcon,
  MDBNavbarNav,
  MDBNavbarItem,
  MDBNavbarLink,
  MDBBtn,
  MDBDropdown,
  MDBDropdownToggle,
  MDBDropdownMenu,
  MDBDropdownItem,
  MDBDropdownLink,
  MDBCollapse,
} from "mdb-react-ui-kit";
export default function Navbar() {
  const [showBasic, setShowBasic] = useState(true);

  return (
    <MDBNavbar dark expand="lg" style={{ backgroundColor: "#3F50B5" }}>
      <MDBContainer fluid>
        <MDBNavbarBrand tag="span" className="mb-0 h1">
          <img
            src={logo}
            width="30"
            height="30"
            style={{ marginRight: "1rem" }}
          />
          OTHS Computer Science
        </MDBNavbarBrand>

        <MDBNavbarToggler
          aria-controls="navbarSupportedContent"
          aria-expanded="false"
          aria-label="Toggle navigation"
          onClick={() => setShowBasic(!showBasic)}
        >
          <MDBIcon icon="bars" fas />
        </MDBNavbarToggler>

        <MDBCollapse navbar show={showBasic}>
          <MDBNavbarNav className="mr-auto mb-2 mb-lg-0">
            <MDBNavbarItem>
              <MDBNavbarLink active aria-current="page" href="/OTHSCS/#/">
                Home
              </MDBNavbarLink>
            </MDBNavbarItem>
            <MDBNavbarItem>
              <MDBNavbarLink href="/OTHSCS/#/about">About Us</MDBNavbarLink>
            </MDBNavbarItem>

            <MDBNavbarItem>
              <MDBNavbarLink href="/OTHSCS/#/events">Upcoming Events</MDBNavbarLink>
            </MDBNavbarItem>

            <MDBNavbarItem>
              <MDBNavbarLink href="/OTHSCS/#/resources">Resources</MDBNavbarLink>
            </MDBNavbarItem>
          </MDBNavbarNav>
        </MDBCollapse>
      </MDBContainer>
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
