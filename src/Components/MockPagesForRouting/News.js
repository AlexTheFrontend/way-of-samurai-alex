import React from 'react';
import styles from './all.module.css';
import congrats from "../../Pictures/congrats.jpeg";

const News = (props) => {
    return (<>
            <div className={styles.n}>
                This is amazing! <br />
                Alex was working on this project for at least <span style={{color: 'red'}}>4</span> months <br />
                He is about to finish his final project and submit it! <br />
                Exciting!!!
            </div>
            <img src={congrats} />
    </>

    )
}

export default News;

