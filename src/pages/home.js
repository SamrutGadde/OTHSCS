import React, { Component } from "react";
import Typical from "react-typical";
//import Background from "./84248.png";
import img from "./Sevenlakes.JPG";
import img1 from "./2.PNG";
import {
  MDBCarousel,
  MDBCarouselInner,
  MDBCarouselItem,
  MDBView,
  MDBContainer,
} from "mdbreact";
import Footer from "../components/footer";
function home(props) {
  return (
    <div
      style={{
        display: "flex",
        flexDirection: "column",
        backgroundColor: "#2b2828",
        minHeight: "100vh",
      }}
    >
      <div style={{ flexDirection: "column", display: "flex", flex: 1 }}>
        <div style={{ justifyContent: "center", flex: 1 }}>
          <MDBContainer>
            <MDBCarousel
              activeItem={1}
              length={3}
              showControls={true}
              showIndicators={true}
              className="z-depth-1"
            ></MDBCarousel>
          </MDBContainer>
        </div>
        <div style={{ flex: 1 }}></div>
        <div></div>
        <Footer />
      </div>
    </div>
  );
}

export default home;
