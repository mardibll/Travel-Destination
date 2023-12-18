import React from "react";
import image from "../../../images/svrc.png";
import images from "../../../images/scrv4.png";
import { holiday, ourService, tour, visit } from "../../storage/services";
import styles from "./index.module.css";
export default function Services() {
  return (
    <div className="comtainer">
      <img
        src={image}
        alt="error"
        style={{ height: 250, width: "100%", maxWidth: "100%" }}
      />
      <div className={styles.tour}>
        {tour.map((item, index) => (
          <div key={index}>
            <i class={item.icon} style={{ fontSize: 37 }} />
            <h3>{item.title}</h3>
            <p>{item.description}</p>
            <button>READ MORE</button>
          </div>
        ))}
      </div>
      <div className={styles.visit}>
        {visit.map((i, x) => (
          <div key={x} className={styles.card}>
            <img
              src={i.image}
              style={{ width: "100%", height: 263, borderRadius: 5 }}
            />
            <div className={styles.desc_card}>
              <h3>{i.objektif}</h3>
              <h4>{i.createdAt}</h4>
              <p>{i.description}</p>
              <button>Read More</button>
            </div>
          </div>
        ))}
      </div>

      {holiday.map((items, index) => (
        <div key={index} style={{ position: "relative" }}>
          <img
            src={items.iamge}
            alt="error"
            style={{ height: 550, width: "100%" }}
          />
          <div className={styles.latest}>
            <div className={styles.card_left}>
              <div style={{}}>
                <h1>{items.title}</h1>
                <p>{items.description}</p>
                <button>READ MORE</button>
              </div>
            </div>
            <div className={styles.card_right}>
              <div
                style={{
                  gap: 20,
                  display: "flex",
                  flexWrap: "wrap",
                  justifyContent: "space-between",
                  padding: "0px 80px ",
                }}
              >
                {items.facilities.map((i, x) => (
                  <div key={x} className={styles.desc_right}>
                    {i.icon}
                    <div style={{ textAlign: "center" }}>
                      <h1>{i.name}</h1>
                      <p>{i.benefit}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      ))}

      <div style={{ textAlign: "center" }}>
        <p>BENEFITS</p>
        <h1>OUR SERVICE</h1>
      </div>
      <div className={styles.our_service}>
        {ourService.map((data, index) => (
          <div key={index} className={styles.card_service}>
            {data.icon}
            <div style={{ width: "70%" }}>
              <h2>{data.titel}</h2>
              <p>{data.description}</p>
              <button>Read More</button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
