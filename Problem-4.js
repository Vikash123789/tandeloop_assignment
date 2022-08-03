// Problem-4:  Get the total count of number list in the dictionary which is multiple of [1,2,3,4,5,6,7,8,9]
//     (examples)
//     input: [1,2,8,9,12,46,76,82,15,20,30]
//     Output:
//         {1: 11, 2: 8, 3: 4, 4: 4, 5: 3, 6: 2, 7: 0, 8: 1, 9: 1}


let arr = [1, 2, 3, 4, 5, 6, 7, 8, 9]
let input = [1, 2, 8, 9, 12, 46, 76, 82, 15, 20, 30]

let map = {}

for (let i = 1; i <= arr.length; i++) {
    let count = 0;
    for (let j = 0; j < input.length; j++) {
        if (input[j] % i == 0) {
            count++;
        }
    }
    map[i] = count
}
console.log(map)

//Output :-
// {
//     '1': 11,
//     '2': 8,
//     '3': 4,
//     '4': 4,
//     '5': 3,
//     '6': 2,
//     '7': 0,
//     '8': 1,
//     '9': 1
// }