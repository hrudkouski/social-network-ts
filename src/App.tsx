import React from 'react';
import logo from './logo.svg';
import './App.css';

function App() {
    return (
        <div className="App-wrapper">
            <header className="App-header">
                <img src={logo} className="App-logo" alt="logo"/>
            </header>

            <nav className='App-nav'>
                <div>
                    <a href="https://www.google.com/">Profile</a>
                </div>
                <div>
                    <a href="https://www.google.com/">Messages</a>
                </div>
                <div>
                    <a href="https://www.google.com/">News</a>
                </div>
                <div>
                    <a href="https://www.google.com/">Music</a>
                </div>
                <div>
                    <a href="https://www.google.com/">Settings</a>
                </div>
                <div>
                    <a href="https://www.google.com/">Find friends</a>
                </div>
            </nav>

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

        </div>
    );
}

export default App;
