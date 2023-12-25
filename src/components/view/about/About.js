import React from "react";
import image from "../../../images/about/image1.png";
import { about, footer, offer, teams } from "../../storage/db_about";
import style from "./style.module.css";
export default function About() {
  return (
    <div>
      <img src={image} alt="error" style={{ height: 260, width: "100%" }} />
      <div className={style.container}>
        <div style={{ textAlign: "center", marginTop: 70 }}>
          <h3 style={{ fontWeight: "bold" }}>Why Choose Us ?</h3>
          <p style={{ fontSize: 18 }}>
            These popular destinations have a lot to offer
          </p>
        </div>
        <div className={style.chose}>
          {offer.map((item, index) => (
            <div key={index} style={{}}>
              <span> {item.icon}</span>
              <h6 >{item.title}</h6>
              <p> {item.description}</p>
            </div>
          ))}
        </div>
        <div className={style.about}>
          <div>
            <h3>
              {about.title}
            </h3>
            <p>{about.description}</p>
          </div>
          <img src={about.image} alt="error" />
        </div>
        <div>
          <h3 style={{ fontWeight: "bold" }}>Our Teams</h3>
          <p style={{ fontSize: 18 }}>Lorem ipsum dolor sit amet</p>
        </div>

        <div className={style.teams}>
          {teams.map((data, x) => (
            <div key={x}>
              <img src={data.profil} alt="error" />
              <p style={{ fontSize: 21, fontWeight: 500 }}>{data.name}</p>
              <p style={{ fontSize: 16 }}>{data.skill}</p>
            </div>
          ))}
        </div>

        <div className={style.footer}>
          {footer.map((i, x) => (
            <div key={x}>
              <span>{i.icon}</span>
              <p>{i.title}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
