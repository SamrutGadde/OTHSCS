import React from "react";
import "../index.css";

export default function PageNotFound() {
  return (
    <div
      style={{
        backgroundColor: "#1E1E1E",
        minHeight: "100vh",
      }}
    >
      <h1
        style={{
          color: "white",
          lineHeight: "100vh",
          textAlign: "center",
          verticalAlign: "middle",
          fontSize: "auto",
        }}
      >
        {" "}
        404 Page Not Found{" "}
      </h1>
    </div>
  );
}
