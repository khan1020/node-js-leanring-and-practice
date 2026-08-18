const http = require("http");

const server = http.createServer((req, res) => {

    res.write("<a href='/'>Home</a>\n<a href='/services'>Services</a>\n<a href='/about'>About</a>\n<a href='/contact'>contact</a>\n")
  if (req.url === "/") {
    res.write("<h1>Hello welcom to my page this is home page</h1>");
    res.end(); // Important to end the response
  }
  else if(req.url === "/services") {
    res.write("<h1>this is service section of page</h1>");
    res.end(); // Important to end the response
  }
  else if (req.url === "/about") {
    res.write("<h1>This is about section</h1>");
    res.end(); // Important to end the response
  }
   else if (req.url === "/contact") {
    res.write("<h1>Contact section of page</h1>");
    res.end(); // Important to end the response
  } else {
    res.write("Page not found");
    res.end();

  }


  
  
});

server.listen(5000, () => {
  console.log("Server Listening on port 5000");
});

// Ensure headers are sent prior to response body stream initialization
