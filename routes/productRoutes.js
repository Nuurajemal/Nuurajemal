const express= require('express');
const {addsales}=require ('../controllers/transactionController');
const {isAdmin}=require('../midleWare/aouthMidleWare.js')
const {addproducts,deleteItembyproductID,sellingItem} = require('../controllers/productcontrollers.js')
/*import {
    validateRegisterationInput,
    validateAdminRegisterationInput,
} from "../validations/registrationValidation.js";
import { validateUpdateProfileInput } from "../validations/updateProfileValidation.js";
import {
    authUser,
    registerCustomer,
    registerDeliveryperson,
    registerAdmin,
    getUserProfile,
    getNearbyHotel,
    editUserProfile,
    getHotelByName,
    deleteUserById,
    getHotelProfile,
    checkPhone,
} from "../controllers/userController.js";

import { protect } from "../middleware/authMiddleware.js";
import { isCustomer, isAdmin } from "../middleware/roleCheck.js";
*/
const router = express.Router();

// @desc    Register a new products
// @route   POST /api/users
// @acess   Public

router.route("/addproducts").post(addproducts);

// @desc    delete product by its size
// @route   POST /api/users
// @acess   Public
router.route("/deletebyItemsize").get(deleteItembyproductID);

// @desc    Delete product by its ID
// @route   POST /api/users
// @acess   Public
router
    .route("/deletebyid")
    .post(isAdmin,deleteItembyproductID);


// @desc    Register a saled item withits date
// @route   POST /api/saledItem
// @acess   Public
router.route("/saleItem").post(addsales);

// @desc    Auth user & get token
// @route   POST /api/customers/login
// @acess   Public
//router.route("/selling").post(sellingItem);

// @desc    Get user profile
// @route   GET /api/customers/profile
// @acess   Private
//router.route("/profile").get(protect, getUserProfile);
//router.route("hotel/profile").get(protect, getHotelProfile);
// @desc    Get hotels by name
// @route   GET /api/customers/profile
// @acess   Private
//router.route("/hotels/name").get(getHotelByName);

// @desc    Update user profile
// @route   UPDATE /api/customers/:id
// @acess   Private
/*router
    .route("/update/:id")
    .put(protect, validateUpdateProfileInput, editUserProfile);

*/// @desc    Get nearby hotels
// @route   GET /api/customers/hotels/nearby
// @acess   Private
//router.route("/hotels/nearby").get(getNearbyHotel);

// @desc    Delete user
// @route   DELETE /api/customers/:id
// @acess   Private
//router.route("/delete/:id").delete(protect, isAdmin, deleteUserById);

module.exports= router;