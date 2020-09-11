import React, { Component } from 'react';
import { Button } from 'antd';
import store from '../store/store';
import { queryData } from '../actions'
class Header extends Component{
    constructor(props){
        super(props)
        this.state = {

        }
    }
    componentDidMount(){
        store.subscribe( () => {
        })
    }
    _handleQueryData = () => {
        const action = queryData(['这是获取的数据'])
        store.dispatch(action)
    }
    render(){
        return(
            <div>
                <Button onClick={this._handleQueryData}>获取数据</Button>
            </div>
        )
    }
}
export default Header