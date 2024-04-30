const express= require('express');
//const tshirts = require('../model/tshirtModel.js')
const router = express.Router()

const {addcategory,
  showAllcategory,
  deletebyItemNames} =require ('../controllers/categorycontroller.js')


router.route("/addcategory").get(addcategory);

module.exports = router;
