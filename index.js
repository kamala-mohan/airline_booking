const express  = require("express"); //this pacakge returns a fxn using which we can initiate a new express application object
const apiRouter = require("./src/routes/index")
const User = require("./src/models/user")
const {connect} = require("./src/config/database")
const app = express(); //exceuting the fxn returned a new express application


app.use("/api",apiRouter);
app.get('/',(req,res)=>{
    res.status(200);
    res.send({
        success:true,
        message:"Successfully hitting the api",
        data:{}
       
    });
})

app.listen(3000, async ()=>{
    //this cb will be exceuted everytime the server starts
    await connect();
    console.log("Mongo db Connected Successfully");
    console.log("Server Started Successfully");
    let user = await User.create({
        email:"abc@xyz.com",
        password:12345,
        username:"ABC"

     });
     console.log(user);
});