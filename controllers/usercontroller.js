const asyncHandler = require('express-async-handler')
const users =  require('../model/userModel');
const { JSON } = require('sequelize');







const addUser = asyncHandler(async (req, res) => {
    try {


        var firstname= req.body.firstName;
        var username =req.body.userName;
        var lastname=req.body.lastName;
        var role=req.body.role;
        var email= req.body.Email;
        var phone1= req.body.phone1;
        var password = req.body.password;

        var today = new Date().toISOString().split('T')[0];
        console.log(today);



      var usersindb = await users.findOne(
        {
          where:{
          username:username,
          email:email,
        }})//.then((data)=>res.json(data));


        if(!usersindb){




            const productFields = {};
            productFields.username = username;
            productFields.lastName = lastname;
            productFields.firstName = firstname;
            productFields.joinedDate = today;
            productFields.email = email;
            productFields.role = role;
            productFields.phone1 = phone1;
            productFields.password = password;

             const user = await users.create(productFields
  
                  );
                  if (user) {
                    res.status(201).json({
                      //_id: category._id,
                      username: user.username,
                      firstname: user.firstName,
                      lastname: user.lastName,
                      email:user.email,
                      password:user.password,
                      role:user.role,
                      joinedDate:user.joinedDate,


                    });}else{
                      res.send("cant create users please check it carefully");
                    }


          }else {

            //display the user


                  let userIDfromdb = usersindb.username;

                  console.log(userIDfromdb);
                  res.send(`user  ${username} is already exists` )         

          }

    } catch (error) {
      throw new Error(error + "  northkorea");
    }
  });




  const deleteUser = asyncHandler(async (req, res) => {
    try {


        //var firstname= req.body.firstName;
        var userID =req.body.userID;
        //var lastname=req.body.lastName;
        //var role=req.body.role;
        //var email= req.body.Email;
        //var joinedDate = req.body.joinedDate;

        //var today = new Date().toISOString().split('T')[0];
        



      var usersindb = await users.findOne(
        {
          where:{
          userID:userID,
          //Email:email,
        }})//.then((data)=>res.json(data));


        if(!usersindb){




            /*const productFields = {};
            productFields.userID = userID;
            productFields.lastName = lastname;
            productFields.firstName = firstname;
            productFields.joinedDate = today;
            productFields.Email = email;
            productFields.role = role;

             const user = await users.create(productFields
  
                  );
                  if (user) {
                    res.status(201).json({
                      //_id: category._id,
                      userID: user.userID,
                      firstname: user.firstName,
                      lastname: user.lastName,
                      email:user.Email,
                      role:user.role,
                      joinedDate:user.joinedDate,


                    });}else{
                      res.send("invaaaaaaaaaaaaaalid");
                    }*/

                    res.send(" you have no user with this id   ");


          }else {

            //display the user


                  //let userIDfromdb = usersindb.userID;

                  //console.log(userIDfromdb);
                 const deleted = await users.destroy({
                  where:{
                    userID:userID
                  }
                 }).then((data)=>{
                  res.status(200).json(data)
                 });       

          }

    } catch (error) {
      throw new Error(error + " north korea ");
    }
  });




module.exports = {addUser,deleteUser};




/*const sequalize = require('sequalize');

const purchSaleHistory= sequalize.define('istories',{

}
  
);*/