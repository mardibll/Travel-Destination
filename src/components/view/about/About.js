import React, { useEffect, useState } from "react";
import image from "../../../images/about/image1.png";
import { about, footer, offer, teams } from "../../storage/db_about";
import style from "./style.module.css";
export default function About() {
  const [screen, setscreen] = useState(false);
  useEffect(() => {
    const handleResize = () => {
      setscreen(window.innerWidth <= 600);
    };
    handleResize();
    window.addEventListener("resize", handleResize);
    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);
  return (
    <div>
      <img src={image} alt="error" style={{ height: 260, width: "100%" }} />
      <div style={{ textAlign: "center", marginTop: 50 }}>
        <h3 style={{ fontWeight: "bold" }}>Why Choose Us ?</h3>
        <p style={{ fontSize: 16 }}>
          These popular destinations have a lot to offer
        </p>
      </div>
      <div className={style.card}>
        {offer.map((item, index) => (
          <div key={index} className={style.content_chose}>
            <span> {item.icon}</span>
            <h6>{item.title}</h6>
            <p> {item.description}</p>
          </div>
        ))}
      </div>
      <div className={style.card}>
        {screen && (
          <div className={style.about_picture}>
            <img src={about.image} alt="error" />
          </div>
        )}
        <div className={style.about}>
          <h3>{about.title}</h3>
          <p>{about.description}</p>
        </div>
        {!screen && (
          <div className={style.about_picture}>
            <img src={about.image} alt="error" />
          </div>
        )}
      </div>
      <div className={style.our_teams}>
        <h3 style={{ fontWeight: "bold" }}>Our Teams</h3>
        <p style={{ fontSize: 18 }}>Lorem ipsum dolor sit amet</p>
      </div>

      <div className={style.card}>
        {teams.map((data, x) => (
          <div key={x} className={style.teams}>
            <img src={data.profil} alt="error" />
            <h6>{data.name}</h6>
            <p>{data.skill}</p>
          </div>
        ))}
      </div>

      <div className={style.card}>
        {footer.map((i, x) => (
          <div key={x} className={style.footer}>
            <span>{i.icon}</span>
            <p>{i.title}</p>
          </div>
        ))}
      </div>
    </div>
  );
}
