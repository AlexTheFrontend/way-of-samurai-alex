import React from "react";
import styles from './users.module.css'
import * as axios from "axios";
import Avatar from "../../Pictures/Avatar.jpeg"

// Check what you are getting in props, always!!!
let Users = (props) => {
  // console.log("Props Check", props)

  if (props.users.length === 0) {

    axios.get("https://social-network.samuraijs.com/api/1.0/users").then(response => {
      // as per provided API
      props.setUsers(response.data.items)
    })

  }

  return (
      <div className={styles.container}> {

        props.users.map(u =>
                <div key={u.id}>
      <span>
        <div>
          <img src={u.photos.small != null ? u.photos.small : Avatar}
               className={styles.userPhoto}/>
        </div>
        <div>
          {u.followed
              ? <button onClick={() => {
                props.unfollow(u.id)
              }}>Unfollow</button>
              : <button onClick={() => {
                props.follow(u.id)
              }}>Follow</button>
          }
        </div>
      </span>
                  <span>
          <span>
            <div>{u.name}</div>
            <div>{u.status}</div>
          </span>
          <span>
            {/*for future use*/}
            <div>{"u?.location?.country"}</div>
            <div>{"u?.location?.city"}</div>
          </span>
        </span>
                </div>
        )
      }
      </div>)
}


export default Users;