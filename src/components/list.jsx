import React, { Component } from 'react';
import { List } from 'antd';
import { createStore } from 'redux';
class list extends Component {
    constructor(props) {
        super(props)
        this.state = {
            data:[
                'test1'
            ]
        }
    }
    render() {
        return (
            <div>
                <List
                    header={<div>Header</div>}
                    footer={<div>Footer</div>}
                    bordered
                    dataSource={this.state.data}
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