const mongoose = require("mongoose")

function ConnectToDB (){
    try {
         mongoose.connect(process.env.MONGO_URI)
        console.log("Connected to Database")
    }
    catch(err){
        console.log(err)
    }
}

module.exports = ConnectToDB;