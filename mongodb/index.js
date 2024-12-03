
const express = require("express");
const mongoose = require("mongoose");
const app = express();
app.use(express.json())
// contact2theshreya
// YFmOjdP5VarRnvXP
const DB = "mongodb://contact2theshreya:YFmOjdP5VarRnvXP@cluster0-shard-00-00.gv9b5.mongodb.net:27017,cluster0-shard-00-01.gv9b5.mongodb.net:27017,cluster0-shard-00-02.gv9b5.mongodb.net:27017/?ssl=true&replicaSet=atlas-6jodt5-shard-0&authSource=admin&retryWrites=true&w=majority&appName=Cluster0"
//const DB_URL = "mongodb+srv://contact2theshreya:YFmOjdP5VarRnvXP@cluster0.gv9b5.mongodb.net?ssl=true"
const DB_URL = "mongodb+srv://rajneeshkumar146:DKOhz0HnSwt1fjMS@cluster0.wjpxi.mongodb.net/";
const port = 3000;
const host = "localhost"
const options = {
    family:4,//use IPv4,skip ipv6
   // serverSelectionTimeoutMS:5000
}
//connect to db
mongoose.connect(DB).then(function(connection){
   // console.log(connection)
    console.log("connected to mongodb")
}).catch(function(err){
    console.log(err);
})

//create schema
const productSchema = new mongoose.Schema({
    product_name:{
        type:String,
        required:true
    },
    product_price:{
        type:String,
        required:true
    },
    isInStock:{
        type:Boolean,
        required:true
    },
    category:{
        type:String,
        required:true
    },
    password:{
        type:String,
        required:true,
        minLength:8
    },
    confirm_password:{
        type:String,
        required:true,  
        minLength:8,
        validate:{
            validator: function(){
                return this.password == this.confirm_password;
            },
            message: "Password and confirm password should be same"
        }
    }
})
//productmodel is folder and productschema is file
const productmodel = mongoose.model("products",productSchema);
app.post("/api/products",async function (req,res) {
    const body = req.body;
    try{
        const product = await productmodel.create({
            product_name: body.product_name,
            product_price: body.product_price,
            isInStock: body.isInStock,
            category: body.category,
            password:body.password,
            confirm_password: body.confirm_password
        })
        console.log(product)
        return res.status(200).json({message:"product created sucessfully"})
    }catch(err){
          console.log(err)
          return res.status(200).json({message:err.message})
    }
})
app.get("/api/products", async (req, res) => {
    const allProducts = await productmodel.find({});
    res.json(allProducts);
  });
  app.get("/api/products/:id", async (req, res) => {
    const product = await productmodel.findById(req.params.id);
    res.json({ product });
  });
  app.put("/api/products/:id", async (req, res) => {
    await productmodel.findByIdAndUpdate(req.params.id, req.body);
    res.json({ message: 'Resources Updated' });
  });
  app.delete("/api/products/:id", async (req, res) => {
    await productmodel.findByIdAndDelete(req.params.id);
    res.json({ message: 'Resource Deleted' });
  });
app.listen(port,()=>{
    console.log(`server is running on ${port}:${host}`)
})