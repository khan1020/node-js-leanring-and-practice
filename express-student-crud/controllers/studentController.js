const Student = require("../models/Student");

/* -------------------- CREATE -------------------- */
exports.createStudent = async (req, res) => {
    try {
        const { firstName, lastName, age } = req.body;
        if (!firstName || !lastName || !age)
            return res.status(400).json({ error: "All fields required" });

        const student = await Student.create({ firstName, lastName, age });
        res.json(student);
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
};

/* -------------------- READ ALL -------------------- */
exports.getAllStudents = async (req, res) => {
    try {
        const students = await Student.find();
        res.json(students);
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
};

/* -------------------- UPDATE LOVELIFE -------------------- */
exports.updateLoveLife = async (req, res) => {
    try {
        const { id, lovelife } = req.body;
        if (!id || !lovelife) return res.status(400).json({ error: "id and lovelife required" });

        const updated = await Student.findByIdAndUpdate(id, { lovelife }, { new: true });
        res.json(updated);
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
};

/* -------------------- DELETE AGE -------------------- */
exports.deleteAge = async (req, res) => {
    try {
        const { id } = req.body;
        if (!id) return res.status(400).json({ error: "id required" });

        const updated = await Student.findByIdAndUpdate(id, { $unset: { age: "" } }, { new: true });
        res.json(updated);
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
};
