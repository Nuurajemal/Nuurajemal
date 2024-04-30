const {DataTypes, Sequelize } = require("sequelize")
const dbconnection = require("../db/dbconnection.js")

dbconnection.sync()
  .then(() => {
    console.log("Synced db.");
  })
  .catch((err) => {
    console.log("Failed to sync db: " + err.message);
  });

const users = dbconnection.define('users', {
  // Model attributes are defined here
  firstName: {
    type: DataTypes.STRING,
    //primarykey:true,
    allowNull: false,
  },
  lastName: {
    type: DataTypes.STRING,
    allowNull:false,
    //primaryKey:true
  },
  username:{
    type:DataTypes.STRING,
    allowNull:false,
    unique:true
  },

  email: {
    //primarykey:true,0
    type:DataTypes.STRING,
    allowNull:true,
    unique:true,
    primaryKey:true
  },
  password:{
    type:DataTypes.STRING,
    allowNull:false,
  },

  role:{
    type:DataTypes.STRING,
    allowNull:false,
    //primaryKey:true
  },
  joinedDate:{
    type:DataTypes.DATEONLY,
    allowNull:false,
  },
  phone1:{
    type:DataTypes.INTEGER,
    allowNull:false,
    unique:true
  },
  phone2:{
    type:DataTypes.INTEGER,
    //type:DataTypes.NUMBER,
    allowNull:true,
    unique:true
  },

 /*
  purchasedDate:{
    type:DataTypes.DATEONLY,
    allowNull:false
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
  },*/

  },

 {
  // Other model options go here
});
users.removeAttribute("id");

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

module.exports = users;
