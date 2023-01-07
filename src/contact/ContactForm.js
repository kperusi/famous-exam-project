import React from "react";
import styles from "./contact.module.css";
export default function ContactForm() {

  const btnClick=(e)=>{
e.preventDefault()
  }
  return (
    <main className={styles.main}>
      <div className={styles.email}>
        <h1 style={{ color: "grey" }}>@ e-mail</h1>
        <form className={styles.form} action="">
          <input type="text" className={styles.input} placeholder="Name" />
          <input type="text" className={styles.input} placeholder="Email" />
          <textarea
            className={styles.textarea}
            name="message"
            id=""
            cols="20"
            rows="10"
            placeholder="Message"
          ></textarea>
          <button className={styles.btn} onClick={btnClick}>Send</button>
        </form>
      </div>

      <div className={styles.others}>
        <div className={styles.iconwrap}>
          <span className={styles.facebookicon}
          onClick={() => {
            window.open("https://web.facebook.com/famous05");
          }} ></span>

          <h1 style={{padding:'10px', color:'grey',fontSize:'20px'}}>facebook.com/famous05</h1>
        </div>

        <div>
          <div className={styles.iconwrap}>
            <span className={styles.twittericon}
          onClick={() => {
            window.open("https://twitter.com/FamousSunday5");
          }}></span>
            <h1 style={{padding:'10px', color:'grey',fontSize:'20px'}}>twitter.com/FamousSunday5</h1>
          </div>
          
        </div>

        <div>
          <div className={styles.iconwrap}>
          <span  className={styles.linkedinicon}
          onClick={() => {
            window.open("https://www.linkedin.com/in/sunday-famous25/");
          }}></span>
           <h1 style={{padding:'10px', color:'grey',fontSize:'20px'}}>linkedin.com/in/sunday-famous25</h1>
          </div>
         
        </div>

        <div>
          <div className={styles.iconwrap}>
          <span className={styles.githubicon}
          onClick={() => {
            window.open("https://github.com/kperusi");
          }} ></span>
           <h1 style={{padding:'10px', color:'grey',fontSize:'20px'}}>github.com/kperusi</h1>
           </div>
        </div>
      </div>
    </main>
  );
}
9;
