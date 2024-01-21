import React, { useEffect, useState } from "react";
import image from "../../../images/home.png";
import { Testimonial, Top_destination } from "../../storage/db_home";
import styles from "./style.module.css";
import { IoSearch } from "react-icons/io5";
export default function Home() {
  const [inputType, setInputType] = useState("text");

  return (
    <div>
      <div className={styles.absolut}>
        <div className={styles.content}>
          <img src={image} />
          <div className={styles.explore}>
            <div className={styles.explore_content}>
              <h2>Explore the world with a smile</h2>
              <p>
                Travelaja adalah jenis aplikasi web yang digunakan untuk
                membantu klien merencanakan, memesan, dan mengelola perjalanan
                mereka. Aplikasi ini terutama berisi berbagai rekomendasi
                destinasi wisata menarik.
              </p>
              {/* <div className={styles.search}>
                <input type="text" placeholder="City or Destination" />
                <input
                  onFocus={() => setInputType("date")}
                  type={inputType}
                  placeholder="Date of stay"
                  style={{}}
                />
                <input type="number" placeholder="Person" style={{}} />
                <button
                  style={{
                    width: 120,
                    backgroundColor:"red"
                  }}
                >
                  Find Trip Now <IoSearch />
                </button>
              </div> */}
            </div>
          </div>
        </div>
      </div>
      <div style={{ textAlign: "center", paddingTop: 50 }}>
        <p style={{ color: "#295943", fontWeight: "bold" }}>top destination</p>
        <p style={{ fontSize: 27, fontWeight: "bold" }}>Discover your love</p>
      </div>
      <div className={styles.card}>
        {Top_destination.map((item, index) => (
          <div key={index} className={styles.card_content}>
            <img
              src={item.image}
              alt="error"
              style={{ width: "100%", height: 227 }}
            />
            <h4>{item.title}</h4>
            <p>{item.price}</p>
            <p>{item.AtDate}</p>
          </div>
        ))}
      </div>

      <div style={{ textAlign: "center", margin: "50px 0px 30px 0px" }}>
        <p style={{ color: "#295943", fontWeight: "bold" }}>Testimonial</p>
        <p style={{ fontSize: 27, fontWeight: "bold" }}>
          What they say about us
        </p>
      </div>

      <div className={styles.card}>
        {Testimonial.map((data, index) => (
          <div key={index} className={styles.content_testimont}>
            <div>
              <img
                src={data.profile}
                alt="error"
                style={{ height: 60, width: 60, borderRadius: 100 }}
              />
              <h4>{data.name}</h4>
            </div>
            <p>{data.comment}</p>
          </div>
        ))}
      </div>
    </div>
  );
}
