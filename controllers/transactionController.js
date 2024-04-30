const asyncHandler = require('express-async-handler')
//const tr = require('../model/transactionModel.js')
const products = require('../model/productModel.js')
const users = require('../model/userModel.js')
const transactions= require('../model/transactionModel.js');
const { Error } = require('sequelize');

//const dbconnection = require("../db/dbconnection.js")

console.log('in addprice ...');

const getAlltransaction = asyncHandler(async(req,res) => {
  try {
    var saledDate = req.body.saledDate;
    const displaytransaction= await transactions.findAll({
      where:{
        saledDate:saledDate
      }
    }).then((data)=>{
      res.json(data)
    });
    if (displaytransaction) {
          res.status(200).json(
            productName = displaytransaction[0].productName,
            brand = displaytransaction[0].productBrand,
            quantity = displaytransaction[0].saledquantity,
            color = displaytransaction[0].productColor
          )
        }else {
      res.status(400).send(`there is no product saled on ${saledDate} date`)
    }
    
  } catch (e) {
    throw new Error(e+"weklkdsfllv in display transaction")
  } finally {

  }
});
/*

Certainly! If you’re using Sequelize with MySQL and want to retrieve an array of plain JavaScript objects from your database, here are a couple of approaches:

Using JSON.parse and JSON.stringify: You can fetch your data using Sequelize and then convert the result to plain objects. Here’s an example:
JavaScript

const results = await db.Sensors.findAll({
  where: {
    nodeid: node.nodeid,
  },
});

// Convert to plain JSON
const jsonString = JSON.stringify(results);
const plainObjects = JSON.parse(jsonString);

// Now you can work with `plainObjects`
// ...
AI-generated code. Review and use carefully. More info on FAQ.
This method involves converting the Sequelize result to a string using JSON.stringify and then parsing it back to plain JSON using JSON.parse1.
Using Model.bulkCreate: If you’re inserting multiple records at once, Sequelize provides the Model.bulkCreate method. It allows you to create multiple records with a single query. You can pass an array of objects to it. For example:
JavaScript

const dataToInsert = [
  { name: 'Alice', age: 25 },
  { name: 'Bob', age: 30 },
  // ... other records
];

await YourModel.bulkCreate(dataToInsert);
AI-generated code. Review and use carefully. More info on FAQ.
This method is useful for inserting multiple records efficiently2.
Remember to adjust the code snippets according to your specific use case. If you need further assistance or have additional questions, feel free to ask! 😊

*/

/*const addsales = asyncHandler(async (req, res) => {


  try { //taking darta from user
      var itemName=req.body.ItemName;
      var brands=req.body.Brand;
      var saledquantitiesfromuser=req.body.saledquantity;
      //var costprice=req.body.costprice;
      var salespricesperitem= req.body.SperItem;
      var size = req.body.itemsize;
      var color = req.body.color;
      var productid= req.body.ItemCode;
      var saledDates=req.body.saledDate;
      var totalprice=req.body.totalprice;
      var salermail=req.body.salermail;


    var quante = await transaction.findAll(
      {
        where:{
        productName:itemName,
        brand:brands,
        color:color,
        size:size,
      }})//.then((data)=>{
       // res.status(200).json(data);
      //})

    let quantityfromproduct = quante[0].currentinstock
    let salesprice = quante[0].salesprice
    let saledquantity = quante[0].saledquantity
      console.log(quantityfromproduct);


      if (quantityfromproduct <= 0){
        res.send(`you have no products in your stock `);
      }else {

        //var stock = true;



//updating product table

    var currentinstocks = quantityfromproduct - salespricesfromuser;
    var salesprices = salesprice +salespricesfromuser;
    var saledquantities = saledquantity + saledquantitiesfromuser;


    const updateproduct = await transaction.update
     ({
      currentinstock:currentinstocks,
      saledquantity:saledquantities,
      salesprice:salesprices,
      usermail:salermail,
      where:{
        productName:itemName,
        brand:brands,
        color:color,
        size:size,
      }
    });

    //creating entry in the sales table

    const priceFields = {};
    priceFields.ItemName = itemName;
    priceFields.ItemBrand = brands;
    priceFields.ItemSize = size;
    priceFields.ItemColor = color;
    //priceFields.costprice = costprice;
    priceFields.salesprice = salesprice;
    //priceFields.instock = stock;
    priceFields.productsID = productid;
    priceFields.saledDate =saledDates;
    priceFields.salesprice= salespricesfromuser;

    var quante = await salesmodel.findAll(
      {
        where:{
        ItemName:itemName,
        ItemBrand:brands,
        ItemColor:color,
        ItemSize:size,
        saledDate:saledDates,
      }})
      let saleddate = quante[0].saledDate;
      let itemname = quante[0].ItemName;
      let color = quante[0].ItemColor;
      let brand = quante[0].ItemBrand;
      let size = quante[0].ItemSize;


      if (saleddate==saledDates ) {
        //update table not create

      }else {
        const prices = await salesmodel.create(priceFields);
        if (prices) {
          res.status(201).json({
            //_id: category._id,
            ItemName: prices.ItemName,
            productsID:prices.productsID,
            brand: prices.ItemBrand,
            size:prices.ItemSize,
            color:prices.ItemColor,
            costprice:prices.costprice,
            salesprice:prices.salesprice,
            //currentinstock: category.currentinstock,
            createdAt:prices.createdAt,
            updatedAt:prices.updatedAt,
            //instock:prices.instock


            //icon: category.icon,

            // hotelOwner: category.hotelOwner,
          });
        }
        else {
          res.status(400);
          throw new Error("Invalid category data");
        }

      }




  } // quantityfor creting sales entry braces
  } catch (error) {
    throw new Error(error);
  }
});*/

const addsales = asyncHandler(async (req, res,next) => {
  /*const stripped = '    My String With A    Lot Whitespace  '.replace(/\s+/g, '');
  const stripped = '    My String With A    Lot Whitespace  '.trim();
  console.log(stripped);*/

  try { 
      //taking darta from user
      var itemNames=req.body.productName;
      var itemName=itemNames.trim();
      var brandss=req.body.productBrand;
      var brands = brandss.trim();
      var saledquantitiesfromuser=req.body.saledQuantity;
      //var costprice=req.body.costprice;
      var salespricesperitem= req.body.salesPrice;

      var sizes= req.body.productSize;

      var colorss= req.body.productColor;
      var colors=colorss.trim();
      var productid= req.body.productid;
      var saledDates=req.body.saledDate;
      //var totalprice=req.body.totalPrice;
      var salermailss=req.body.salerEmail;
      var salermails=salermailss.trim();
      var totalprices=saledquantitiesfromuser*salespricesperitem;
   console.log(saledDates);

    var quante = await products.findOne(
      {
        where:{
        productName:itemName,
        brand:brands,
        color:colors,
        size:sizes,
      }})//.then((data)=>{
       // res.status(200).json(data);
      //})
      var userfind = await users.findAll(
        {
          where:{
            Email:salermails,
            //firstName:saleduser,
        }})

        if(userfind){
          let userfromdb=userfind[0].firstName;
          let usermailfromdb=userfind[0].email;
          console.log(userfromdb);
  
        if(/*saleduser===userfromdb &&*/ salermails===usermailfromdb){

  if(quante)
    {
      let quantityfromproduct = quante.currentinstock
      console.log(quantityfromproduct);


      if (quantityfromproduct <= 0){
        res.send(`you have no products in your stock `);
      }
      else {

        //var stock = true;

//updating product table

    var currentinstocks = quantityfromproduct - saledquantitiesfromuser;
   /* var totalsalesprices = totalsalesprice +totalprice;
    var saledquantities = saledquantity + saledquantitiesfromuser;*/
   
    const updateproduct = await products.update
     ({
      currentinstock:currentinstocks,
      saledDate:saledDates,           
      saledquantity:saledquantitiesfromuser,
      salesprice:salespricesperitem,
    },
      {
      where:{
        productName:itemName,
        brand:brands,
        color:colors,
        size:sizes,
      }
    });
    if(updateproduct){
      console.log("product is updated successfully....")
    }
    else{
      console.log("product not updated ")
    }



  

    //creating entry in the transaction table

    const priceFields = {};
    priceFields.productName = itemName;
    priceFields.productID = productid;
    priceFields.productBrand = brands;
    priceFields.productSize = sizes;
    priceFields.productColor = colors;
    //priceFields.costprice = costprice;
    priceFields.totalsalesprice = totalprices;
    priceFields.userEmail = salermails;
    //priceFields.productCode = productid;
    priceFields.saledDate =saledDates;
    priceFields.salesprice= salespricesperitem;
    priceFields.saledquantity= saledquantitiesfromuser;


 //find product if exists in transaction table


    var quante = await transactions.findOne(
      {
        where:{
        productName:itemName,
        productBrand:brands,
        productColor:colors,
        productSize:sizes,
        saledDate:saledDates,
        userEmail:salermails
      }})

      /*let saleddate = quante.saledDate;
      let itemname = quante.ItemName;
      let color = quante.ItemColor;
      let brand = quante.ItemBrand;
      let size = quante.ItemSize;
      let salermail=quante.userEmail;
      let totalpricefromtransaction=quante.totalsalesprice;
      let saledquantitiesfromtransaction=quante.saledquantity;
      console.log(saleddate);*/

      if (/*salermail==salermails &&itemname==itemName && brand==brands*/quante) {
        //update table not create
        let totalpricefromtransaction=quante.totalsalesprice;
        let saleddatefromtransaction=quante.saledDate;
        let selermailfromtable=quante.userEmail;
        let saledquantitiesfromtransaction=quante.saledquantity;
    var totalsalesprices = totalpricefromtransaction +totalprices;
    var saledquantities = saledquantitiesfromtransaction + saledquantitiesfromuser;
    console.log(selermailfromtable);

            const updatetransaction = await transactions.update
          ({

            saledquantity:saledquantities,
            salesprice:salespricesperitem,
            totalsalesprice:totalsalesprices,
          },
            {
              where:{
                productName:itemName,
                productBrand:brands,
                productColor:colors,
                productSize:sizes,
            }
          });
          if (updatetransaction) {
            res.status(200).send("transaction updated succeessfully.....");
            
          }

      }else {
        const prices = await transactions.create(priceFields);
        if (prices) {
          res.status(201).json({
            //_id: category._id,
            productName: prices.productName,
            productsID:prices.productCode,
            brand: prices.productBrand,
            size:prices.productSize,
            color:prices.productColor,
            saledquantity:prices.saledquantity,
            totalsales:prices.totalsales,
            salesprice:prices.salesprice,
            salermail: prices.userEmail,
            createdAt:prices.createdAt,
            updatedAt:prices.updatedAt,
            //instock:prices.instock,
          });
        }
        else {
          res.status(400).json({
            messageData:"cant create transaction tables"
          });
          throw new Error("Invalid category data");
        }}

  } // quantityfor creting sales entry braces
  }//checking if there is item in stock
  else{
    res.status(400).send(`you have no products named ${itemName} `);
    
  }}else{
    res.send("please check your username or email.....")
  }}
  else{
    res.send(`no users ${salermails}in a tables`)
  }
} catch (error) {
    throw new Error(error);
  }
});


            /*const sellingItem = asyncHandler(async (req, res) => {

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
              prodfields.productColor=color;
              prodfields.productBrand=brand;
              prodfields.productSize=size;
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
              }
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
        
               //if(userfind){
                //let userfromdb=userfind[0].firstName;
               // console.log(userfromdb);
               //}
               
               //let userfromdb=userfind.firstName;
              // let usermailfromdb=userfind.Email;
               console.log("welocome bro");
              // console.log(userfromdb);
              // let quantfromdb = quante[0].currentinstock
              // console.log(quantfromdb);
              if(userfind!=0){
                let userfromdb=userfind[0].firstName;
                let usermailfromdb=userfind[0].Email;
                console.log(userfromdb);
        
              if(saleduser===userfromdb && salerEmail===usermailfromdb){
                if(quante!=0){
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
            });*/


            const deleteTransaction =asyncHandler(async(req,res,next)=>{

              try{
              var saledDate =req.body.saledDate;
              var productID  =req.body.productID;
              var ideafromuser=req.body.ideafromuser;
              const findTransaction = await transactions.findAll({
                  where:{
                  productID:productID,
                  saledDate:saledDate,
                }})//.then((data)=>{
                  //console.log(data.toJson())
                 // res.status(201).json(data);
                //});
              if(findTransaction!=0){
              //res.send("are you sure you want to delete the transaction ?")
              
              if(ideafromuser==='yess'){

              const deltransaction=await transactions.destroy({
                where:{
                saledDate:saledDate,
                }
                });
              if(deltransaction){

              res.status(200).json({
              messageData:"successfully deleted transaction",
              Messagetype:"success",
              Messagetitle:"DELETING TRANSACTION HISTORY",
              })
              }else{

              res.send(" cannot delete transaction")
              }}

              else{
              res.send(" you cancel the proccess")
              }

              }else{
              res.send(" you have no transaction registred with this date")
              }


              }catch(e){
              throw new Error(e +" NOT TRYING ")

              }
              next();
              });
        


    module.exports = {
      addsales,
      //sellingItem,
      deleteTransaction,
      getAlltransaction};
