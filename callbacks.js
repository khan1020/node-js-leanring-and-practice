
function fetchUserData(userId, callback) {

    setTimeout(() => {
        if (userId < 1) {
            callback(error, nu)
        } else {
            console.log(`john doe (ID: ${userId})`)
        }
    }, 2000);
}

function processResult(error) {
    try {
        let res = 10 / 0;
        if (!isFinite(res)) {
            throw new Error("Cannot divide by zero");
        }
        console.log(res);
    } catch (error) {
        console.error("Error occurred:", error.message);
    } finally {
        console.log("Execution completed");
    }
}

fetchUserData(2, processResult)























function processUserAction(username, message, callback) {

    if (username == null || username == "") {
        throw new Error("insert user name");


    }
    if (Number.isInteger(username)) {
        throw new Error("userName cannot be an Integer.");


    }
    callback(username, message)

}

function notifyUser(userName, message) {
    message2 = message.toLowerCase()
    if (message2.includes("urgent")) {
        //if we were use html we would user alert
        console.log("Alert!! this is urgent message ")
    }
    else {
        console.log(message);

    }
}

processUserAction("Afzal", "urgent how are you?", notifyUser)
processUserAction("Afzal", "sir how are you?", notifyUser)























numb = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

function filterNumbers(numbers, callback) {
    areEven = [];

    for (let i = 0; i < numbers.length; i++) {
        if (callback(numbers[i])) {
            areEven.push(numbers[i]);
        }
    }

    return areEven;

}

function isEven(even) {
    return even % 2 === 0;
}


console.log(filterNumbers(numb, isEven));





















function greet(Fname, Lname) {
    console.log(`${Fname} Rind Baloch`)
    Lname(Fname);

}
function callback(Fname) {
    console.log(`how are you ${Fname} ?`)
}

greet("Afzal", callback)


function calculatePrice(price, discount, callback) {
    let dis = price * discount / 100
    let finalPrice = price - dis
    console.log(`initial price is ${price}`)
    console.log(`after discount price is ${finalPrice}`)
    callback(finalPrice);
}

function logPrice(finalPrice) {
    console.log(`final price is ${finalPrice}`);

}

calculatePrice(200, 10, logPrice);