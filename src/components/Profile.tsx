import React from 'react';
import logo from "../logo.svg";

export const Profile = () => {
    return (
        <div className='App-content'>
            <div>
                <img src={logo} className="App-logo" alt="logo"/>
            </div>
            <div>
                ava + description
            </div>
            <div>
                My posts
                <div>
                    New post
                </div>
            </div>

        </div>
    );
}