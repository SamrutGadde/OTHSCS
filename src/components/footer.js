import React from "react";
import { MDBCol, MDBContainer, MDBRow, MDBFooter } from "mdbreact";

export default function footer() {
  return (
    <MDBFooter color="grey" className="page-footer font-small pt-4 mt-4 ">
      <MDBContainer fluid className="text-center text-md-left">
        <MDBRow>
          <MDBCol md="6">
            <p>Made by Adeeb Ismail and Samrut Gadde</p>
          </MDBCol>
          <MDBCol md="6">
            <ul>
              <li className="list-unstyled">
                <a href="https://github.com/SamrutGadde/OTHSCSWebsite">
                  Contact Us
                </a>
              </li>
              <li className="list-unstyled">
                <a href="https://github.com/SamrutGadde/OTHSCSWebsite">
                  Github
                </a>
              </li>
            </ul>
          </MDBCol>
        </MDBRow>
      </MDBContainer>
      <div className="footer-copyright text-center py-3">
        <MDBContainer fluid>
          &copy; {new Date().getFullYear()} Copyright:{" "}
          <a href="https://www.mdbootstrap.com"> OTHS CS </a>
        </MDBContainer>
      </div>
    </MDBFooter>
  );
}
