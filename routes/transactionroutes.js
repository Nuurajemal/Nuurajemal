const express= require('express');
const {isAdmin,isSalered}=require('../midleWare/aouthMidleWare')
const {addsales,
    //sellingItem,
    deleteTransaction,
    getAlltransaction} = require('../controllers/transactionController.js')
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

// @desc    Register a new customer
// @route   POST /api/users
// @acess   Public
/*router.get("/tab",(req,res) => {
    res.send("connected")
});*/

router.route("/addsales").post(addsales);
//router.route("/sellingItem").post(sellingItem);
router.route("/deletetransaction").post(isAdmin, deleteTransaction);
router.route("/displaytransaction").post(getAlltransaction);
// @desc    Register a new customer
// @route   POST /api/users
// @acess   Public
//router.route("/deletebysize").post(deletebyItemsize);

// @desc    Register a new delivery person
// @route   POST /api/users
// @acess   Public
/*router
    .route("/delivery")
    .post(validateRegisterationInput, registerDeliveryperson, protect, isAdmin);
*/// @desc    Register a new admin
// @route   POST /api/customers
// @acess   Public
///router.route("/admin").post([validateAdminRegisterationInput], registerAdmin);

// @desc    Auth user & get token
// @route   POST /api/customers/login
// @acess   Public
//router.post("/login", authUser);

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