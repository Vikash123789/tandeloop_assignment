/*Problem-2:  With a single integer as the input, generate the following until a = x [series of numbers as shown in the below examples]

    Output: (examples)
        1) input a = 1, then output : 1
        2) input a = 2, then output : 1, 3
        3) input a = 3, then output : 1, 3, 5
        4) input a = 4, then output : 1, 3, 5, 7
        .
        .
     5) input a = x, then output : 1, 3, 5, 7, .......
*/
//Creating a Function Name Of function is generate were we pass input on argument
let generate = function (input) {
    let i = 1
    let j = 1
    let arr = []
    //While Loop
    while (i <= input) {
    //Push j Value on arr
        arr.push(j)
        j = j + 2
        i++
    }
    return arr
}
let result = generate(2)
console.log(result)


//Output:-
// [ 1, 3 ]