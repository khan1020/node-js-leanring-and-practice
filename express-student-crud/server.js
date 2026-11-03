const express = require("express");
const mongoose = require("mongoose");
require("dotenv").config();


const cors = require("cors");

const studentRoutes = require("./routes/studentRoutes");

const app = express();
app.use(express.json());
app.use(cors());

// Routes
app.use("/api/students", studentRoutes);

// Connect MongoDB Atlas
mongoose.connect(process.env.MONGO_URI)
.then(() => {
    console.log("MongoDB Connected Successfully");
    app.listen(3000, () => console.log("Server running at 3000"));
})
.catch((err) => {
    console.error("DB Connection Failed", err);
});
