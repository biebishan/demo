import React, { Component } from 'react';
import { List, Button, Input } from 'antd';
import store from '../store/store';
import apiObj from '../api/index'
import { queryData, login } from '../actions'
const { Search } = Input;
const {
    getData
} = apiObj
class list extends Component {
    constructor(props) {
        super(props)
        this.state = {}
    }
    componentDidMount() {
        store.subscribe(() => {
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
            get: function (target, propKey) {
                return '多多'
            }
        }
        let p1 = new Proxy(target, handler)

        console.log(p1.gender)
    }
    _handleTestPromise = () => {

    }
    _handleTestReflect = () => {

    }
    _handleTestIterator = () => {

        let a1 = [1, 3, 5]
        a1.foo = 'hello'
        console.log(a1)
        //for in语句以原始插入熟悉, 迭代对象的可枚举属性
        for (let i in a1) {
            console.log(i);
        }
         //for of语句遍历可迭代对象定义要迭代的数据, 迭代出的数据是基于可迭代对象的默认迭代器的
        //  let iterable = new Map([['a', 1], ['b', 2], ['c', 3]])
         let iterable = ['a', 'b', 'c']
         for (let key of iterable) {
            console.log(key);
        }
    }

    _generatorTest = function *generatorTest(){
        //Generator 是一个普通函数, 但是有两个特征, 一是function关键字与函数名之间有一个*, 二是函数内部使用yield表达式
        // yield 'hello';
        // yield 'world';
        console.log('getData', getData)
        //这里可以对比一下项目中dva的effects, 都是generator函数
        yield getData();
        console.log('顺利执行')
        return '!!'

    }
    _handleTestGenerator = () => {
        let res = this._generatorTest()
        console.log(res.next())
        console.log(res.next())
        // console.log(res.next())
    }
    _handleOnSearch = (value) => {
        const action = login(value)
        store.dispatch(action)
    }
    render() {
        return (
            <div>
                <Button onClick={this._handleTestSymbol}>Symbol测试</Button><br />
                <Button onClick={this._handleTestSet}>Set测试</Button><br />
                <Button onClick={this._handleTestMap}>Map测试</Button><br />
                <Button onClick={this._handleTestProxy}>Proxy测试</Button><br />
                <Button onClick={this._handleTestReflect}>Reflect测试</Button><br />
                <Button onClick={this._handleTestPromise}>Promise测试</Button><br />
                <Button onClick={this._handleTestIterator}>Iterator测试</Button><br />
                <Button onClick={this._handleTestGenerator}>Gennerator测试</Button><br />
                <Search
                    onSearch={this._handleOnSearch}
                /><br/>
            </div>
        )
    }
}
export default list