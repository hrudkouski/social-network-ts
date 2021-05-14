import './index.css';
import reportWebVitals from './reportWebVitals';
import store from "./redux/redux-store";
import React from "react";
import ReactDOM from "react-dom";
import App from "./App";
// import {RootStateType} from "./redux/store";

export let _callSubscriber = () => {
    ReactDOM.render(
        <React.StrictMode>
            <App
                state={store.getState()}
                dispatch={store.dispatch.bind(store)}
            />
        </React.StrictMode>,
        document.getElementById('root')
    );
}

_callSubscriber();
store.subscribe(_callSubscriber)

// 2 variant
// export let _callSubscriber = (state: RootStateType) => {
//     ReactDOM.render(
//         <React.StrictMode>
//             <App
//                 state={state}
//                 dispatch={store.dispatch.bind(store)}
//                 store={store}
//             />
//         </React.StrictMode>,
//         document.getElementById('root')
//     );
// }
//
// _callSubscriber(store.getState());
//
// store.subscribe(() => {
//     let state = store.getState();
//     _callSubscriber(state)
// })

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
