import React from "react";
import "../index.css";
import Footer from "../components/footer";
import { MDBContainer, MDBRow, MDBCol, MDBIcon } from "mdbreact";
import Typical from "react-typical";
import Carousel from "../components/carousel";
function home(props) {
  return (
    <div
      style={{
        backgroundColor: "#2b2828",
        minHeight: "100vh",
        marginBottom: "100px",
      }}
    >
      <div
        style={{
          flexDirection: "column",
          display: "flex",
          flex: 1,
          height: "50%",
        }}
      >
        <div
          style={{
            display: "flex",
            flexDirection: "row",
            flex: "50%",
            height: "50%",
          }}
        >
          <div
            style={{
              display: "flex",
              color: "white",
              flex: "55vh",
              alignItems: "center",
              backgroundColor: "#0d1039",
              width: "100%",
            }}
          >
            <div
              style={{
                display: "flex",
                justifyContent: "center",
                alignItems: "center",
                fontFamily: "monospace",
                paddingLeft: "1vh",
              }}
              class="welcome"
            >
              <Typical
                steps={[
                  "Welcome",
                  1000,
                  "Welcome to the OTHS Computer Science Club",
                  500,
                ]}
                wrapper="p"
              />
            </div>
          </div>

          <div style={{ flex: "65vh" }}>
            //<Carousel />
          </div>
        </div>
      </div>
      <div
        style={{
          marginTop: "1rem",
        }}
      >
        <MDBContainer>
          {" "}
          <MDBRow>
            <MDBCol
              style={{
                marginTop: "2rem",
                marginBottom: "2rem",
              }}
            >
              {" "}
              <div
                class="card text-center"
                style={{
                  backgroundColor: "#1E1E1E",
                }}
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
                    luctus nibh. Aenean lorem quam, aliquet in dolor sed,
                    volutpat sagittis nisi. Nam eu felis nec neque vulputate
                    feugiat. Vivamus sodales neque orci, vel consectetur mi
                    pretium ut. Quisque ornare volutpat elit. Maecenas luctus
                    ante mauris, id varius metus imperdiet vel. Cras rutrum ante
                    nec tristique auctor. Pellentesque faucibus iaculis est, et
                    rutrum lorem vehicula eu. Nunc dictum augue vel lobortis
                    tincidunt. Vivamus et blandit eros. Aliquam non eros sit
                    amet ligula cursus cursus at nec lectus. Proin viverra mi
                    vel volutpat pellentesque. Suspendisse vulputate dapibus
                    volutpat. Ut sed odio volutpat, aliquam sapien vehicula,
                    mollis eros. Praesent dictum turpis a dolor mollis, at
                    congue tortor imperdiet. Proin condimentum, mauris nec
                    vulputate posuere, nisl ligula fermentum lectus, eu pulvinar
                    odio nisl vitae ante. In hac habitasse platea dictumst.
                    Pellentesque a mollis magna. Nam pharetra urna viverra erat
                    suscipit ultrices. Interdum et malesuada fames ac ante ipsum
                    primis in faucibus. Donec ullamcorper et metus quis
                    bibendum. Ut eget tellus eu risus lacinia ullamcorper ut
                    vitae ipsum. Fusce viverra venenatis est nec maximus.
                    Pellentesque sodales ut tellus sit amet gravida. Donec
                    rutrum sapien ipsum, eget tristique ante facilisis ut. In
                    urna purus, suscipit ac tellus egestas, egestas tempus ex.
                    Etiam accumsan egestas nisi eu sodales. Vivamus sit amet
                    nibh et risus fringilla fermentum. Maecenas ullamcorper
                    pulvinar lectus, eu viverra massa auctor in. Quisque non
                    nulla nec nibh aliquet gravida. Ut vestibulum tortor tortor,
                    quis porttitor sapien tincidunt sit amet. Aenean vitae mi
                    vitae ex ornare vehicula. Integer eget diam vitae est mattis
                    varius ut vitae justo. Proin at quam vitae ex consequat
                    commodo non at velit. Sed placerat nunc non nunc lacinia,
                    eget gravida diam rhoncus. Donec ut neque at mi porttitor
                    volutpat vel finibus lacus. In venenatis leo eu velit
                    condimentum, sed convallis ligula laoreet. Duis porttitor
                    ultricies diam, tempus dignissim sapien tincidunt quis.
                    Quisque non varius arcu. Nulla vehicula neque a leo
                    consectetur tincidunt. Integer ut mattis mi, non egestas
                    eros.{" "}
                  </div>
                </div>
                <div class="card-footer text-muted"></div>
              </div>
            </MDBCol>
          </MDBRow>
        </MDBContainer>
      </div>
      <Footer />
    </div>
  );
}

export default home;
