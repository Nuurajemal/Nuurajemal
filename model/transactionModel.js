const {DataTypes, Sequelize } = require("sequelize")
const dbconnection = require("../db/dbconnection.js")
//const products = require('../model/brandModel.js')
//console.log('pricemodelfields');
dbconnection.sync()
  .then(() => {
    console.log("Synced db.");
  })
  .catch((err) => {
    console.log("Failed to sync db: " + err.message);
  });

const transaction = dbconnection.define('transactions', {
  // Model attributes are defined here
  userEmail:{
    type:DataTypes.STRING,
    allowNull:false,
    //unique:true
  },
  productID: {

    type: DataTypes.STRING,
    allowNull:false,
  },
  productName: {

    type: DataTypes.STRING,
    allowNull:false,

  },

  productBrand: {
    type: DataTypes.STRING,
    allowNull:false,

  },
  productSize: {
    type:DataTypes.INTEGER,
    allowNull:false,
    //unique:true,
    //primaryKey:true
    //foreignKey:true
  },
  productColor: {

    type: DataTypes.STRING,
    allowNull:false,
  },

  saledquantity:{
    type:DataTypes.INTEGER,
  },
  salesprice:{
    type:DataTypes.DOUBLE,
    //allowNull:true
  },
  totalsalesprice:{
    type:DataTypes.DOUBLE,
    //allowNull:true
  },
  saledDate:{
    type:DataTypes.DATEONLY,
    //allowNull:true
  },
},

  {
  // Other model options go here
  });
  transaction.removeAttribute("id");

  transaction.associate = (models) => {

    transaction.belongsTo(models.products, {

    foreignKey: "userEmail",
    targetKey: "Email",
    /*foreignKey:"prodcutsID",
    //allowNull:false,
    //targetKey:"productID",

    foreignKey: 'ItemName',
    targetKey:"productName",

    foreignKey: "ItemSize",
    targetKey: "size",

    foreignKey: "Itemcolor",
    targetKey:"color"*/

  })
}
/*sale.belongsTo(products, {

  foreignKey: "ItemBrand",
  targetKey: "brand",

  foreignKey: "ItemSize",
  targetKey: "size",

  foreignKey: "ItemName",
  targetKey: "productName",

  /*foreignKey:"prodcutsID",
  //allowNull:false,
  targetKey:"productID",
  //constraints: false,
});*/

module.exports = transaction;
