/* const myPromise = new Promise((resolve, reject) => {
  let success = false; // Simulate success or failure
  if (success) {
    resolve("hello  " + 5/0);
  } else {
    reject(10/0);
  }
});

myPromise
  .then((message) => {
    console.log(message);
  })
  .catch((error) => {
    console.error(error);
  });
 */


  // only then working

/*   function fetchData() {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      resolve("Data fetched successfully!");
    }, 2000);
  });
}

fetchData()
  .then((result) => {
    console.log(result); // Output: Data fetched successfully!
  });
 */


  // catch working promis
  
/*   

  function fetchDataWithError() {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      reject("Error fetching data!");
    }, 2000);
  });
}

fetchDataWithError()
  .then((result) => {
    console.log(result);
  })
  .catch((error) => {
    console.log(error); // Output: Error fetching data!
  });
 */

/* 




  // Step 1: Create a function that returns a Promise
function fetchDataFromServer(simulateSuccess) {
  return new Promise((resolve, reject) => {
    console.log("Fetching data from server...");

    setTimeout(() => {
      if (simulateSuccess) {
        // If successful, call resolve
        resolve({
          status: 200,
          data: { id: 1, name: "Afzal", role: "Student" },
          message: "Data fetched successfully!"
        });
      } else {
        // If failed, call reject
        reject({
          status: 500,
          message: "Server error! Could not fetch data."
        });
      }
    }, 2000); // Simulating 2-second delay
  });
}

// Step 2: Use the Promise with then and catch
fetchDataFromServer(true) // Change to false to see reject case
  .then((ak) => {
    console.log("Inside .then (Success):");
    console.log("Status:", ak.status);
    console.log("Data:", ak.data);
    console.log(ak.message);
  })
  .catch((error) => {
    console.log("Inside .catch (Failure):");
    console.log("Status:", error.status);
    console.log("Error Message:", error.message);
  })
  .finally(() => {
    console.log("This will always run whether success or failure (finally).");
  });




 */


/* 



console.log("Start Program");

// Function to simulate fetching user data using a callback
function getUserData(callback) {
    setTimeout(() => {
        console.log("Fetching user data...");
        const user = { name: "Afzal Khan", age: 24 };
        callback(user); // call the callback with user data
    }, 2000);
}

// Function to greet the user
function greetUser(user) {
    console.log(`Hello ${user.name}, you are ${user.age} years old.`);
}

// Call the function with a callback
getUserData(greetUser);

console.log("End Program");




 */



let myPromise = new Promise((resolve, reject)=>{
    let fname = true;
    if(fnamme){
        resolve(console.log( "my name is afzal"))
    }else{
        reject(console.log("name not found")
        )}
    }
);

myPromise.then((message)=>{
    console.log(message);
    
})
.catch((error)=>{
   console.log("    this is catch part "+error);

})


fs =require("fs")
fs.readFile("JavaScript-The-Definitive-Guide-6th-Edition (1).pdf","utf-8", (err,content)=>{
    console.log(content);
    
})













