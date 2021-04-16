const express = require('express')
const app = express()
const jsSHA = require('jssha');
// const mysql = require('mysql')
// var connection = mysql.createConnection({
//   host     : '81.68.220.42',
//   user     : 'root',
//   password : '',
//   database : 'mysql'
// });
// connection.connect( (err) => {
//   if(err) throw err
//   console.log('已连接到数据库')
// })
//设置允许跨域访问该服务.
app.all('*', function (req, res, next) {
  res.header('Access-Control-Allow-Origin', '*');
  //Access-Control-Allow-Headers ,可根据浏览器的F12查看,把对应的粘贴在这里就行
  res.header('Access-Control-Allow-Headers', 'Content-Type');
  res.header('Access-Control-Allow-Methods', '*');
  res.header('Content-Type', 'application/json;charset=utf-8');
  next();
})
app.get('/getData', (req, res) => {
  let sql = 'select * from info'
  // connection.query(sql, (err, result) => {
  //   if(err){
  //     console.log(err)
  //   }else{
  //     res.send(result)
  //   }
  // })
})
app.post('/login', (req, res) => res.send('Hello World!'))
app.get('/wx', (req, res, next) => {
  const token = 'wxToken';
  let signature =  req.query.signature
  let timestamp  =  req.query.timestamp 
  let nonce  =  req.query.nonce 
  let echostr  =  req.query.echostr 
  let arr = [token, timestamp, nonce]
  arr.sort()
  let tempStr = arr.join('');
  let shaObj = new jsSHA('SHA-1', 'TEXT');
  shaObj.update(tempStr);
  let scyptoString=shaObj.getHash('HEX');
   //4.开发者获得加密后的字符串可与signature对比，标识该请求来源于微信
   if(signature === scyptoString){
    console.log('验证成功')
      res.send(echostr);
  }else{
    console.log('验证失败')
      res.send('验证失败');
  }
})
app.listen(80, () => console.log('Example app listening on port 80'))