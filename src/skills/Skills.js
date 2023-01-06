import React from "react";
import styles from "./skillstyles.module.css";
export default function Skills(props) {
  return (
    <main className={styles.main}>
      
        <img className={styles.img} src={props.imgscr} alt={props.imgName} style={{width:'50px',height:'50px'}}/>
    

<div className={styles.headerwrap}>
<h1 className={styles.header}>{props.name}</h1>
<p style={{marginTop:'-15px'}}>{props.description}</p>
</div>

    </main>
  );
}
