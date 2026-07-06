// ==========================
// About Afzal Module
// ==========================

// --------------------------
// Function: aboutAfzal()
// --------------------------
// Purpose: Shares some personal (but wholesome) info about Afzal.
// Demonstrates how to define a function and export it for use in other modules.
// Also serves as proof that love can be coded 💖
function aboutAfzal() {
    // Personal info stored in local variables (kept secret unless exported)
    let firstName = "Afzal";
    let lastName = "Khan";
    let fianceName = "Tasleem Khan";

    // Prints a nice love message using template literals
    console.log(`${firstName} ${lastName} loves ${fianceName} with all his heart ❤️`);
}

// --------------------------
// Exporting the function
// --------------------------
// Wrap the function in an object for export. 
// This way other files can require it and call aboutAfzal() without revealing other stuff.
// If love could be exported like this, the world would be a happier place 😄
module.exports = { aboutAfzal };
