import React, { Component } from 'react';
import { List, Button, Input } from 'antd';
import store from '../store/store';
import { queryData, login } from '../actions'
import './Test.less';
import {
    BrowserRouter as Router,
    Switch,
    Route,
    Link
} from "react-router-dom";
const { Search } = Input;
class Test extends Component {
    constructor(props) {
        //子类American继承父类Person，子类没用定义constrcutor,则默认添加一个，并且在constrcutor中调用super函数,相当于调用父类的构造函数。
        //调用super函数是为了在子类中获得父类的this，调用之后this指向子类。也就是父类.prototype.constructor.call(this)
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
        console.log('Symbol', s1 === s2, typeof (s1), typeof (s2))
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
    _promise = () => {
        return new Promise((resolve, reject) => {
            setTimeout(() => {
                reject(11)
            }, 3000)
        })
    }
    _handleTestPromise = () => {
        this._promise().then((res) => {
            console.log(res)
        }).catch((err) => {
            console.log(err)
        })

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

        let infoObj = {
            name: 'jack',
            age: 18,
            [Symbol.iterator]: function () {
                return {
                    next: function () {
                        return {
                            value: 1,
                            done: true
                        };
                    }
                };
            }
        }
        let iter = infoObj[Symbol.iterator]()
        console.log(iter.next())


        let obj = {
            data: ['hello', 'world'],
            [Symbol.iterator]() {
                const self = this;
                let index = 0;
                return {
                    next() {
                        if (index < self.data.length) {
                            return {
                                value: self.data[index++],
                                done: false
                            };
                        } else {
                            return { value: undefined, done: true };
                        }
                    }
                };
            }
        };
        for (let value of obj) {
            console.log(value)
        }
    }

    _generatorTest = function* generatorTest() {
        //Generator 是一个普通函数, 但是有两个特征, 一是function关键字与函数名之间有一个*, 二是函数内部使用yield表达式
        // yield 'hello';
        // yield 'world';
        // console.log('getData', getData)
        //这里可以对比一下项目中dva的effects, 都是generator函数
        // yield getData();
        yield 'a'
        yield 'b'
        yield 'c'
        return '!!'

    }
    _generatorTest1 = function run(fn) {
        var gen = fn();
        function next(err, data) {
            var result = gen.next(data);
            if (result.done) return;
            console.log(result)
            result.value(next);
        }
        next();
    }
    _handleTestGenerator = () => {
        // this._generatorTest1(this._generatorTest)
        // const Thunk = function (fn) {
        //     return function (...args) {
        //         return function (callback) {
        //             return fn.call(this, ...args, callback);
        //         }
        //     };
        // };
        // function f(a, cb) {
        //     cb(a);
        // }
        // const ft = Thunk(f);
        // ft(1)(console.log)
        // let res = this._generatorTest()
        // for(let key of res){
        //     console.log(key)
        //     console.log(res)
        // }
        // console.log(res.next())
        // console.log(res.next())
        // console.log(res.next())
    }
    _handleOnSearch = (value) => {
        const action = login(value)
        store.dispatch(action)
    }

    _handleTestAsync = () => {
        function timeout(ms) {
            return new Promise((resolve) => {
                setTimeout(resolve, ms);
            });
        }

        async function asyncPrint(value, ms) {
            await timeout(ms);
            console.log(value);
        }

        asyncPrint('hello world', 2000)
    }

    _handleTestClass = () => {
        class Person {
            constructor(name, age) {
                this.name = name;
                this.age = age;
            }
            toString() {
                return '(' + this.name + ',' + this.age + ')'
            }
            //静态方法不会被实例继承
            static classMethod() {
                return 'hello';
            }
        }
        const p1 = new Person('jack', '18')
        console.log('p1', p1.toString())
        class Point {
            constructor(name, age) {
                this.name = name;
                this.age = age;
            }
            static hello() {
                console.log('hello world')
            }
        }
        class ColorPoint extends Point {
            constructor(x, y, color) {
                super(x, y)
                this.color = color

            }
            toString() {
                return this.color + ' ' + super.toString();
            }
        }
        const point1 = new ColorPoint('lili', 18, 'pink')
        console.log('point1', point1)
        console.log('ColorPoint', ColorPoint.hello)
        //子类必须在constructor方法中调用super方法，否则new实例时会报错。因为子类没有自己的this对象，而是继承父类的this对象。
        //如果不调用super函数，子类就得不到this对象。super()作为父类的构造函数，只能出现在子类的constructor()中；
        //但是super指向父类的原型对象，可以调用父类的属性和方法

        // console.log(foo.classMethod())
    }
    render() {
        return (
            <div className='asideBtnWrapper'>
                <Button onClick={this._handleTestSymbol}>Symbol测试</Button><br />
                <Button onClick={this._handleTestSet}>Set测试</Button><br />
                <Button onClick={this._handleTestMap}>Map测试</Button><br />
                <Button onClick={this._handleTestProxy}>Proxy测试</Button><br />
                <Button onClick={this._handleTestReflect}>Reflect测试</Button><br />
                <Button onClick={this._handleTestPromise}>Promise测试</Button><br />
                <Button onClick={this._handleTestIterator}>Iterator测试</Button><br />
                <Button onClick={this._handleTestGenerator}>Gennerator测试</Button><br />
                <Button onClick={this._handleTestAsync}>Async测试</Button><br />
                <Button onClick={this._handleTestClass}>Class测试</Button><br />
                <Search
                    onSearch={this._handleOnSearch}
                /><br />
            </div>
        )
    }
}
export default Test