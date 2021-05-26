import styles from "../Preloader/Preloader.module.css"
import scater from "../../../Pictures/Scater.gif";
import React from "react";

const Preloader = (props) => {
  return <div>
  <img className={styles.scater} src={scater} alt={''}/>
  </div>
}

export default Preloader;
