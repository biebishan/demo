/*
 * @Author: your name
 * @Date: 2020-07-07 22:31:39
 * @LastEditTime: 2020-07-07 22:40:44
 * @LastEditors: Please set LastEditors
 * @Description: In User Settings Edit
 * @FilePath: \demo\src\App.js
 */
import React from 'react';
import ReactDOM from 'react-dom';
import Header from './components/Header.jsx'
// import List from './components/List.jsx'
import store from './store/store'
import { Provider } from 'react-redux'
import { Divider } from 'antd';
import PrimaryLayout from "./layouts/PrimaryLayout.jsx"
const App = () => {
    return (
        <Provider store={store}>
            <div>
                <PrimaryLayout />
            </div>
        </Provider>

    )
}
export default App
