const {DataTypes, sequelize } = require("sequelize")
const dbconnection = require("../db/dbconnection.js")
dbconnection.sync()
  .then(() => {
    console.log("Synced db.");
  })
  .catch((err) => {
    console.log("Failed to sync db: " + err.message);
  });


const Category = dbconnection.define('categories', {
  // Model attributes are defined here
  ItemName: {
    type: DataTypes.STRING,
    primarykey:true,
    allowNull: false
  },
  /*brand: {
    type: DataTypes.STRING,
    allowNull:true
   
  },*/
  currentinstock:{
    type:DataTypes.INTEGER,
  },
  saledquantity:{
    type:DataTypes.INTEGER,
  },
  purchasedquantity:{
    type:DataTypes.INTEGER
  },
  },

 {
  // Other model options go here
},
); 


module.exports = Category;