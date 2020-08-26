const express = require('express')
const app = express()
//设置允许跨域访问该服务.
app.all('*', function (req, res, next) {
  res.header('Access-Control-Allow-Origin', '*');
  //Access-Control-Allow-Headers ,可根据浏览器的F12查看,把对应的粘贴在这里就行
  res.header('Access-Control-Allow-Headers', 'Content-Type');
  res.header('Access-Control-Allow-Methods', '*');
  res.header('Content-Type', 'application/json;charset=utf-8');
  next();
})
app.get('/getData', (req, res) => res.send('Hello World!'))
app.post('/login', (req, res) => res.send('Hello World!'))
app.listen(3333, () => console.log('Example app listening on port 3333'))