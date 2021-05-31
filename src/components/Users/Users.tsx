import React from 'react'
import s from "./Users.module.css";
import avatarPhoto from "../../assets/images/avatar.png";
import axios from "axios";
// import {UsersPageType, UserType} from "../../redux/users_reducer";
import {UsersPropsType} from "./UsersContainer";

// type UsersClassPropsType = {
//     userPage: UsersPageType
//     followUser: (userID: number) => void
//     unFollowUser: (userID: number) => void
//     setUsers: (users: Array<UserType>) => void
// }

export class Users extends React.Component<UsersPropsType> {

    componentDidMount() {
        axios.get('https://social-network.samuraijs.com/api/1.0/users')
            .then(response => {
                this.props.setUsers(response.data.items)
            })
    }

    render() {
        return <div className={s.dialogs}>
            {
                this.props.userPage.users.map((el) => <div key={el.id}>
                <span>
                    <div>
                        <img
                            className={s.photo}
                            src={el.photos.small !== null
                                ? el.photos.small
                                : avatarPhoto}
                            alt="avatar"
                        />
                    </div>
                    <div>
                            {el.followed
                                ? <button onClick={() => {
                                    this.props.unFollowUser(el.id)
                                }}>UnFollow</button>
                                : <button onClick={() => {
                                    this.props.followUser(el.id)
                                }}>Follow</button>}
                    </div>
                </span>
                    <span>
                    <span>
                        <div>{el.name}</div>
                        <div>{el.status}</div>
                    </span>
                    <span>
                        <div>el.location.country</div>
                        <div>el.location.city</div>
                    </span>
                </span>
                </div>)
            }
        </div>;
    }
}