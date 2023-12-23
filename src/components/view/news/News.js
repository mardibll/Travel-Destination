import React, { useState } from "react";
import image from "../../../images/news/image1.png";
import { Adventure, Btn_menu } from "../../storage/db_news";
import styles from "./style.module.css";
export default function News() {
  const [activeButton, setActiveButton] = useState(null);
  const handleButtonClick = (index) => {
    setActiveButton(index);
  };
  return (
    <div>
      <img src={image} alt="error" style={{ width: "100%", height: 250 }} />
      <div className={styles.text_title}>
        <p style={{ fontSize: 22, fontWeight: 500 }}>Travelaja Articles</p>
        <p>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit ut aliquam
        </p>
      </div>
      <div className={styles.navbar}>
        {Btn_menu.map((nav, index) => (
          <div key={index}>
            <button
              onClick={() => handleButtonClick(index)}
              className={
                index === activeButton ? styles.activeButton : styles.button
              }
            >
             {nav.menu}
            </button>
          </div>
        ))}
      </div>
      <div className={styles.card}>
        {Adventure.map((item, index) => (
          <div key={index} className={styles.card_content}>
            <img
              src={item.image}
              alt="error"
              style={{ width: "100%", height: 331 }}
            />
            <p style={{ fontSize: 20 }}>{item.description}</p>
            <p>{item.Atdate}</p>
          </div>
        ))}
      </div>
    </div>
  );
}
