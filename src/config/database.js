const mongoose = require('mongoose');

const connect = () =>{
    console.log("Mongodb Connection requested");
    return mongoose.connect('mongodb://127.0.0.1:27017/project');
}

module.exports = {
    connect
}