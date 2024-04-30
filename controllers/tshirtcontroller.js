
const tshirt = require('../model/tshirtModel.js')

 const addtshirts =  tshirt.create({
    ItemName: "tshirtd",
    brand: "Robert Cecil Martin",
    code: "10",
    quantity: 3,
    costprice:560,
    salesprice:600,
    descriptions:'this tshirt is the most epensive tshirt in the world',
    color:'blueblack',
    image:'',
    addeddate:'',
    updateddate:''
});


    const showAlltshirts = tshirt.findAll().then(res => {
        console.log(res)
    }).catch((error) => {
        console.error('Failed to retrieve data : ', error);
    });

    const deletebycodetshirt =

        tshirt.destroy({
            where: {
              code: 10
            },});




    module.exports = {addtshirts,showAlltshirts,deletebycodetshirt};
