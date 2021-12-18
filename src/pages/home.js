import React, { Component } from "react";
import Typical from "react-typical";
//import Background from "./84248.png";
import img from "./Sevenlakes.JPG";
import img1 from "./2.PNG";
import "../index.css";
import davidTeach from "../pictures/DavidTeaching2.JPG"
import clements from "../pictures/IMG_0799.jpg"
import board from "../pictures/IMG_2986.JPG"
import sevenlakes from "../pictures/IMG_3036.JPG"
import samWin from "../pictures/IMG_2175.jpg"

import Carousel from 'react-material-ui-carousel'
import Navbar from "../components/navbar"
import Footer from "../components/footer"
import {MDBRow, MDBCol} from 'mdbreact'
function home(props) {

  var items = [
    {
        img: davidTeach,
    },

    {
      img: clements,
    },

    {
      img: board
    },

    {
      img: sevenlakes
    },

    {
      img:samWin
    }

  ]

  return(
  <div style = {{display:'flex', flexDirection:'column', backgroundColor:'#2b2828', minHeight:'100vh', }}>
    <Navbar style = {{flex:1,}} />
    <div style = {{ flexDirection:'column', display:'flex', flex:1, height:'50%'}}>
          <div style = {{display:'flex', flexDirection:'row', flex:'50%',height:'50%'}}>
            
            <div style = {{display:'flex', color:'white', flex:'45%',alignItems:'center', backgroundColor:'#0d1039', }}>
              <div style = {{paddingLeft: '10rem', flex:1, fontFamily:'monospace', fontSize:'52px',width:'100%',}}>
              Welcome to the  <br/>
              OTHS Computer Science Club</div>
            </div>

            <div style = {{flex:'55%', }}>
                <Carousel>
                  {
                    items.map( (item, i) => <div style={{}}>
                          <img style = {{width:'100%'}}src = {item.img}/>
                      </div>)
                  }
                </Carousel>
            </div>
          </div>

          <div style = {{display:'flex', flexDirection:'column', flex:'50%', height:'auto'}}>
              <MDBRow>
              <MDBCol style={{ marginTop: "1rem" }}>
                {" "}
                <div
                  class="card text-center"
                  style={{ backgroundColor: "#1E1E1E" }}
                >
                  <div class="card-header"></div>
                  <div class="card-body" style={{ color: "white" }}>
                    <h5 class="card-title" style={{ color: "white" }}>
                      News
                    </h5>
                    <div className="mission">
                      Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed
                      sit amet metus vitae enim tempus suscipit nec nec metus. Ut
                      sed urna eros. Nam massa est, maximus a mi eget, hendrerit
                      egestas elit. Mauris convallis tellus sit amet posuere
                      maximus. Donec arcu augue, vulputate sed ante in, tincidunt
                      luctus nibh. Aenean lorem quam, aliquet in dolor sed, volutpat
                      sagittis nisi. Nam eu felis nec neque vulputate feugiat.
                      Vivamus sodales neque orci, vel consectetur mi pretium ut.
                      Quisque ornare volutpat elit. Maecenas luctus ante mauris, id
                      varius metus imperdiet vel. Cras rutrum ante nec tristique
                      auctor. Pellentesque faucibus iaculis est, et rutrum lorem
                      vehicula eu. Nunc dictum augue vel lobortis tincidunt. Vivamus
                      et blandit eros. Aliquam non eros sit amet ligula cursus
                      cursus at nec lectus. Proin viverra mi vel volutpat
                      pellentesque. Suspendisse vulputate dapibus volutpat. Ut sed
                      odio volutpat, aliquam sapien vehicula, mollis eros. Praesent
                      dictum turpis a dolor mollis, at congue tortor imperdiet.
                      Proin condimentum, mauris nec vulputate posuere, nisl ligula
                      fermentum lectus, eu pulvinar odio nisl vitae ante. In hac
                      habitasse platea dictumst. Pellentesque a mollis magna. Nam
                      pharetra urna viverra erat suscipit ultrices. Interdum et
                      malesuada fames ac ante ipsum primis in faucibus. Donec
                      ullamcorper et metus quis bibendum. Ut eget tellus eu risus
                      lacinia ullamcorper ut vitae ipsum. Fusce viverra venenatis
                      est nec maximus. Pellentesque sodales ut tellus sit amet
                      gravida. Donec rutrum sapien ipsum, eget tristique ante
                      facilisis ut. In urna purus, suscipit ac tellus egestas,
                      egestas tempus ex. Etiam accumsan egestas nisi eu sodales.
                      Vivamus sit amet nibh et risus fringilla fermentum. Maecenas
                      ullamcorper pulvinar lectus, eu viverra massa auctor in.
                      Quisque non nulla nec nibh aliquet gravida. Ut vestibulum
                      tortor tortor, quis porttitor sapien tincidunt sit amet.
                      Aenean vitae mi vitae ex ornare vehicula. Integer eget diam
                      vitae est mattis varius ut vitae justo. Proin at quam vitae ex
                      consequat commodo non at velit. Sed placerat nunc non nunc
                      lacinia, eget gravida diam rhoncus. Donec ut neque at mi
                      porttitor volutpat vel finibus lacus. In venenatis leo eu
                      velit condimentum, sed convallis ligula laoreet. Duis
                      porttitor ultricies diam, tempus dignissim sapien tincidunt
                      quis. Quisque non varius arcu. Nulla vehicula neque a leo
                      consectetur tincidunt. Integer ut mattis mi, non egestas eros.{" "}
                    </div>
                  </div>
                  <div class="card-footer text-muted"></div>
                </div>
              </MDBCol>
            </MDBRow>
          </div>
          
        <Footer/>
    </div>
  </div>

  )
}

export default home;
