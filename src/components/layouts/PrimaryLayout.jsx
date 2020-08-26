import React, { Component, useState, useEffect } from 'react';
import { Layout, Button, Transfer, Tree } from 'antd';
import './PrimaryLayout.less';
import Test from '../Test';
const { Header, Footer, Sider, Content } = Layout;
function PrimaryLayout() {

    return (
        <div className='primaryLayout'>
            <Layout>
                <Sider>
                <Test/>   
                </Sider>
                <Layout>
                    <Header>Header</Header>
                    <Content>Code</Content>
                    <Footer>Footer</Footer>
                </Layout>
            </Layout>
        </div>
    )
}
export default PrimaryLayout