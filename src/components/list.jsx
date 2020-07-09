import React, { Component } from 'react';
import { List, Button } from 'antd';
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
    _handleTestSymbol = () => {
        //Symbol数据类型
        //Symbol对象就是为了创建独一无二的值的, 传参只是为了描述当前Symbol的值, 传参一样也会产生不同的值
        let s1 = Symbol('foo')
        let s2 = Symbol('foo')
        console.log('Symbol', s1 == s2, typeof (s1), typeof (s2))
    }
    _handleTestSet = () => {
        //新的数据结构Set,类似数组, 但是成员的值是唯一的, 没有重复的值
        let set1 = [11, 2, 3, 1, 2, 3, 4, 11, 5]
        console.log([...new Set(set1)])
        //new Set可以去除数组中的重复成员, 内部的判断是通过'==='判断, 但是NAN会被判断为同一个

        //方法 
        let s1 = new Set()
        //add(添加成员, 返回set本身)
        console.log('s1', s1.add(1))
        console.log('s1', s1.add(2))
        //delete(删除成员, 返回bool值,表示是否删除成功)
        // console.log(s1.delete(1))
        //has(判断是否有某个成员)
        // console.log(s1.has(2))
        // clear(清空所有成员, 没有返回值)
    }
    _handleTestMap = () => {
        //Map数据结构类似对象, Map对象可以接受Array作为参数(具有iterator的接口的数据结构)
        const arr = [
            ['name', '小三'],
            ['title', '...']
        ]
        let m1 = new Map(arr)
        console.log(m1)
        console.log(m1.get('name'))
        //接受数组为参数, 实际是:
        arr.forEach((key, value) => {
            m1.set(key, value)
        })
    }
    _handleTestProxy = () => {
        let target = {
            name: '小小',
            age: 18
        }
        let handler = {
            get: function(target, propKey){
                return '多多'
            }
        }
        let p1 = new Proxy(target, handler)

        console.log(p1.gender)
    }
    _handleTestReflect = () => {
        
    }
    render() {
        return (
            <div>
                <Button onClick={this._handleTestSymbol}>Symbol测试</Button><br />
                <Button onClick={this._handleTestSet}>Set测试</Button><br />
                <Button onClick={this._handleTestMap}>Map测试</Button><br />
                <Button onClick={this._handleTestProxy}>Proxy测试</Button><br />
                <Button onClick={this._handleTestReflect}>Reflect测试</Button><br />
            </div>
        )
    }
}
export default list