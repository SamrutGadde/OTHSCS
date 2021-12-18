import React from "react";
import FooterBottom from "../components/footer.js";
import "../index.css";
import { MDBContainer, MDBRow, MDBCol } from "mdbreact";
export default function resources() {
  return (
    <div
      className=""
      style={{
        backgroundColor: "#2b2828",
        minHeight: "100vh",
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
            fontSize: "3em",
            color: "white",
          }}
        >
          Resources
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
                  Competitive Programmer's Handbook
                </h5>
                <p class="card-text" style={{ color: "white" }}>
                  With supporting text below as a natural lead-in to additional
                  content.
                </p>
                <a href="https://cses.fi/book/book.pdf" class="btn btn-primary">
                  Check it out
                </a>
              </div>
              <div class="card-footer text-muted"></div>
            </div>
          </MDBCol>
          <MDBCol style={{ marginTop: "1rem" }}>
            <div
              class="card text-center"
              style={{ backgroundColor: "#1E1E1E" }}
            >
              <div class="card-header"></div>
              <div class="card-body" style={{ color: "white" }}>
                <h5 class="card-title" style={{ color: "white" }}>
                  Advanced Algorithms
                </h5>
                <p class="card-text" style={{ color: "white" }}>
                  With supporting text below as a natural lead-in to additional
                  content.
                </p>
                <a
                  href="https://cp-algorithms.web.app/index.html"
                  class="btn btn-primary"
                >
                  Check it out
                </a>
              </div>
              <div class="card-footer text-muted"></div>
            </div>
          </MDBCol>
          <MDBCol style={{ marginTop: "1rem" }}>
            <div
              class="card text-center"
              style={{ backgroundColor: "#1E1E1E" }}
            >
              <div class="card-header"></div>
              <div class="card-body" style={{ color: "white" }}>
                <h5 class="card-title" style={{ color: "white" }}>
                  Darren Yao's book
                </h5>
                <p class="card-text" style={{ color: "white" }}>
                  With supporting text below as a natural lead-in to additional
                  content.
                </p>
                <a
                  href="https://darrenyao.com/usacobook/java.pdf"
                  class="btn btn-primary"
                >
                  Check it out
                </a>
              </div>
              <div class="card-footer text-muted"></div>
            </div>
          </MDBCol>{" "}
        </MDBRow>
        <MDBRow>
          <MDBCol style={{ marginTop: "1rem" }}>
            <div
              class="card text-center"
              style={{ backgroundColor: "#1E1E1E" }}
            >
              <div class="card-header"></div>
              <div class="card-body" style={{ color: "white" }}>
                <h5 class="card-title" style={{ color: "white" }}>
                  William Lin
                </h5>
                <p class="card-text" style={{ color: "white" }}>
                  Competitive programming YouTuber.
                </p>
                <a
                  href="https://www.youtube.com/c/WilliamLin168"
                  class="btn btn-primary"
                >
                  Check it out
                </a>
              </div>
              <div class="card-footer text-muted"></div>
            </div>
          </MDBCol>
        </MDBRow>
      </MDBContainer>{" "}
      <MDBContainer>
        <div
          className="col- offset-"
          style={{
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
            fontSize: "3em",
            color: "white",
          }}
        >
          Forms{" "}
        </div>
        <MDBRow>
          <MDBCol style={{ marginTop: "1em", marginBottom: "2em" }}>
            {" "}
            <div
              class="card text-center"
              style={{ backgroundColor: "#1E1E1E" }}
            >
              <div class="card-header"></div>
              <div class="card-body" style={{ color: "white" }}>
                <h5 class="card-title" style={{ color: "white" }}>
                  Competitive Programmer's Handbook
                </h5>
                <p class="card-text" style={{ color: "white" }}>
                  With supporting text below as a natural lead-in to additional
                  content.
                </p>
                <a href="https://cses.fi/book/book.pdf" class="btn btn-primary">
                  Check it out
                </a>
              </div>
              <div class="card-footer text-muted"></div>
            </div>
          </MDBCol>
          <MDBCol style={{ marginTop: "1rem" }}>
            <div
              class="card text-center"
              style={{ backgroundColor: "#1E1E1E" }}
            >
              <div class="card-header"></div>
              <div class="card-body" style={{ color: "white" }}>
                <h5 class="card-title" style={{ color: "white" }}>
                  Advanced Algorithms
                </h5>
                <p class="card-text" style={{ color: "white" }}>
                  With supporting text below as a natural lead-in to additional
                  content.
                </p>
                <a
                  href="https://cp-algorithms.web.app/index.html"
                  class="btn btn-primary"
                >
                  Check it out
                </a>
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
