
//const brand = require('../model/brandModel.js');
const asyncHandler= require ('express-async-handler')
const expressAsyncHandler = require('express-async-handler');
const products = require('../model/productModel.js')
const users =require('../model/userModel.js')
const { QueryTypes, json, INTEGER } = require('sequelize');
const dbconnection = require('../db/dbconnection.js');


const addproducts = asyncHandler(async (req, res,next) => {
  res.setHeader("Access-Control-Allow-Origin", "*");
    try {


        var itemName= req.body.ItemName;
        var productID =req.body.ItemCode;
        var brands=req.body.Brand;
        //var quantity=req.body.quantity;
        var size= req.body.itemsize
        var color = req.body.color;
        var costprice = req.body.CperItem;
        var purchasedDate = req.body.purchasedDate;
        var purchasedquantity= req.body.Purchdquantity;


         //console.log(itemName);


      var currentinstockfromstored = await products.findOne(
        {
          where:{
          productName:itemName,
          brand:brands,
          color:color,
          size:size,
        }
      })//.then((data)=>res.json(data));

        //let currentstock = currentinstockfromstored.currentinstock;
        //console.log(currentstock + "  right answer ");

        if(!currentinstockfromstored){


          let currentinstock = purchasedquantity;

            const productFields = {};
            productFields.productName = itemName;
            productFields.brand = brands;
            productFields.size = size;
            productFields.productID = productID;
            productFields.currentinstock = currentinstock;
            productFields.color = color;
            productFields.purchasedquantity=purchasedquantity;
            productFields.costprice=parseFloat(costprice);
            productFields.purchasedDate = purchasedDate;
             const prodcut = await products.create(productFields);

                  if (prodcut) {
                   // console.log(prodcut.productID)
                    res.status(201).json({
                      //_id: category._id,
                      ItemCode: prodcut.productID,
                      ItemName: prodcut.productName,
                      Brand: prodcut.brand,
                      itemsize:prodcut.size,
                      color:prodcut.color,
                      costprice:prodcut.costprice,
                      purchasedquantity:prodcut.purchasedquantity,
                      currentinstock: prodcut.currentinstock,
                      //createdAt:prodcut.createdAt,
                      //updatedAt:prodcut.updatedAt,
                      Messagetype:'success',
                      messageTitle:'ADDING PRODUCTS',
                      messageData:'you are adding products successfully '
                    });}
                    else{
                      res.json({
                        Messagetype:'danger',
                        messageTitle:'ADDING PRODUCTS',
                        messageData:'you are trying to insert invalid value '
                    });
                    }


          }else {

            //update the purchased product and its availability in current stock and added-date


            
           /* const productFields = {};
           productFields.productName = itemName;
            productFields.brand = brands;
            productFields.size = size;
            productFields.productID = productID;
           // productFields.currentinstock = currentinstock;
            productFields.color = color;
            productFields.purchasedquantity=purchasedquantity;
            productFields.costprice=costprice;
            productFields.purchasedDate = purchasedDate;*/




                  let quantfromdb = currentinstockfromstored.currentinstock;

                 //console.log("quantfromdb");

                  var currentinstock = quantfromdb + purchasedquantity;


                  const updatequantity = await products.update(
                    {
                      purchasedDate:purchasedDate,
                      costprice:costprice,
                      currentinstock:currentinstock,
                      purchasedquantity:purchasedquantity,
                     },{where:{
                      productName:itemName,
                      brand:brands,
                      color:color,
                      size:size,
                    }})//.then((data)=>{
                        //res.status(200).json(data);
            
                      //});
                      if (updatequantity) {
                        //console.log("updated successfully")
                        res.status(200).json({
                        Messagetype:'success',
                        messageTitle:'UPDATING PRODUCTS ',
                        messageData:'succcessfully updated '})/*status(200).json({
                          //_id: category._id,
                          productID: updatequantity.productID,
                          ItemName: updatequantity.productName,
                          brand: updatequantity.brand,
                          size:updatequantity.size,
                          color:updatequantity.color,
                          costprice:updatequantity.costprice,
                          purchasedquantity:updatequantity.purchasedquantity,
                          currentinstock: updatequantity.currentinstock,
                          createdAt:updatequantity.createdAt,
                          updatedAt:updatequantity.updatedAt
                        });*/
                      } else {
                    res.status(400);
                    throw new Error("Invalid brand data");}
                  

          }
          next();

    } catch (error) {
      throw new Error(error + "  northkorea");
    }
  });



    const sellingItem = asyncHandler(async (req, res) => {

      //var Quantity = 20;
      var size = req.body.size;
      var saledDate = req.body.saledDate;
      var color = req.body.color;
      var itemname = req.body.productName;
      var brand = req.body.brand;
      var salesprice = req.body.salesprice;
      var saledquantity = req.body.saledquantity;
      var saleduser=req.body.saleduser;
      var salerEmail=req.body.salerEmail;
      //var quantitiy=quantities - Quantity;
      var prodfields={};
      prodfields.productName=itemname;
      prodfields.color=color;
      prodfields.brand=brand;
      prodfields.size=size;
      //prodfields.saleduser=saleduser;
      //prodfields.quantity=quantitiy;

    var quante = await products.findAll(
      {
        where:{
        productName:itemname,
        brand:brand,
        color:color,
        size:size,
      }})//.then((data)=>{
        //console.log(data.toJson())
        //res.status(201).json(data);
      //});
      /*if (quante) { //
        res.status(201).json({
          //_id: category._id,
          ItemName :quante[0].productName,
          brands : quante[0].brand,
          sizes : quante[0].size,
          quantitys : quante[0].quantity,
          colors : quante[0].color,
          //productID: quante[0].productID,s
         // createdAt:quante[0].createdAt,
          //updatedAt:quante[0].updatedAt
          //icon: category.icon,

         // hotelOwner: category.hotelOwner,
       // });
      } )}else{
        res.send("nots quantity selected from db")
      }*/
      console.log(saleduser);
      console.log(salerEmail);
      var userfind = await users.findAll(
        {
          where:{
            firstName:saleduser,
            Email:salerEmail,
        }})//.then((data)=>{
          //console.log(data.toJson())
          //res.status(201).json(data);
        //});
       //console.log(userfind[0]. firstName);

       /*if(userfind){
        let userfromdb=userfind[0].firstName;
        console.log(userfromdb);
       }*/
       
       //let userfromdb=userfind.firstName;
      // let usermailfromdb=userfind.Email;
       console.log("welocome bro");
      // console.log(userfromdb);
      // let quantfromdb = quante[0].currentinstock
      // console.log(quantfromdb);
      if(userfind){
        let userfromdb=userfind[0].firstName;
        let usermailfromdb=userfind[0].Email;
        console.log(userfromdb);

      if(saleduser===userfromdb && salerEmail===usermailfromdb){
        if(quante){
          let quantfromdb = quante[0].currentinstock
          console.log(quantfromdb);
          if (saledquantity > quantfromdb){
            res.send(`you cannot sale because you have ${quantfromdb} quantities only `);
          }else {

          var resultquantity= quantfromdb - saledquantity;
          const updatequantity = await products.update(
            {
              currentinstock:resultquantity,
              saledDate:saledDate,
              salesprice:salesprice,
              saledquantity:saledquantity,
            },{where:{
              productName:itemname,
              brand:brand,
              color:color,
              size:size,
            }})//.then((data)=>{
                //res.status(200).json(data);

              //});
              if(updatequantity){
                console.log("suuccess");
              //let a = JSON.parse(updatequantity);
              //console.log(a);
              res.status(201).send("operation is successfull");
              }

            }}
          else{
            res.send(`you have no  ${itemname} products`)
          }
      }else{
        res.send("please check your username or email.....")
      }}
      else{
        res.send("no users in a tables")
      }
    });

      //delete  product from db using product ID

      const deleteItembyproductID = asyncHandler(async(req,res)=>{

        try {
          var userrespo=req.body. userresponse;
          var productIDs = req.body.productID;
          console.log(productIDs);

          const iteminformation = await products.findOne({
            where:{
              productID:productIDs
            }
          })/*.then((data)=>{
            res.json(data);
          })*/


          if(iteminformation!=0){
            /*res.status(200).json(
              {
                productID: iteminformation.productID,
                productName: iteminformation.productName,
                brand: iteminformation.brand,
                size: iteminformation.size,
                color: iteminformation.color,
               //"purchasedquantity": iteminformation.purchasedDate,
                purchasedDate: iteminformation.purchasedDate,

                messageTitle:' DAlLETTING PRODUCTS ',
                Messagetype:'danger',
                messageData:'SUCCESSFULLY DAlLETTED ',
                confirmitionmessage:'Are You Sure You Want To Delete ?',
                //"costprice": 6000,
                //"saledquantity": null,
                //"salesprice": null,
                //"saledDate": null,
                currentinstock: iteminformation.currentinstock,
                //"createdAt": "2023-12-11T11:11:35.000Z",
                //"updatedAt": "2023-12-11T12:45:05.000Z"
            }).then(console.log("are you sure to delete ?"));*/

          

          if(userrespo==='yess'){
          const deleteproduct = await products.destroy({
            where:{
              productID:productIDs
            }
          });
          if(deleteproduct){
            res.status(200).json({
            Messagetype:'success',
            messageData:'SUCCESSFULLY DALLETTED ',
          });
          }else{
            res.json({
              Messagetype:'info',
              messageData:`cannot delete products with  ${productIDs} productID or you have no stored before `
          });
          }
        }else{
          res.send("ohh... Deer you canceled the process");
        }
      }else{
        res.send("cant find your tables")
      }


        } catch (e) {
          throw new Error(e+"cant try it in product controller file")
        } finally {

        }
      });




   /*const result = await Project.update(
    {
      title: 'a very different title now' },
    {
      where: { _id: 1 } }
  )}

  Project.find({ where: { title: 'aProject' } })
  .on('success', function (project) {
    // Check if record exists in db
    if (project) {
      project.update({
        title: 'a very different title now'
      })
      .success(function () {})
    }
  })*/


    module.exports = {
      addproducts,
     // displayBySize,
     deleteItembyproductID,
     //sellingItem,
    };