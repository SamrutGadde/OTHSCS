import React from "react";
import { MDBCol, MDBContainer, MDBRow, MDBFooter } from "mdbreact";

export default function footer() {
  return (
    <div>
      <MDBFooter color="grey" className="font-small pt-3 mt-3 fixed-bottom">
        <MDBContainer fluid className="text-center  ">
          <MDBRow fluid classname="text-center ">
            <MDBCol fluid classname="text-center ">
              <p>
                <MDBContainer fluid>
                  {" "}
                  <a href="https://github.com/SamrutGadde/OTHSCSWebsite">
                    {" "}
                    GitHub
                  </a>
                </MDBContainer>
              </p>
            </MDBCol>
          </MDBRow>
        </MDBContainer>
        <div className="footer-copyright text-center py-3">
          <MDBContainer fluid>
            &copy; {new Date().getFullYear()} Copyright: Samrut Gadde and Adeeb
            Ismail{" "}
          </MDBContainer>
        </div>
      </MDBFooter>
    </div>
  );
}
