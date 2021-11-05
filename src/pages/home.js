import React, { Component } from "react";
import Typical from "react-typical";
//import Background from "./84248.png";
import img from "./Sevenlakes.JPG";
import img1 from "./2.PNG";
export class home extends Component {
  render() {
    return (
      <div
        className=""
        style={{
          //backgroundImage: `url(${Background})`,
          backgroundColor: "#3777FF",
          height: "100vh",
          backgroundPosition: "center",
          backgroundRepeat: "no-repeat",
          backgroundSize: "cover",
        }}
      ></div>
    );
  }
}

export default home;
