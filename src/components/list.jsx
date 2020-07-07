import React, { Component } from 'react';
import { List } from 'antd';
import store from '../store/store';
class list extends Component {
    constructor(props) {
        super(props)
        this.state = {}
    }
    componentDidMount(){
        store.subscribe( () => {
            //订阅之后再次render页面
           this.setState({})
        })
    }
    render() {
        return (
            <div>
                <List
                    header={<div>Header</div>}
                    footer={<div>Footer</div>}
                    bordered
                    dataSource={store.getState().listData}
                    renderItem={item => (
                        <List.Item>
                            {item}
                        </List.Item>
                    )}
                />
            </div>
        )
    }
}
export default list