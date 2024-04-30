const {DataTypes, Sequelize } = require("sequelize")
const dbconnection = require("../db/dbconnection.js")
//const sales = require('../model/priceModel.js')

dbconnection.sync()
  .then(() => {
    //console.log("Synced db.");
  })
  .catch((err) => {
    console.log("Failed to sync db: " + err.message);
  });

const products = dbconnection.define('products', {
  // Model attributes are defined here
  productID:{
    type:DataTypes.INTEGER,
    //primaryKey:true,
    unique:true,
    allowNull:false,
    autoIncrement:true
  },
  productName: {
    type: DataTypes.STRING,
    //primarykey:true,
    ///foregnkey:true,
    //allowNull: false,
    primaryKey:true
  },
  brand: {
    type: DataTypes.STRING,
    allowNull:false,
    primaryKey:true
  },
  size: {
    //primarykey:true,
    type:DataTypes.INTEGER,
    allowNull:false,
    primaryKey:true
  },

  color:{
    type:DataTypes.STRING,
    allowNull:false,
    primaryKey:true
  },
  purchasedquantity:{
    type:DataTypes.INTEGER,
    allowNull:false
  },
  purchasedDate:{
    type:DataTypes.DATEONLY,
    allowNull:true
  },
  costprice: {
    type:DataTypes.DOUBLE,
    allowNull:false
  },
  saledquantity:{
    type:DataTypes.INTEGER,
  },
  salesprice:{
    type:DataTypes.DOUBLE,
    allowNull:true
  },
  saledDate:{
    type:DataTypes.DATEONLY,
    allowNull:true
  },

  currentinstock:{
    type:DataTypes.INTEGER,
    allowNull:true
  },

  },

 {
  // Other model options go here
});
//products.removeAttribute("id");
//products.removeAttribute("createdAt");
//products.removeAttribute("updatedAt");

/*products.associate = models => {
  products.hasOne(models.sales, {
    foreignkey:'productID'
    /*
    foreignKey: 'ItemName',
    sourceKey:'productName',

    foreignKey: "ItemSize",
    sourceKey: "size",

    foreignKey: "ItemBrand",
    sourceKey: "brand",

    //foreignKey: "Itemcolor",
    //sourceKey: "color",
  });
}*//*
products.hasOne(sales,{

  foreignkey:'productID'}
  );
  //sales.belongsTo(products);*/

module.exports = products;
