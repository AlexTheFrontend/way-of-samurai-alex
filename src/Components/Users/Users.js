import React from "react";

// Check what you are getting in props, always!!!
let Users = (props) => {
  // console.log("Props Check", props)
  return (
      <div> {

      props.listOfUsers.map(u =>
        <div key={u.id}>
      <span>
        <div>
          <img src={u.photoUrl}/>
        </div>
        <div>
          <button>Follow</button>
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