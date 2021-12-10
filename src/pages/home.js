import React, { Component } from "react";
import Typical from "react-typical";
//import Background from "./84248.png";
import img from "./Sevenlakes.JPG";
import img1 from "./2.PNG";
import { MDBCarousel, MDBCarouselInner, MDBCarouselItem, MDBView, MDBContainer } from
"mdbreact";
import Carousel from 'react-material-ui-carousel'
import Navbar from "../components/navbar"
import Footer from "../components/footer"
function home(props) {

  var items = [
    {
        name:"Seven Lakes",
        description: "best programmers NA",
        img: "https://byliner.com/wp-content/uploads/2021/06/hello.jpg",
    },

    {
      name:"Clements HS",
      description: "best programmers EU",
      img:'https://media-exp1.licdn.com/dms/image/C4D1BAQGEQtjtaNBsNA/company-background_10000/0/1556883129624?e=2159024400&v=beta&t=hOx-hbnIDIN4uyKXb6Vfa_vxTw60Cgt3KzpH2IN_qX8'
  },

  ]

  return(
  <div style = {{display:'flex', flexDirection:'column', backgroundColor:'#2b2828', minHeight:'100vh', }}>
    <Navbar style = {{flex:1,}} />
    <div style = {{ flexDirection:'column', display:'flex', flex:1,}}>
          <div style = {{justifyContent:"center", flex:1, alignItems:'center'}}>
            <Carousel>
              {
                items.map( (item, i) => <div style = {{flexDirection:'column', display:'flex', height:'auto', justifyContent:'center', alignItems:'center'}} >
                      <img style = {{flex: 1}}src = {item.img}/>
                      <div style = {{color:'white', flex:1,}}>
                        {item.name}:/ {item.description}
                      </div> 
                  </div>)
              }
            </Carousel>
          </div>
          
        <Footer/>
    </div>
  </div>

  )
}

export default home;
