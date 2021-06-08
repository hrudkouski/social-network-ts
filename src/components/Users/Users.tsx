import React from 'react'
import s from "./Users.module.css";
import avatarPhoto from "../../assets/images/avatar.png";
import axios from "axios";
import {UsersPropsType} from "./UsersContainer";

export class Users extends React.Component<UsersPropsType> {

    componentDidMount() {
        axios.get(`https://social-network.samuraijs.com/api/1.0/users?page=${this.props.currentPage}&count=${this.props.totalUserCount}`)
            .then(response => {
                this.props.setUsers(response.data.items)
                this.props.setTotalUsersCount(response.data.totalCount)
            })
    }

    onPageChanged = (pageNumber: number) => {
        this.props.setCurrentPage(pageNumber);
        axios.get(`https://social-network.samuraijs.com/api/1.0/users?page=${pageNumber}&count=${this.props.totalUserCount}`)
            .then(response => {
                this.props.setUsers(response.data.items)
            })
    }

    render() {
        const pagesCount = Math.ceil(this.props.totalUserCount / this.props.pageSize);

        const pages = [];
        for (let i = 1; i <= pagesCount; i++) {
            pages.push(i);
        }

        return <div className={s.dialogs}>
            <div>
                {
                    pages.map((el, index) => {
                        const setCurrentPageHandler = () => this.onPageChanged(el);
                        return (
                            <span
                                onClick={setCurrentPageHandler}
                                className={el === this.props.currentPage
                                    ? s.selectedPage
                                    : ''}
                                key={index}>
                                {el}
                            </span>
                        )
                    })
                }
            </div>

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