import React from "react";
import styles from "./style.module.css";
import "bootstrap-icons/font/bootstrap-icons.css";
export default function Footer() {
  return (
    <div
      style={{
        backgroundColor: "#295943",
        padding: 40,
        flex: 1,
        color: "white",
        bottom: 0,
        zIndex:99999
      }}
    >
      <div
        style={{
          display: "flex",
          flexWrap: "wrap",
          justifyContent: "space-between",
          alignItems: "center",
        }}
      >
        <div style={{ width: 300 }}>
          <h2>travelaja</h2>
          <p>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit ut aliquam,
            purus sit amet luctus venenatis, lectus magna fringilla urna,
            porttitor rhoncus dolor purus non enim praesent elementum facilisis
            leo, vel
          </p>
        </div>
        <div style={{ width: 300 }}>
          <h4>links</h4>
          <p>Discover</p>
          <p>Special Deals</p>
          <p>Services</p>
          <p>Community</p>
          <p>About Us</p>
        </div>
        <div style={{ width: 300 }}>
          <h4>Services</h4>
          <p>About Us</p>
          <p>Blog & Articles</p>
          <p>Term and Condition</p>
          <p>Privacy Policy</p>
          <p>Contact Us</p>
        </div>
        <div style={{ width: 300 }}>
          <h4>Contact</h4>
          <p>Address: Jl.Codelaras No.205A</p>
          <p>Kediri, Pare AG17</p>
          <p>Phone: 123 456 7890</p>
          <p>Email: myagungperdana@gmail.com</p>
          <p>Maps: Kediri, East java</p>
        </div>
      </div>
      <div>
        <h4>Ikuti Kami</h4>
        <i class="bi bi-instagram" />
        <i class="bi bi-facebook" />
        <i class="bi bi-github" />
        <i class="bi bi-twitter" />
        <i class="bi bi-globe" />
      </div>
    </div>
  );
}
