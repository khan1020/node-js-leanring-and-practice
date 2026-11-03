const express = require("express");
const app = express();
const PORT = 5000;

// --- MIDDLEWARE ---
app.use(express.json()); 
app.use(express.urlencoded({ extended: true }));

// --- ROUTES ---

// 1. Home Route
app.get("/", (req, res) => {
    res.send("Hello afzaliii");
});

// 2. Dynamic GET Route 
app.get("/:asd", (req, res) => {
    const param = req.params.asd;
    const query = req.query.age;
    
    console.log(`GET Request - Param: ${param}, Query: ${query}`);
    res.send("Hello afzal");
});

// 3. Dynamic POST Route 
app.post("/:name", (req, res) => {
    console.log("POST Body received:", req.body); 
    
    const param = req.params.name;
    const query = req.query.age;
    
    console.log(`POST Request - Param: ${param}, Query: ${query}`);
    res.send("Hello afzal");
});

// --- SERVER START ---

app.listen(PORT, (error) => {
    if (error) {
        console.log("Error occurred: ", error);
    } else {
        console.log(`Server is running at port ${PORT}`);
    }
});

/* =============================================================================
   DOCUMENTATION: GET vs. POST USE CASES
=============================================================================

-----------------------------------------------------------------------------
SCENARIO A: GET REQUESTS (Fetching Data)
"I want to read information from the server."
-----------------------------------------------------------------------------

1. req.params (The Target)
   * Use Case: Specifies EXACTLY which unique item you want to view.
   * Example:  GET /product/500
   * Logic:    "Show me the product with ID 500."

2. req.query (The Filter)
   * Use Case: Modifies HOW you view that data (sorting, filtering, hiding fields).
   * Example:  GET /product/500?currency=USD&view=compact
   * Logic:    "Show me product 500, but convert price to USD and hide details."

3. req.body (Forbidden)
   * Use Case: NONE.
   * Logic:    You should NEVER send a body in a GET request. It is bad practice
               and many servers will simply ignore it.

-----------------------------------------------------------------------------
SCENARIO B: POST REQUESTS (Sending Data)
"I want to save/create new information on the server."
-----------------------------------------------------------------------------

1. req.params (The Parent/Location)
   * Use Case: Specifies WHERE to save the new data.
   * Example:  POST /blog/10/comments
   * Logic:    "I want to post a comment specifically under Blog Post #10."
   * Note:     We use params here to link the new data to an existing parent.

2. req.body (The Actual Data)
   * Use Case: Contains the actual information you are saving.
   * Example:  { "text": "Nice post!", "author": "Afzal" }
   * Logic:    "Here is the content of the comment I want to save."

3. req.query (The Configuration)
   * Use Case: Rare settings for the save operation itself.
   * Example:  POST /blog/10/comments?notifyAuthor=true
   * Logic:    "Save this comment, AND please send an email to the author."

=============================================================================
*/