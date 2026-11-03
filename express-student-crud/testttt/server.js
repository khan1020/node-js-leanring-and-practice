const express = require("express");
const app = express();
const cors = require("cors");



app.use(express.json()); // important: lets express read JSON data
app.use(cors());       // <-- ADD THIS
// app.use(express.json());
// POST API

app.post("/api/student/testttt", (req, res) => {
    dataFromFrontend = req.body.name;
    console.log("Data received from frontend:", dataFromFrontend);

    res.json({
        message: "Student received",
        data: dataFromFrontend
    });
});


// app.get("/api/student/testttt", (req, res) => {
//     res.send("GET route working!");
// });


app.listen(3000, () => console.log("Server running on port 3000"));
