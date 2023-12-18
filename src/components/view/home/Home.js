import React from "react";
import image from "../../../images/home.png";
import { Testimonial, Top_destination } from "../../storage/db_home";
import styles from "./style.module.css";
export default function Home() {
  return (
    <div>
      <div className={styles.size_absolut}>
        <div className={styles.content}>
          <img
            src={image}
            style={{
              width: "100%",
              height: "100%",
            }}
          />
          <div className={styles.explore}>
            <div className={styles.explore_content}>
              <h2 style={{}}>Explore the world with a smile</h2>
              <p>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit ut
                aliquam, purus sit amet luctus venenatis, lectus magna fringilla
                urna, porttitor rhoncus dolor purus non enim praesent elementum
                facilisis leo,
              </p>
            </div>
          </div>
        </div>
      </div>
      <div style={{ textAlign: "center", padding: 50 }}>
        <p style={{ color: "#295943", fontWeight: "bold" }}>top destination</p>
        <p style={{ fontSize: 27, fontWeight: "bold" }}>Discover your love</p>
      </div>
      <div
        style={{
          margin: "0px 150px",
          display: "flex",
          flexWrap: "wrap",
          justifyContent: "space-between",
          gap: 20,
          alignItems: "center",
        }}
      >
        {Top_destination.map((item, index) => (
          <div
            key={index}
            style={{
              backgroundColor: "white",
              width: 390,
              padding: 30,
              borderRadius: 10,
              boxShadow: "0.5px 0.5px 8px 5px rgba(168, 167, 171, 0.5)",
            }}
          >
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
      <div style={{ textAlign: "center", margin: "120px 0px 30px 0px" }}>
        <p style={{ color: "#295943", fontWeight: "bold" }}>Testimonial</p>
        <p style={{ fontSize: 27, fontWeight: "bold" }}>
          What they say about us
        </p>
      </div>

      <div
        style={{
          margin: "0px 150px",
          display: "flex",
          flexWrap: "wrap",
          alignItems: "center",
          gap: 30,
          justifyContent: "space-between",
        }}
      >
        {Testimonial.map((data, index) => (
          <div key={index} style={{ width: 390, padding: 15 }}>
            <div
              style={{
                display: "flex",
                alignItems: "center",
                gap: 20,
                marginBottom: 20,
              }}
            >
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
