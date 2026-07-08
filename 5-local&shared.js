// ==========================
// Local vs Shared Example (Edgy & Fun Version)
// ==========================

// --------------------------
// Local variable (private)
// --------------------------
// This is a crazy, over-the-top desire, safely imaginary 😎
const wildDesrire="I want to have sex with taslu multiple times a day like 10 time a day, i'll keep going till i don't falter"

// --------------------------
// Shared function (exported)
// --------------------------
const hi = (name) => {
    console.log(`Yo, ${name}! Brace yourself for some wild coding adventures! 🚀`);
};

// --------------------------
// Exporting shared items
// --------------------------
module.exports = { hi };

// ✅ Notes:
// - wildDesire is private, stays in this file
// - hi() is shared, ready for anyone to call
// - Demonstrates separating private vs public module data
