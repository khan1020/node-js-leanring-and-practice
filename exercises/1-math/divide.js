divide = (num1, num2)=>{
    if (num1!=null && num2!=null) {
        try {
            return num1/num2
        
        } catch (error) {
            console.log(error);
    }
        
        
    }else{
        console.log("Add both numerator and denominator: ");
        
    }
}


module.exports = divide