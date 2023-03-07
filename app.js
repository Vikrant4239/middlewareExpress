const http = require('http');
const express = require('express');
const bodyParser = require('body-parser');
const app=express();
app.use(bodyParser.urlencoded({extended:false}));

app.use('/add-product',(req,res,next)=>{
    console.log("this is middleware1");
    res.send('<form action="/product" method="POST"><label for="title">Item</label><input type="text" name="title"><label for="quantity">Quantity</label><input type="number" name="quantity"><button type="submit">Add product</button></form>');
    
});
app.use('/product',(req,res,next)=>{
    console.log(req.body);
    res.redirect('/')
    
});

app.use((req,res,next)=>{
    console.log("this is middleware2");
    res.send('<h1>Hello I am server</h1>')
    
});

const server = http.createServer(app);
server.listen(3000);