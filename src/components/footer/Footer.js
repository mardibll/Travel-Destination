import React from "react";
import "bootstrap-icons/font/bootstrap-icons.css";
import style from "./style.module.css";
export default function Footer() {
  return (
    <div className={style.container}>
      <div className={style.menu}>
        <div className={style.about}>
          <h2>travelaja</h2>
          <p>
            Travelaja adalah jenis aplikasi web yang digunakan untuk membantu
            klien merencanakan, memesan, dan mengelola perjalanan mereka.
            Aplikasi ini terutama berisi berbagai rekomendasi destinasi wisata
            menarik.
          </p>
        </div>
        <div className={style.card}>
          <h4>links</h4>
          <p>Discover</p>
          <p>Special Deals</p>
          <p>Services</p>
          <p>Community</p>
          <p>About Us</p>
        </div>
        <div className={style.card}>
          <h4>Services</h4>
          <p>About Us</p>
          <p>Blog & Articles</p>
          <p>Term and Condition</p>
          <p>Privacy Policy</p>
          <p>Contact Us</p>
        </div>
        <div className={style.card}>
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
