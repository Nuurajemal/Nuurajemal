const express = require('express')

const {addUser,deleteUser} = require('../controllers/usercontroller.js')
const {isAdmin, isOwner} = require('../midleWare/aouthMidleWare.js')
//const {isAdmin,isSalered} = require('../midleWare/roleCheck.js');

const router = express.Router();


//adding user to the database
// api/users/adduser

router.route("/adduser").post(isAdmin,addUser);

//delete user from the database
// api/users/deleteuser

router.route("/deleteuser").post(isAdmin,deleteUser);
//adding admin to database 
router.route("/add-admin").post(isOwner,addUser);


module.exports = router;