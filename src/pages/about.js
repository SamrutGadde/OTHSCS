import React from "react";
import FooterBottom from "../components/footer.js";
import { MDBContainer, MDBRow, MDBCol, MDBIcon, MDBFooter } from "mdbreact";

export default function about() {
  return (
    <div
      className=""
      style={{
        backgroundColor: "#2b2828",
        minHeight: "110vh",
        marginBottom: "100px",
      }}
    >
      <MDBContainer>
        {" "}
        <div
          className="col- offset-"
          style={{
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
            fontSize: "6vmin",
            color: "white",
          }}
        >
          About Us
        </div>
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
                  Our Mission
                </h5>
                <p>
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
                </p>
              </div>
              <div class="card-footer text-muted"></div>
            </div>
          </MDBCol>
        </MDBRow>
        <MDBRow>
          <MDBCol>
            <div class="d-flex justify-content-center">
              <MDBIcon
                icon="male fa-5x"
                style={{ color: "white", marginTop: "1.5rem" }}
              />
            </div>
          </MDBCol>
          <MDBCol>
            <div class="d-flex justify-content-center">
              <MDBIcon
                icon="chalkboard-teacher fa-5x"
                style={{ color: "white", marginTop: "1.5rem" }}
              />
            </div>
          </MDBCol>
          <MDBCol>
            <div class="d-flex justify-content-center">
              <MDBIcon
                icon="users fa-5x"
                style={{ color: "white", marginTop: "1.5rem" }}
              />{" "}
            </div>
          </MDBCol>
        </MDBRow>
        <MDBRow>
          <MDBCol>
            <div
              class="d-flex justify-content-center"
              style={{ color: "white", marginTop: "1rem", fontSize: "2rem" }}
            >
              Officers
            </div>
          </MDBCol>
          <MDBCol>
            <div
              class="d-flex justify-content-center"
              style={{ color: "white", marginTop: "1rem", fontSize: "2rem" }}
            >
              Sponsers
            </div>
          </MDBCol>
          <MDBCol>
            <div
              class="d-flex justify-content-center"
              style={{ color: "white", marginTop: "1rem", fontSize: "2rem" }}
            >
              Helpers
            </div>
          </MDBCol>
        </MDBRow>
        <MDBRow>
          <MDBCol>
            <div
              class="d-flex justify-content-center"
              style={{ color: "white", marginTop: ".5rem", fontSize: "1rem" }}
            >
              David
            </div>
          </MDBCol>
          <MDBCol>
            <div
              class="d-flex justify-content-center"
              style={{ color: "white", marginTop: ".5rem", fontSize: "1rem" }}
            >
              Mr. Johnson
            </div>
          </MDBCol>
          <MDBCol>
            <div
              class="d-flex justify-content-center"
              style={{ color: "white", marginTop: ".5rem", fontSize: "1rem" }}
            >
              Helpers
            </div>
          </MDBCol>
        </MDBRow>
        <MDBRow>
          <MDBCol>
            <div
              class="d-flex justify-content-center"
              style={{ color: "white", marginTop: ".5rem", fontSize: "1rem" }}
            >
              Nicole
            </div>
          </MDBCol>
          <MDBCol>
            <div
              class="d-flex justify-content-center"
              style={{ color: "white", marginTop: ".5rem", fontSize: "1rem" }}
            ></div>
          </MDBCol>
          <MDBCol>
            <div
              class="d-flex justify-content-center"
              style={{ color: "white", marginTop: ".5rem", fontSize: "1rem" }}
            >
              Helpers
            </div>
          </MDBCol>
        </MDBRow>
        <MDBRow>
          <MDBCol>
            <div
              class="d-flex justify-content-center"
              style={{ color: "white", marginTop: ".5rem", fontSize: "1rem" }}
            >
              Pranav
            </div>
          </MDBCol>
          <MDBCol>
            <div
              class="d-flex justify-content-center"
              style={{ color: "white", marginTop: ".5rem", fontSize: "1rem" }}
            ></div>
          </MDBCol>
          <MDBCol>
            <div
              class="d-flex justify-content-center"
              style={{ color: "white", marginTop: ".5rem", fontSize: "1rem" }}
            >
              Helpers
            </div>
          </MDBCol>
        </MDBRow>
        <MDBRow>
          <MDBCol>
            <div
              class="d-flex justify-content-center"
              style={{ color: "white", marginTop: ".5rem", fontSize: "1rem" }}
            >
              Jachika
            </div>
          </MDBCol>
          <MDBCol>
            <div
              class="d-flex justify-content-center"
              style={{ color: "white", marginTop: ".5rem", fontSize: "1rem" }}
            ></div>
          </MDBCol>
          <MDBCol>
            <div
              class="d-flex justify-content-center"
              style={{ color: "white", marginTop: ".5rem", fontSize: "1rem" }}
            >
              Helpers
            </div>
          </MDBCol>
        </MDBRow>
        <MDBRow>
          <MDBCol>
            <div
              class="d-flex justify-content-center"
              style={{ color: "white", marginTop: ".5rem", fontSize: "1rem" }}
            >
              Kshitij
            </div>
          </MDBCol>
          <MDBCol>
            <div
              class="d-flex justify-content-center"
              style={{ color: "white", marginTop: ".5rem", fontSize: "1rem" }}
            ></div>
          </MDBCol>
          <MDBCol>
            <div
              class="d-flex justify-content-center"
              style={{ color: "white", marginTop: ".5rem", fontSize: "1rem" }}
            >
              Helpers
            </div>
          </MDBCol>
        </MDBRow>
        <MDBRow>
          <MDBCol>
            <div
              class="d-flex justify-content-center"
              style={{ color: "white", marginTop: ".5rem", fontSize: "1rem" }}
            ></div>
          </MDBCol>
          <MDBCol>
            <div
              class="d-flex justify-content-center"
              style={{ color: "white", marginTop: ".5rem", fontSize: "1rem" }}
            ></div>
          </MDBCol>
          <MDBCol>
            <div
              class="d-flex justify-content-center"
              style={{ color: "white", marginTop: ".5rem", fontSize: "1rem" }}
            >
              Helpers
            </div>
          </MDBCol>
        </MDBRow>
        <MDBRow>
          <MDBCol>
            <div
              class="d-flex justify-content-center"
              style={{ color: "white", marginTop: ".5rem", fontSize: "1rem" }}
            ></div>
          </MDBCol>
          <MDBCol>
            <div
              class="d-flex justify-content-center"
              style={{ color: "white", marginTop: ".5rem", fontSize: "1rem" }}
            ></div>
          </MDBCol>
          <MDBCol>
            <div
              class="d-flex justify-content-center"
              style={{ color: "white", marginTop: ".5rem", fontSize: "1rem" }}
            >
              Helpers
            </div>
          </MDBCol>
        </MDBRow>
        <MDBRow>
          <MDBCol>
            <div
              class="d-flex justify-content-center"
              style={{ color: "white", marginTop: ".5rem", fontSize: "1rem" }}
            ></div>
          </MDBCol>
          <MDBCol>
            <div
              class="d-flex justify-content-center"
              style={{ color: "white", marginTop: ".5rem", fontSize: "1rem" }}
            ></div>
          </MDBCol>
          <MDBCol>
            <div
              class="d-flex justify-content-center"
              style={{ color: "white", marginTop: ".5rem", fontSize: "1rem" }}
            >
              Helpers
            </div>
          </MDBCol>
        </MDBRow>
        <MDBRow>
          <MDBCol>
            <div
              class="d-flex justify-content-center"
              style={{ color: "white", marginTop: ".5rem", fontSize: "1rem" }}
            ></div>
          </MDBCol>
          <MDBCol>
            <div
              class="d-flex justify-content-center"
              style={{ color: "white", marginTop: ".5rem", fontSize: "1rem" }}
            ></div>
          </MDBCol>
          <MDBCol>
            <div
              class="d-flex justify-content-center"
              style={{ color: "white", marginTop: ".5rem", fontSize: "1rem" }}
            >
              Helpers
            </div>
          </MDBCol>
        </MDBRow>
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
                  Contact Us
                </h5>
                <MDBRow>
                  <MDBCol>
                    <div
                      class="d-flex justify-content-center"
                      style={{
                        color: "white",
                        marginTop: ".5rem",
                        fontSize: "1rem",
                      }}
                    >
                      Instagram
                    </div>
                  </MDBCol>
                  <MDBCol>
                    <div
                      class="d-flex justify-content-center"
                      style={{
                        color: "white",
                        marginTop: ".5rem",
                        fontSize: "1rem",
                      }}
                    >
                      Instagram
                    </div>
                  </MDBCol>
                </MDBRow>
                <MDBRow>
                  <MDBCol>
                    <div
                      class="d-flex justify-content-center"
                      style={{
                        color: "white",
                        marginTop: ".5rem",
                        fontSize: "1rem",
                      }}
                    >
                      Email
                    </div>
                  </MDBCol>
                  <MDBCol>
                    <div
                      class="d-flex justify-content-center"
                      style={{
                        color: "white",
                        marginTop: ".5rem",
                        fontSize: "1rem",
                      }}
                    >
                      Email
                    </div>
                  </MDBCol>
                </MDBRow>
                <MDBRow>
                  <MDBCol>
                    <div
                      class="d-flex justify-content-center"
                      style={{
                        color: "white",
                        marginTop: ".5rem",
                        fontSize: "1rem",
                      }}
                    >
                      Address
                    </div>
                  </MDBCol>
                  <MDBCol>
                    <div
                      class="d-flex justify-content-center"
                      style={{
                        color: "white",
                        marginTop: ".5rem",
                        fontSize: "1rem",
                      }}
                    >
                      Address
                    </div>
                  </MDBCol>
                </MDBRow>
              </div>
              <div class="card-footer text-muted"></div>
            </div>
          </MDBCol>
        </MDBRow>
      </MDBContainer>
      <FooterBottom />
    </div>
  );
}
