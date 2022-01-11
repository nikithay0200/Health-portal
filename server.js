//create express app
const exp = require("express")
const app = exp();
const path = require("path")

//connect angular app with express server
app.use(exp.static(path.join(__dirname, './dist/AngularApp2/')))

//import APIS
const userApi = require("./APIS/user-api");
const productApi=require("./APIS/product-api");


//execute specific api based on path
app.use("/user", userApi);
app.use("/product",productApi)

//invalid path
app.use((req, res, next) => {

    res.send({ message: `path ${req.url} is invalid` })
})

//error handling middleware
app.use((err, req, res, next) => {
    res.send({ message: `error is ${err.message}` })
})


//assign port

let port = process.env.PORT;
if (port == null || port == "") {
  port = 3000;
}
app.listen(port, () => console.log(`server has started successfully`))