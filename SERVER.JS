//var jeansroutes = require('./routes/jeansroutes.js')
const http = require('http'); 
const cors = require('cors');

var express = require('express');
const db = require('./db/dbconnection.js');
//const dbconnection = require ('./model/tshirtModel.js')
const transactionroutes = require ('./routes/transactionroutes.js')
const productRoutes = require('./routes/productRoutes.js')
const userRouter = require('./routes/userroute.js')
const app = express();
const PORT = process.env.PORT || 5000;

app.use(express.json());

app.use(cors())
app.get("/", (req, res) => {
  res.status(200).json({"welcome":"Gebeta API is running..."});
});

//const tshirt = new tshirts();
//app.use("/api/jeans", jeansroutes);
app.use("/api/transaction", transactionroutes);
app.use("/api/product", productRoutes );
app.use("/api/users",userRouter);
/*app.use("/api/users", userRoutes);
app.use("/api/products", productRoutes);
app.use("/api/category", categoryRoutes);
app.use("/api/admin", adminRoutes);
app.use("/api/restaurant", restaurantRoutes);
app.use("/api/cart", cartRoutes);
app.use("/api/orders",orderRotes)*/

//app.use(notFound);

//app.use(errorHandler);
/*dbconnection.sequelize*/
db.sync({ force: false }).then(function () {
  app.listen( PORT, function () {
    console.log(`Server is running successfully on port ${PORT}!`);
  });
});
