const express  = require("express"); //this pacakge returns a fxn using which we can initiate a new express application object
const app = express(); //exceuting the fxn returned a new express application
const apiRouter = require("./src/routes/index")

app.use("/api",apiRouter);
app.get('/',(req,res)=>{
    res.status(200);
    res.send({
        success:true,
        message:"Successfully hitting the api",
        data:{}
       
    });
})

app.listen(3000, ()=>{
    //this cb will be exceuted everytime the server starts
    console.log("Server Started Successfully");
});