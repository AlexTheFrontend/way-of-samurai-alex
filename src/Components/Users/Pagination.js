import React from 'react';
import styles from "./users.module.css";

let Pagination = (props) => {

    //to round up a number
    // let pagesCount = Math.ceil(props.totalUsersCount / props.pageSize);
    // console.log("Total #", pagesCount);
    let pages = [];
    //limiting pages manually to 50
    for (let i = 1; i <= 50; i++) {
        pages.push(i);
    }

    //other option
    // for (let i=Math.max(this.props.currentPage - 5, 1); i <= Math.max(1, Math.min(this.props.currentPage + 5, pagesCount)); i++) {
    //   pages.push(i);
    // }

    return <div className={styles.pagesScroll}>
        {pages.map(p => {
            return <span className={props.currentPage === p && styles.selectedPage}
                         onClick={(e) => {
                             props.onPageChange(p)
                         }}>{p}</span>
        })}
    </div>

}

export default Pagination;
