import React from "react";
import styles from './users.module.css'

// Check what you are getting in props, always!!!
let Users = (props) => {
  // console.log("Props Check", props)

  if (props.users.length === 0) {
    props.setUsers(
        [
          {
            id: 1,
            photoUrl: 'https://prod-ripcut-delivery.disney-plus.net/v1/variant/disney/8D1846B097E4295A4DFE62AA834A62A6EB36F4D54EB451AB0F867FCA2BB30709/scale?width=1200&aspectRatio=1.78&format=jpeg',
            followed: false,
            fullName: 'Alex',
            status: 'Developer',
            location: {city: 'Auckland', country: 'New Zealand'}
          },
          {
            id: 2,
            photoUrl: 'https://prod-ripcut-delivery.disney-plus.net/v1/variant/disney/8D1846B097E4295A4DFE62AA834A62A6EB36F4D54EB451AB0F867FCA2BB30709/scale?width=1200&aspectRatio=1.78&format=jpeg',
            followed: true,
            fullName: 'Vasya',
            status: 'Supply Chain',
            location: {city: 'Moscow', country: 'Russia'}
          },
          {
            id: 3,
            photoUrl: 'https://prod-ripcut-delivery.disney-plus.net/v1/variant/disney/8D1846B097E4295A4DFE62AA834A62A6EB36F4D54EB451AB0F867FCA2BB30709/scale?width=1200&aspectRatio=1.78&format=jpeg',
            followed: false,
            fullName: 'Andy',
            status: 'Sales',
            location: {city: 'Yourk New', country: 'USA'}
          },
          {
            id: 4,
            photoUrl: 'https://prod-ripcut-delivery.disney-plus.net/v1/variant/disney/8D1846B097E4295A4DFE62AA834A62A6EB36F4D54EB451AB0F867FCA2BB30709/scale?width=1200&aspectRatio=1.78&format=jpeg',
            followed: true,
            fullName: 'Henry',
            status: 'Head-Developer',
            location: {city: 'Vancouver', country: 'Canada'}
          },
        ],
    )
  }

  return (
      <div className={styles.container}> {

        props.users.map(u =>
                <div key={u.id}>
      <span>
        <div>
          <img src={u.photoUrl} className={styles.userPhoto}/>
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
            <div>{u.fullName}</div>
            <div>{u.status}</div>
          </span>
          <span>
            <div>{u.location.country}</div>
            <div>{u.location.city}</div>
          </span>
        </span>
                </div>
        )
      }
      </div>)
}


export default Users;