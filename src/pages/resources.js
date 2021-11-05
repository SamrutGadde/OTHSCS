import React from "react";
import FooterBottom from "../components/footer.js";
import "../index.css";
import {
  MDBBtn,
  MDBCard,
  MDBCardBody,
  MDBCardImage,
  MDBCardTitle,
  MDBCardText,
  MDBCol,
} from "mdbreact";
export default function resources() {
  return (
    <div className="" style={{ backgroundColor: "#2b2828" }}>
      <div class="container-sm">
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
          Resources
        </div>

        <div class="row">
          <div class="col-4" style={{ marginTop: "1rem" }}>
            <div
              class="card text-center"
              style={{ backgroundColor: "#1E1E1E" }}
            >
              <div class="card-header"></div>
              <div class="card-body" style={{ color: "#4285F4" }}>
                <h5 class="card-title" style={{ color: "#4285F4" }}>
                  Competitive Programmer's Handbook
                </h5>
                <p class="card-text" style={{ color: "#4285F4" }}>
                  With supporting text below as a natural lead-in to additional
                  content.
                </p>
                <a href="https://cses.fi/book/book.pdf" class="btn btn-primary">
                  Check it out
                </a>
              </div>
              <div class="card-footer text-muted"></div>
            </div>
          </div>

          <div class="col-4" style={{ marginTop: "1rem" }}>
            <div
              class="card text-center"
              style={{ backgroundColor: "#1E1E1E" }}
            >
              <div class="card-header"></div>
              <div class="card-body" style={{ color: "#4285F4" }}>
                <h5 class="card-title" style={{ color: "#4285F4" }}>
                  Advanced Algorithms
                </h5>
                <p class="card-text" style={{ color: "#4285F4" }}>
                  With supporting text below as a natural lead-in to additional
                  content.
                </p>
                <a href="https://cses.fi/book/book.pdf" class="btn btn-primary">
                  Check it out
                </a>
              </div>
              <div class="card-footer text-muted"></div>
            </div>
          </div>

          <div class="col-4" style={{ marginTop: "1rem" }}>
            <div
              class="card text-center"
              style={{ backgroundColor: "#1E1E1E" }}
            >
              <div class="card-header"></div>
              <div class="card-body" style={{ color: "#4285F4" }}>
                <h5 class="card-title" style={{ color: "#4285F4" }}>
                  Darren Yao's book
                </h5>
                <p class="card-text" style={{ color: "#4285F4" }}>
                  With supporting text below as a natural lead-in to additional
                  content.
                </p>
                <a href="https://cses.fi/book/book.pdf" class="btn btn-primary">
                  Check it out
                </a>
              </div>
              <div class="card-footer text-muted"></div>
            </div>
          </div>
        </div>
        <div class="row">
          {" "}
          <div class="col-4" style={{ marginTop: "1rem" }}>
            <div
              class="card text-center"
              style={{ backgroundColor: "#1E1E1E" }}
            >
              <div class="card-header"></div>
              <div class="card-body" style={{ color: "#4285F4" }}>
                <h5 class="card-title" style={{ color: "#4285F4" }}>
                  William Lin
                </h5>
                <p class="card-text" style={{ color: "#4285F4" }}>
                  With supporting text below as a natural lead-in to additional
                  content.
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
          </div>
        </div>
      </div>
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
        Forms
      </div>
      <div class="container">
        <div class="row">
          <div class="col-4" style={{ marginTop: "1rem" }}>
            <div
              class="card text-center"
              style={{ backgroundColor: "#1E1E1E" }}
            >
              <div class="card-header"></div>
              <div class="card-body" style={{ color: "#4285F4" }}>
                <h5 class="card-title" style={{ color: "#4285F4" }}>
                  Competitive Programmer's Handbook
                </h5>
                <p class="card-text" style={{ color: "#4285F4" }}>
                  With supporting text below as a natural lead-in to additional
                  content.
                </p>
                <a href="https://cses.fi/book/book.pdf" class="btn btn-primary">
                  Check it out
                </a>
              </div>
              <div class="card-footer text-muted"></div>
            </div>
          </div>

          <div class="col-4" style={{ marginTop: "1rem" }}>
            <div
              class="card text-center"
              style={{ backgroundColor: "#1E1E1E" }}
            >
              <div class="card-header"></div>
              <div class="card-body" style={{ color: "#4285F4" }}>
                <h5 class="card-title" style={{ color: "#4285F4" }}>
                  Advanced Algorithms
                </h5>
                <p class="card-text" style={{ color: "#4285F4" }}>
                  With supporting text below as a natural lead-in to additional
                  content.
                </p>
                <a href="https://cses.fi/book/book.pdf" class="btn btn-primary">
                  Check it out
                </a>
              </div>
              <div class="card-footer text-muted"></div>
            </div>
          </div>

          <div class="col-4" style={{ marginTop: "1rem" }}>
            <div
              class="card text-center"
              style={{ backgroundColor: "#1E1E1E" }}
            >
              <div class="card-header"></div>
              <div class="card-body" style={{ color: "#4285F4" }}>
                <h5 class="card-title" style={{ color: "#4285F4" }}>
                  Darren Yao's book
                </h5>
                <p class="card-text" style={{ color: "#4285F4" }}>
                  With supporting text below as a natural lead-in to additional
                  content.
                </p>
                <a href="https://cses.fi/book/book.pdf" class="btn btn-primary">
                  Check it out
                </a>
              </div>
              <div class="card-footer text-muted"></div>
            </div>
          </div>
        </div>
      </div>
      <FooterBottom> </FooterBottom>
    </div>
  );
}
