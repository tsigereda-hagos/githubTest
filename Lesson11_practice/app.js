// const fs = require('fs');
// const math = require('./math');

// console.log(math);



const express = require('express');
const app = express();

app.set('port', process.env.PORT || 3000);
const port = app.get('port');

app.disable('case sensitive routing')
app.set('case sensitive routing', false)

app.use((req, res, next)=>{
    console.log('This middleware always run!');
    next();
});

app.use('/add-product',(req, res, next)=>{
    console.log('In the middleware!');
    res.send('The "Add Product" Page');
});

// app.use('/product',(req, res, next)=>{
//     console.log(req.body);
//     next();
// });


// app.post('/product', (req, res, next) => { 
// console.log(req.body); 
// res.send('product');
// });


app.use('/', (req, res, next)=>{
    console.log('In another middleware!');
    console.log('Hello from Express');
});



app.listen(3000, ()=>{
    console.log('Your Server is running on 3000');
})