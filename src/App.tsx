import React from 'react';
import s from '../src/App.module.css'
import {Header} from "./components/Header";
import {Navbar} from "./components/Navbar";
import {Profile} from "./components/Profile";

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
