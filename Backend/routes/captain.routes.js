const express = require("express");
const router = express.Router();
const captainController = require("../controllers/captain.controller");
const {body} = require("express-validator");

router.post('/register', [body("fullname.firstname").isLength({min: 3}).withMessage("Name must be at least 3 characters long"),
    body("email").isEmail().withMessage("Invalid email"),
    body("password").isLength({min: 6}).withMessage("Password must be at least 6 characters long"),
    body('vehicle.color').isLength({min: 3}).withMessage("Color must be at least 3 characters long"),
    body('vehicle.plate').isLength({min: 3}).withMessage("Plate must be at least 3 characters long"),
    body('vehicle.capacity').isLength({min: 1}).withMessage("Capacity must be at least 1 characters long"),
    body('vehicle.vehicleType').isLength({min: 3}).withMessage("Type must be at least 3 characters long"),
    
], captainController.registerCaptain);



module.exports = router;