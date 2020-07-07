import React, { Component } from 'react';
import { Button } from 'antd';
class header extends Component{
    constructor(props){
        super(props)
        this.state = {

        }
    }
    _handleQueryData = () => {
        console.log('1232', this.props)
    }
    render(){
        return(
            <div>
                <Button onClick={this._handleQueryData}>获取数据</Button>
            </div>
        )
    }
}
export default header