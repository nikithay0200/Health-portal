const exp = require('express')
const productApi = exp.Router();
const expressErrorHandler = require("express-async-handler")
const bcryptjs = require("bcryptjs")
const jwt = require("jsonwebtoken")
//import { toArray } from 'rxjs/operators';
const checkToken=require("./middlewares/verifyToken")

//add body parsing middleware
productApi.use(exp.json())


//import MongoCLient
const mc = require("mongodb").MongoClient;

//connection string
const databaseUrl = "mongodb+srv://project2021:project2021@cluster1.5k7ca.mongodb.net/projectdb2021?retryWrites=true&w=majority"

let productCollectionObj;

//connect to DB
mc.connect(databaseUrl, { useNewUrlParser: true, useUnifiedTopology: true }, (err, client) => {

    if (err) {
        console.log("err in db connection", err);
    }
    else {
        //get database object
        let databaseObj = client.db("projectdb2021")
        //create productcollection object
        productCollectionObj = databaseObj.collection("productcollection")
        console.log("connected to database")
    }
})

productApi.post("/addproduct", expressErrorHandler(async (req, res, next) => {
    //get product obj
    let newProduct = req.body;
    console.log("new Product to be added");
    //search for existing product in cart
    let product = await productCollectionObj.findOne({ productTitle: newProduct.productTitle,username:newProduct.username })
    //if product existed
    if (product !== null) {
        productCollectionObj.updateOne({productTitle: newProduct.productTitle,username:newProduct.username},{$set:{quantity:product.quantity+1}})
        res.send({ message: "Product quantity incremented" });
    }
    else {
        newProduct.quantity=1;
        //insert
        await productCollectionObj.insertOne(newProduct)
        res.send({ message: "Product added" })
    }
}))

productApi.get("/getproducts/:username",expressErrorHandler(async(req,res,next)=>{
    let un=req.params.username;
    let productList = await productCollectionObj.find({username:un}).toArray()
    //console.log(typeof(productList))
    //console.log(productList)
    res.send({ message: productList });
}))


//export
module.exports = productApi;