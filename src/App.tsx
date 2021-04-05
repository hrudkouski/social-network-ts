import React from 'react';
import s from '../src/App.module.css'
import {Header} from "./components/Header/Header";
import {Navbar} from "./components/Navbar/Navbar";
import {Profile} from "./components/Profile/Profile";

function App() {
    return (
        <div className={s.AppWrapper}>
            <Header/>
            <Navbar/>
            <Profile/>
        </div>
    );
}

export default App;
