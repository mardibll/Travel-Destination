import React, { useEffect, useState } from "react";
import style from "./style.module.css";
import { Link, useLocation } from "react-router-dom";
import { FiAlignJustify } from "react-icons/fi";
import "bootstrap/dist/css/bootstrap.min.css";
import { Button, Modal } from "react-bootstrap";
export default function Header() {
  const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);
  const [path, setpath] = useState(false);

  let location = useLocation();
  useEffect(() => {
    if (location.pathname == "/") {
      setpath(true);
    } else {
      setpath(null);
    }
  }, [location]);
  return (
    <div className={style.container}>
      <div>
        <h2 style={{ color: path ? "white" : "#295943" }}> travelaja</h2>
      </div>

      {/* <nav
        style={{
          display: "flex",
          width: "60%",
          justifyContent: "space-between",
        }}
      >
        <Link className={path ? style.cltrue : style.clfalse} to="/">
          Home
        </Link>
        <Link className={path ? style.cltrue : style.clfalse} to="/news">
          Discover
        </Link>
        <Link className={path ? style.cltrue : style.clfalse} to="/services">
          Services
        </Link>
        <Link className={path ? style.cltrue : style.clfalse} to="/news">
          News
        </Link>
        <Link className={path ? style.cltrue : style.clfalse} to="/about">
          About Us
        </Link>
        <Link className={path ? style.cltrue : style.clfalse} to="/services">
          Contact
        </Link>
      </nav> */}

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

        {/* <FiAlignJustify style={{ fontSize: 30 }} onClick={handleShow} />
        <Modal show={show} onHide={handleClose} className={style.modal_right}>
          <Modal.Body>y
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
              <Link className={style.clfalse} to="/news" onClick={handleClose}>
                News
              </Link>
              <Link className={style.clfalse} to="/" onClick={handleClose}>
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
        </Modal> */}

        {/* <Modal.Footer>
              <Button variant="secondary" onClick={handleClose}>
                Close
              </Button>
              <Button variant="primary" onClick={handleClose}>
                Save Changes
              </Button>
            </Modal.Footer> */}
      </div>
    </div>
  );
}
