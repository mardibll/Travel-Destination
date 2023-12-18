import React from "react";
import styles from "./style.module.css";
export default function Header() {
  return (
    <div>
      <div
        style={{
          color: "white",
          display: "flex",
          justifyContent: "space-between",
          padding: "10px 40px",
          alignItems: "center",
          position: "relative",
          zIndex: 9999,
        }}
      >
        <div>
          <h2 style={{ color: "#ffff" }}> travelaja</h2>
        </div>
        <div
          style={{
            display: "flex",
            width: "60%",
            justifyContent: "space-between",
          }}
        >
          <p>Home</p>
          <p>Discover</p>
          <p>Services</p>
          <p>News</p>
          <p>About Us</p>
          <p>Contact</p>
        </div>
        <div>
          <i class="bi bi-chevron-down" />
        </div>
      </div>
    </div>
  );
}
