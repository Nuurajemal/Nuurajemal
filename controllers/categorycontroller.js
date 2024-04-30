const asyncHandler = require('express-async-handler')
const Category = require('../model/categoryModel.js')
/*const category = {
    ItemName: req.body.itemname,
    brand: req.body.brandname,
    currentinstock: req.body.quantity
  };*/

 /*const addcategory =await Category.create({

    ItemName: "surre",
   brand: "Robert Cecil Martin",
   currentinstock: 6,
  //descriptions:'this tshirt is the most epensive tshirt in the world',
   //image:'',
   //createdDate:'',
   //updatedDate:''
 }
).then(data => {
    res.send(data);
})
.catch(err => {
    //res.status(500).send({
       // message:
        err.message || "Some error occurred while creating the Tutorial."

});*/

const addcategory = asyncHandler(async (req, res) => {
    try {


        var itemName= "jeans";
        var brands="Robert Cecil Martin";
        var currentinstocks=7;

      const categoryFields = {};
      categoryFields.ItemName = itemName;
      categoryFields.brand = brands;
      categoryFields.currentinstock = currentinstocks;
      /*if (name) categoryFields.name = name;
      //if (description) categoryFields.description = description;
      //categoryFields.hotelOwner = req.user._id;
      //const icon = await uploadToCloudinary(iconFromReq);
      if (icon.length == 0) {
        res.status(400);
        throw new Error("Error uploading icon");
      }
      categoryFields.icon = icon.toString();*/
      const category = await Category.create(categoryFields/*{
        ItemName: "jeans",
        brand: "Robert Cecil Martin",
        currentinstock: 76,}*/
      );

      if (category) {
        res.status(201).json({
          //_id: category._id,
          ItemName: category.ItemName,
          brand: category.brand,
          currentinstock: category.currentinstock,
          createdAt:category.createdAt,
          updatedAt:category.updatedAt


          //icon: category.icon,

         // hotelOwner: category.hotelOwner,
        });
      } else {
        res.status(400);
        throw new Error("Invalid category data");
      }
    } catch (error) {
      throw new Error(error);
    }
  });




    const showAllcategory = Category.findAll().then(res => {
        console.log(res)
    }).catch((error) => {
        console.error('Failed to retrieve data : ', error);
    });

    const deletebyItemNames =
        Category.destroy({
            where: {
              ItemName: ''
            },});




    module.exports = {addcategory,showAllcategory,deletebyItemNames};
