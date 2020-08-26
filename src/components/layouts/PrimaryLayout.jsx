import React, { Component, useState, useEffect } from 'react';
import { Layout, Button, Transfer, Tree } from 'antd';
import './PrimaryLayout.css';
import { CSSTransitionGroup  } from 'react-transition-group';
import ReactCSSTransitionGroup from 'react-addons-css-transition-group';
const { Header, Footer, Sider, Content } = Layout;
function PrimaryLayout() {
  
    return (
        <div className='primaryLayout'>
            <div className='primaryLayout_btn'>
                <Button>prev</Button>
                <Button>next</Button>
            </div>
        </div>
    )
}
export default PrimaryLayout