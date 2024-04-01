const express = require('express');
const app = express();
const cors = require('cors');
const controller = require('./Controller')
const UserController = require('./Login/UserController')
const module = require('module')
const model = require('./Login/UserModel')

app.use(cors());

app.use(
    express.urlencoded({
        extended:true,
    })
);

app.use(express.json());


app.get('/users', (req,res) => {
    controller.getUsers((req, res,next) =>{
        res.send();
    });
});

app.post('/createuser', (req, res) => {
    controller.addUser(req.body, (callback) =>{
        res.send();
    })
});

app.post('/updateuser', (req, res) => {
    controller.updateUser(req.body, (callback) =>{
        res.send(callback);
    })
});

app.post('/deleteuser', (req, res) => {
    controller.deleteUser(req.body, (callback) =>{
        res.send(callback);
    })
});


//>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>
app.get('/loginusers', (req,res) => {
    UserController.getLoginUsers((req, res,next) =>{
        res.send();
    });
});

app.post('/createloginuser', (req, res) => {
    UserController.addLoginUser(req.body, (callback) =>{
        res.send();
    })
});

app.post('/updateloginuser', (req, res) => {
    UserController.updateLoginUser(req.body, (callback) =>{
        res.send(callback);
    })
});

app.post('/deleteloginuser', (req, res) => {
    UserController.deleteLoginUser(req.body, (callback) =>{
        res.send(callback);
    })
});


module.exports = app;