const mongoose = require("mongoose");

const blackListedTokenSchema = new mongoose.Schema({
  token: { type: String, required: true },
  createdAt: { type: Date, default: Date.now, expires: 864e3 },  
})

module.exports = mongoose.model("BlackListedToken", blackListedTokenSchema);