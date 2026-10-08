import express from "express";
import{products}from "./data.js";
const app = express();

//returns name,image,price,of all products
app.get("/api/products",(req,res)=>{

   // let sortedProducts = products.map(({ name, image, price, id }) => ({
     // name,
     // image,
     // price,
    //  id,
   // }));
   let sortedProducts = products.map(({description,reviews,...rest})=>rest,);
    res.status(200).json({count:sortedProducts.length,data:sortedProducts})
});
//get all products(id,name,priceand and image)
app.get("/api/products/:pid",(req,res)=>{
    const{pid}=req.params;
    const item =products.find((p)=>p.id===Number(pid));
    if(!item){
        res.status(200).json({msg:`Product with id ${pid} not found`});
    }else{
        res.status(200).json({ msg: `Product with id ${pid}  found` });
    }
})

app.use((req, res) => {
  res.status(404).send("<h1>page not found</h1>");
});

app.listen(4444,(req,res)=>{
    res.status(404).send("<h1>page not found</h1>")
});
app.listen(4444, (req,res) => console.log("prg3 is running at 4444"));