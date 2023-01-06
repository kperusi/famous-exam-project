import React from "react";
import styles from "./titlestyles.module.css";

export default function Title(props) {
  return (
    <div className={styles.title} style={{backgroundColor:props.headerColor,paddingLeft:props.paddingLeft, color:props.textColor}}>
      <h1 className={styles.header} style={{ justifyContent: props.right,backgroundColor:props.subHeaderColor  }}>
        {props.name}
      </h1>
      <h3 className={styles.subheader} style={{ justifyContent: props.right }}>
        {props.alias}
      </h3>
    </div>
  );
}
