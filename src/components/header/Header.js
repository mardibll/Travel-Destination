import React, { useEffect, useState } from "react";
import style from "./style.module.css";
import { Link, useLocation } from "react-router-dom";
import { FiAlignJustify } from "react-icons/fi";
import "bootstrap/dist/css/bootstrap.min.css";
import { Button, Modal } from "react-bootstrap";
export default function Header() {
  const [show, setShow] = useState(false);
  const [togle, settogle] = useState(false);
  const handleClose = () => setShow(false);
  const handleShow = () => setShow(!show);
  const [path, setpath] = useState(false);
  const [isActive, setIsActive] = useState(false);
  console.log(isActive);

  useEffect(() => {
    window.addEventListener("scroll", () => {
      window.scrollY > 60 ? setIsActive(true) : setIsActive(false);
    });
  });
  let location = useLocation();
  useEffect(() => {
    if (location.pathname == "/") {
      setpath(true);
    } else {
      setpath(null);
    }
    const handleResize = () => {
      settogle(window.innerWidth <= 800);
    };
    handleResize();
    window.addEventListener("resize", handleResize);
    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, [location]);
  return (
    <div
      className={style.container}
      style={{
        backgroundColor: isActive ? "rgb(236, 236, 236)" : false,
      }}
    >
      <div>
        <h2 style={{ color: isActive ? "#43b97f" : "white" }}> travelaja</h2>
      </div>

      {togle ? (
        false
      ) : (
        <nav
          style={{
            display: "flex",
            width: "60%",
            justifyContent: "space-between",
          }}
        >
          <Link className={isActive ? style.linkScrool : style.link} to="/">
            Home
          </Link>
          <Link className={isActive ? style.linkScrool : style.link} to="/news">
            Discover
          </Link>
          <Link
            className={isActive ? style.linkScrool : style.link}
            to="/services"
          >
            Services
          </Link>
          <Link className={isActive ? style.linkScrool : style.link} to="/news">
            News
          </Link>
          <Link
            className={isActive ? style.linkScrool : style.link}
            to="/about"
          >
            About Us
          </Link>
          <Link
            className={isActive ? style.linkScrool : style.link}
            to="/services"
          >
            Contact
          </Link>
        </nav>
      )}

      <div style={{ display: "flex", alignItems: "center", gap: 13 }}>
        <img
          src="https://upload.wikimedia.org/wikipedia/commons/thumb/8/89/Flag_of_Indonesia_%28physical_version%29.svg/2560px-Flag_of_Indonesia_%28physical_version%29.svg.png"
          alt="error"
          style={{ height: 20, width: 20, borderRadius: 100 }}
        />
        <h4 style={{ cursor: "pointer" }}>ID</h4>
        <img
          src="https://images.tokopedia.net/blog-tokopedia-com/uploads/2019/10/Blog_Kenal-Dekat-Jung-kook-BTS-Lewat-Profil-Fakta-Menarik-Dirinya.jpg"
          alt="error"
          style={{
            height: 30,
            width: 30,
            borderRadius: 100,
            cursor: "pointer",
          }}
        />

        {togle && (
          <FiAlignJustify style={{ fontSize: 30 }} onClick={handleShow} />
        )}
        <Modal show={show} onHide={handleClose} className={style.modal_right}>
          <Modal.Body style={{}}>
            <nav
              style={{
                display: "flex",
                flexDirection: "column",
              }}
            >
              <Link className={style.clfalse} to="/" onClick={handleClose}>
                Home
              </Link>
              <Link className={style.clfalse} to="/news" onClick={handleClose}>
                Discover
              </Link>
              <Link
                className={style.clfalse}
                to="/services"
                onClick={handleClose}
              >
                Services
              </Link>
              <Link
                className={style.clfalse}
                to="/services"
                onClick={handleClose}
              >
                News
              </Link>
              <Link className={style.clfalse} to="/about" onClick={handleClose}>
                About Us
              </Link>
              <Link
                className={style.clfalse}
                to="/services"
                onClick={handleClose}
              >
                Contact
              </Link>
            </nav>
          </Modal.Body>
        </Modal>
      </div>
    </div>
  );
}
