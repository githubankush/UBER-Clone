const dotenv = require("dotenv");
dotenv.config();
const cors = require("cors")
const express = require("express")
const ConnectToDB = require("./db/db")
const userRoutes = require("./routes/user.routes")
const app = express()

ConnectToDB();
app.use(cors());
app.use(express.json())
app.use(express.urlencoded({ extended: true }))

app.use("/users", userRoutes);

app.get("/", (req, res) => {
    res.send("Hello World");
});



module.exports = app;