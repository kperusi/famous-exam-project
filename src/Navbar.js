import React from "react";
import { useState } from "react";
import { NavLink } from "react-router-dom";
import Hambuger from "./Hambuger";
import "./navStyle.css";

export default function NavBar() {
  const [show, setShow] = useState("");
  const [back, setBack] = useState("");

  const showHandler = () => {
    if (show === "show") {
      setShow("");
      setBack("");
    } else {
      setShow("show");
      setBack("back");
    }
  };

  return (
    <>
      <nav className="nav-bar">
        <div className="logo">
          <h1>
            Famous <span className="sunday">Sunday</span>
          </h1>
          <h2>Portfolio </h2>
        </div>
        <div className={`nav-wrap ${back}`}>
          <Hambuger showHandler={showHandler} />
          <div className={`nav-section ${show}`}>
            <NavLink className="nav-links" to="/">
              Home
            </NavLink>
            <NavLink className="nav-links" to="/repos">
              Repository
            </NavLink>
            <NavLink
              className="nav-links errorboundary-link"
              to="/errorboundary"
            >
              Error Boundary
            </NavLink>
          </div>
        </div>
      </nav>
    </>
  );
}
