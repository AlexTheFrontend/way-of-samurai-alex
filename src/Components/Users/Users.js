import React from "react";
import styles from './users.module.css'
import * as axios from "axios";
import Avatar from "../../Pictures/Avatar.jpeg"

class Users extends React.Component {

  componentDidMount() {
    axios.get(`https://social-network.samuraijs.com/api/1.0/users?page=${this.props.currentPage}&count=${this.props.pageSize}`)
        .then(response => {
          // as per provided API
          this.props.setUsers(response.data.items);
          this.props.setTotalCount(response.data.totalCount);
        })
  }

  onPageChange = (pageNumber) => {
    this.props.setCurrentPage(pageNumber);
    axios.get(`https://social-network.samuraijs.com/api/1.0/users?page=${pageNumber}&count=${this.props.pageSize}`)
        .then(response => {
          // as per provided API
          this.props.setUsers(response.data.items)
        })
  }

  render() {

    //to round up a number
    let pagesCount = Math.ceil(this.props.totalUsersCount / this.props.pageSize );
    console.log("Total #", pagesCount);
    let pages = [];
    //limiting pages manually to 50
    for (let i = 1; i <= 50; i++) {
      pages.push(i);
    }

    //other option
    // for (let i=Math.max(this.props.currentPage - 5, 1); i <= Math.max(1, Math.min(this.props.currentPage + 5, pagesCount)); i++) {
    //   pages.push(i);
    // }

    return <div>
      <div>
        {pages.map(p => {
          return <span className={this.props.currentPage === p && styles.selectedPage}
                       onClick={(e) => {
                         this.onPageChange(p)
                       }}>
            {p}
          </span>
        })}
      </div>

      {

        this.props.users.map(u =>
                <div key={u.id}>
      <span>
        <div>
          <img src={u.photos.small != null ? u.photos.small : Avatar}
               className={styles.userPhoto}/>
        </div>
        <div>
          {u.followed
              ? <button onClick={() => {
                this.props.unfollow(u.id)
              }}>Unfollow</button>
              : <button onClick={() => {
                this.props.follow(u.id)
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
    </div>
  }
}


export default Users;