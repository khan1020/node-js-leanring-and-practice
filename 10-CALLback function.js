function fetchData(callback) {
  setTimeout(() => {
    console.log("Data fetched!");
    callback();
  }, 2000); // Simulates a delay
}

function processData() {
  console.log("Processing data...");
}

fetchData(processData);
// Output (after 2 seconds):
// Data fetched!
// Processing data...


console.log("Start programm");


function func1(name,hello){
    console.log("Hello, how are you? My name is "+name)
    hello()
}


function func2(){
    console.log("I am fine, thank you!")
}
func1("Afzal Khan",func2)

console.log("End of programm");



// Avoid callback hell by modularizing nested asynchronous tasks
