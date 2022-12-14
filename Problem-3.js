/* Problem-3:  With a single integer as the input, generate the following until a = x [series of numbers as shown in the below examples]

     Output: (examples)
         1) input a = 1, then output : 1
         2) input a = 2, then output : 1
         3) input a = 3, then output : 1, 3, 5
         4) input a = 4, then output : 1, 3, 5
         5) input a = 5, then output : 1, 3, 5, 7, 9
         6) input a = 6, then output : 1, 3, 5, 7, 9
         .
         .
        7) input a = x, then output : 1, 3, 5, 7, .......
*/

function generate(input) {
    let i = 1
    let j = 1

    if (input % 2 == 0) {
        input = input - 1
    }
    let arr = []
    while (i <= input) {
    //Push the Value of j in arr
        arr.push(j)
        j = j + 2
        i++
    }
    return arr
}
let result = generate(6)
console.log(result)

//Output : 
// [ 1, 3, 5, 7, 9 ]