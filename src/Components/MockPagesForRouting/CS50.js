import React from 'react';
import styles from './all.module.css';
import cs50 from "../../Pictures/cs50.jpeg";

const CS50 = (props) => {
    return <div className={styles.s}>
        <div className={styles.try}>Try to click the picture below!</div>
           <a href={'https://cs50.harvard.edu/college/2021/fall/'} target={'_blank'}><img src={cs50} /></a>
        </div>

}

export default CS50;

