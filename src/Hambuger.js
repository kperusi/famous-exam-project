import React from "react";
import { useState } from "react";

export default function Hambuger(props) {
  const style = {
    display: "block",
    width: " 40px",
    height: " 4px",
    margin: "8px",
    transition: " all 0.3s ease-in-out",
    backgroundColor: "grey",
  };
  const [classname, setClassname] = useState("");

  const toggle = () => {
    if (classname === "active") {
      setClassname("");
    } else {
      setClassname("active");
    }
    props.showHandler()
  };

  return (
    <div className={`hambuger ${classname}`} onClick={() => toggle()}>
      <span className="line" style={style}></span>
      <span className="line" style={style}></span>
      <span className="line" style={style}></span>
    </div>
  );
}
