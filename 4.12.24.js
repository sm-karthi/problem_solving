// Add an element in an array, don't add if its already present. For eg in an array [5, 10, 3, 11, 18], if we add 3 it should allow as the element is already there.

function addElement(arr,num){
    let check = false;
    for(let i = 0; i < arr.length; i++){
        if(num === arr[i]){
            check = true;
        }
    }
    if(!check){
        arr.push(num);
    }
console.log(arr);
    
}
addElement([5, 10, 3, 11, 18], 5);

// Given an two arrays, given to Set Union on the two arrays. For [3, 1, 5, 7, 8] and [5, 1, 8, 10, 11].  Result [3, 1, 5, 7, 8, 10, 11]

function setArr(arr1, arr2) {
    let twoArrays = [...arr1, ...arr2];
    let match = [...new Set(twoArrays)];
    return match;
}
console.log(setArr([3, 1, 5, 7, 8], [5, 1, 8, 10, 11]));


// Given an two arrays, given to Set Intersection on the two arrays. For [3, 1, 5, 7, 8] and [5, 1, 8, 10, 11]. Result [1, 5, 8]

function setIntersection(arr1, arr2){
    let emptyArr = [];
    for(let i = 0; i < arr1.length; i++){
        for(let j = 0; j < arr1.length; j++){
            if(arr1[i] === arr2[j]){
                emptyArr.push(arr1[i]);
            }
        }
    }
    console.log(emptyArr);
}
setIntersection([3, 1, 5, 7, 8], [5, 1, 8, 10, 11,]);



let str = "aaabbbbcccddddaaa";
let s = str.split("");
let em = [];
for(let i = 0; i < s.length; i++){
    if(s[i] !== s[i+1]){
        em.push(s[i]);
    }
}
console.log(em.join(" "));

// let em = [str[0]];
// for(let i = 0; i<str.length-1; i++){
//     if(str[i] != str[i+1]){
//         em.push(str[i+1])
//     }
// }
// console.log(em)