import React from "react";
import img from "./lgo.svg";
export default function navbar() {
  return (
    <div>
      <nav class="navbar navbar-expand-lg navbar-dark bg-dark ">
        <a class="navbar-brand" style={{ marginLeft: "1rem" }}>
          <img
            src={img}
            width="30"
            height="30"
            class="d-inline-block align-top"
            style={{ marginRight: "1rem" }}
          />
          OTHS CS
        </a>
        <button
          class="navbar-toggler"
          type="button"
          data-toggle="navbar-collapse"
          data-target="#navbarNav"
          aria-controls="navbarNav"
          aria-expanded="true"
          aria-label="Toggle navigation"
        >
          <span class="navbar-toggler-icon"></span>
        </button>
        <div class=" navbar-collapse collapse" id="navbarNav">
          <ul class="navbar-nav mr-auto mt-2 mt-lg-0">
            <li class="nav-item">
              <a class="nav-link" href="#">
                Home
              </a>
            </li>
            <li class="nav-item">
              <a class="nav-link" href="#">
                Upcoming Events
              </a>
            </li>
            <li class="nav-item">
              <a class="nav-link" href="/resources">
                Resources
              </a>
            </li>
            <li class="nav-item">
              <a class="nav-link" href="#">
                About
              </a>
            </li>
          </ul>
        </div>
      </nav>
    </div>
  );
}
