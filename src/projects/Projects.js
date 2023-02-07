import React, { useState } from "react";
import nexticon from './forward-arrow.svg'
import styles from "./projectstyles.module.css";
import { ProjectList } from "./ProjectList";

export default function Projects() {
  const [currentPage, setCurrentPage]=useState(1)
  let projectPerPage = 3;
  let NumberOfPages = Math.ceil(ProjectList.length / projectPerPage);
  let lastIndex = currentPage*projectPerPage;
  let startIndex = lastIndex-projectPerPage


  let projects = ProjectList.slice(startIndex, lastIndex).map((eachProject, index) => (
    <div
    key={index}
      className={styles.main}
      style={{ backgroundColor: eachProject.backgroundColor }}
    >
      <h1 className={styles.header}>{eachProject.name}</h1>
      <img
        className={styles.img}
        style={{ width: eachProject.imgWidth, height: eachProject.imgHeight }}
        src={eachProject.imgsrc}
        alt={eachProject.name}
      />
        
      <div className={styles.details}>
       <p className={styles.projectdesc}>{eachProject.desc}</p>
        <div className={styles.projectdescwrap}></div>
        <div className={styles.btnwrap}>
        <button className={styles.gitbtn} onClick={() => {
                window.open(eachProject.github);
              }}>github repository </button>
        <button className={styles.livebtn} onClick={() => {
                window.open(eachProject.live);
              }}>live Url </button>

        </div>
      </div>
    </div>
  ));

  return (
    <main className={styles.top}>
      <ul className={styles.list}>{projects}</ul>
      <div className={styles.btnWrap}>
         <button className={styles.btn} onClick={()=>{setCurrentPage(currentPage-1)}}  disabled={currentPage<=1}>
         <img src={nexticon}alt="next" className={styles.backarrow} />
         </button>
        <button className={styles.btn} onClick={()=>{setCurrentPage(currentPage+1)}} disabled= {currentPage>NumberOfPages-1}>
          <img src={nexticon}alt="next" className={styles.forwardarrow} />
          </button>
       
      </div>
    </main>
  );
}
