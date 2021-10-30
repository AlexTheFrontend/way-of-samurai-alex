import React from 'react';
import styles from "./users.module.css";
import Pagination from "../Common/Pagination/Pagination";
import User from "./User";

let Users = ({currentPage, onPageChange, totalUsersCount, pageSize, users, ...props}) => {

    return <div className={styles.usersContainer}>
        <div className={styles.paginator}>
            <Pagination currentPage={currentPage} onPageChange={onPageChange} totalItemsCount={totalUsersCount}
                        pageSize={pageSize}/>
        </div>
        <div className={styles.gridStyling}>
            {
                users.map(u =>
                    <User user={u}
                          followingInProgress={props.followingInProgress}
                          key={u.id}
                          unfollow={props.unfollow}
                          follow={props.follow}
                    />)
            }
        </div>
    </div>
}

export default Users;
