import React from "react";
import ReactDOM from "react-dom";
import App from "./App";
import {addMessage, addPost, RootStateType, updateNewPostText, updateTextMessage} from "./redux/state";


export const reRenderEntireTree = (state: RootStateType) => {
    ReactDOM.render(
        <React.StrictMode>
            <App
                addMessage={addMessage}
                updateTextMessage={updateTextMessage}
                state={state}
                updateNewPostText={updateNewPostText}
                addPost={addPost}/>
        </React.StrictMode>,
        document.getElementById('root')
    );
}