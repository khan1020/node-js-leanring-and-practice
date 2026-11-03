const express = require("express");
const {
    createStudent,
    getAllStudents,
    updateLoveLife,
    deleteAge
} = require("../controllers/studentController");

const router = express.Router();

router.post("/create", createStudent);      // Create with body
router.get("/read", getAllStudents);        // Read all
router.put("/update", updateLoveLife);      // Update lovelife with body
router.delete("/delete-age", deleteAge);    // Delete age with body

module.exports = router;
