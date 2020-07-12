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
import Header from './components/header.jsx'
import List from './components/list.jsx'
import store from './store/store'
import { Provider } from 'react-redux'
import { Divider } from 'antd';
const App = () => {
    return (
        <Provider store={store}>
            <div>
                <Header />
                <List />
            </div>
        </Provider>

    )
}
export default App
