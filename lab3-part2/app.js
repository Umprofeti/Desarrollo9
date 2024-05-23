require("dotenv").config()
const express = require("express")
const app=express()



// configuraciones 
const puerto = process.env.puerto || 54112
app.set("view engine",'ejs')



//rutas 
app.get("/",(req,res)=>{
res.render("index")

})

app.use("/public",express.static(__dirname+"/views/public"))


app.get("/eventos",(req,res)=>{
    res.render("eventos")    
})

//levantar puerto
app.listen(puerto,()=>{
 console.log(`Servidor levantado en el puerto:  http://localhost:${puerto}/`)

})