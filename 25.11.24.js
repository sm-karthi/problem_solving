// Given an array of Integers, remove all the duplicates eg: [3, 4, 1, 5, 1, 9, 3] output [3, 4, 1, 5, 9]

function FindDuplicate(arr) {
    let unique = [];

    for (let i = 0; i < arr.length; i++) {
        if (!unique.includes(arr[i])) {
            unique.push(arr[i]); 
        }
    }

    return unique;
}

// Example usage
console.log(FindDuplicate([3, 4, 1, 5, 1, 9, 3])); // Output: [3, 4, 1, 5, 9]

