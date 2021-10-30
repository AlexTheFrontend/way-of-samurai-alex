import React from 'react';
import styles from './all.module.css';
import music from "../../Pictures/music.jpeg";

const Music = (props) => {
    return (
        <div className={styles.m}>
            <img src={music} />
        </div>
    )
}

export default Music;

