const express = require('express');
const app = express();

//GET, POST, PUT, DELETE,..

const person = {
    id: 1,
    name: 'Manav',
    email: 'manav@gmail.com',
    id: 2,
    name: 'Raghav',
    email: 'raghav@gmail.com'
}

app.get('/hello',(req,res)=>{
    try{
        res.send('Hello World');
    }
    catch(err){
        res.send('Something went wrong.');
    }
})

app.get('/alluser/:name',(req,res)=>{
    try{
        let name = req.params.name;
        res.send(name);
    }
    catch(err){
        res.send('Something went wrong.');
    }
})


app.listen(3000, ()=>{
    console.log('Done');
})