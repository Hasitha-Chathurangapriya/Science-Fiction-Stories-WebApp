const express = require('express');
const router = express.Router();
const controller = require('./Controller'); 
const UserController = require('./Login/UserController')


router.get('/user', controller.getUsers);
router.post('/createuser', controller.addUser);
router.post('/updateuser', controller.updateUser);
router.post('/deleteuser', controller.deleteUser);

router.get('/loginuser', UserController.getLoginUsers);
router.post('/createloginuser', UserController.addLoginUser);
router.post('/updateloginuser', UserController.updateLoginUser);
router.post('/deleteloginuser', UserController.deleteLoginUser);

module.exports = router;
