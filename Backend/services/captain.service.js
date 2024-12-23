const mongoose = require("mongoose")
const captainModel = require("../models/captain.model")

module.exports.createCaptain = async({
    firstname, lastname, email, password,
    color, plate, capacity, vehicleType
}) =>{
    if(!firstname || !lastname || !email || !password || !vehicleType){
        throw new Error("Please fill all the fields")
    }
    const captain = new captainModel({
        fullname: {
            firstname,
            lastname
        },
        email,
        password,
        vehicle: {
            color,
            plate,
            capacity,
            vehicleType
        }
    });
    // Save the captain to the database
    const savedCaptain = await captain.save();
    return savedCaptain;
}