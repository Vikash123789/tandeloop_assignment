/*Problem-1: Create a small calculator which performs operations such as Addition, Subtraction, Multiplication and Division using class.
Calculator inputs :> ‘a’, ‘b’ and ‘type of operation’
Datatype :> ‘a’ = double, ‘b’ = double, ‘type of operation’ = string
*/

//Creating a class name Calculator Inside the Class i am creating function for Addition, Subtraction, Multiplication and Division

class Calculator {
    //Function for Addition 
    Addition(a, b) {
        let total = a + b
        console.log(total)
    }
    //Function for Subtraction      
    Subtraction(a, b) {
        let total = a - b
        console.log(total)
    }
    //Function for Multiplication 
    Multiplication(a, b) {
        let total = a * b
        console.log(total)
    }
    //Function for Division 
    Division(a, b) {
        let total = a / b
        console.log(total)
    }
}
//I am Taking a variable and store the property of class Calculator 
let calculator = new Calculator()

//Using Calculator Class i am Calling Addition function for add two number
calculator.Addition(2,3) //Expected Output -  5

//Using Calculator Class i am Calling Subtraction function for Subtract two number
calculator.Subtraction(10,5) //Expected Output -  5

//Using Calculator Class i am Calling Multiplication function for multiply two number
calculator.Multiplication(9,3) //Expected Output -  27

//Using Calculator Class i am Calling Division function for Divide two number
calculator.Division(6,2) //Expected Output -  3