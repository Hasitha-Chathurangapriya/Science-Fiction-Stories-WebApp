const express = require('express');
const app = express();
const cors = require('cors');
const port = 3002;
const host = 'localhost';
const mongoose =require('mongoose');
const router = require('./router');

app.use(cors());
app.use(express.json());

const uri = 'mongodb+srv://hasitha123:AsIWhcE5sN7qoEw9@mern.43ejfw8.mongodb.net/?retryWrites=true&w=majority'

const connect = async () =>{
    try{
        await mongoose.connect(uri);
        console.log('Connected to MongoDB');
    }
    catch(error){
        console.log('MongoBD Error',error);
    }
};



connect();

const server = app.listen(port,host, () =>{
    console.log(`Node server is listening to ${server.address().port}`)
});

app.use('/api', router);