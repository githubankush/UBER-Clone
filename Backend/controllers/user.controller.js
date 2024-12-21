const blackListedTokenModel = require("../models/blackListedToken.model");
const userModel = require("../models/user.model");
const userService = require("../services/user.service");
const {validationResult} = require("express-validator");

// register function
const registerUser = async (req, res) => {
    const error = validationResult(req);

    if (!error.isEmpty()) {
        return res.status(400).json({ error: error.array() });
    }

    const { fullname, email, password } = req.body;

    const isUserExist = await userModel.findOne({ email });

    if (isUserExist) {
        return res.status(400).json({ error: "User already exist" });
    }

    const hashedPassword = await userModel.hashPassword(password);

    const user = await userService.createUser({
        firstname: fullname.firstname,
        lastname: fullname.lastname,
        email,
        password: hashedPassword,
    });

    const token = user.generateAuthToken();

    res.status(201).json({ token, user });
};


// login function
const loginUser = async (req, res) => {
    const error = validationResult(req);

    if (!error.isEmpty()) {
        return res.status(400).json({ error: error.array() });
    }
    const { email, password } = req.body;
    const user = await userModel.findOne({email}).select('+password');

    if (!user) {
        return res.status(401).json({ error: "Invalid email or password" });
    }

    const isMatch = await user.comparePassword(password);

    if (!isMatch) {
        return res.status(401).json({ error: "Invalid email or password" });
    }

    const token = user.generateAuthToken();
    res.cookie("token", token);
    res.status(200).json({ token, user });
     
}

const getUserprofile = async (req, res,next) => {
    res.status(200).json({user: req.user})

}

const logoutUser = async (req, res) => {
    res.clearCookie("token");
    const token = req.cookies.token || req.headers.authorization?.split(' ')[ 1 ];

    await blackListedTokenModel.create({ token });
    res.status(200).json({ message: "User logged out successfully" });
}

module.exports= {registerUser,loginUser, getUserprofile,logoutUser} 