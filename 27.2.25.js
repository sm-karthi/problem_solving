function checkString(s) {
    let result = "";
    let i = 0;
    while (i < s.length) {

        let count = 1;

        while (s[i] === s[i + count]) {
            count++;
        }

        result += s[i] + count;

        i += count;
    }
    console.log(result);

}
checkString("aaabcccaa");

function matrixMultiple(arr1, arr2) {
    // I can check if not same the two arrays length.
    if (arr1.length !== arr2.length) {
        console.log("Impossible this sum.");
        return;
    }

    if (arr1[0].length !== arr2[0].length){
        console.log("Impossible this sum.");
        return;
    }

    let bigArray = [];
    for (let i = 0; i < arr1.length; i++) {
        let smallArray = [];

        for (let j = 0; j < arr1[i].length; j++) {
            let result = 0;
            for (let k = 0; k < arr2.length; k++) {
                result += arr1[i][k] * arr2[k][j];
            }
            smallArray.push(result);
        }

        bigArray.push(smallArray);
    }
    console.log(bigArray);
}
matrixMultiple([
    [1, 2, 3],
    [4, 5, 6],
    [7, 8, 9]
],
    [
        [1, 2, 3],
        [4, 5, 6],
        [7, 8, 9]
    ]);



function arrangeName(arr,letter){
      let count = 0;
    
    for(let i=0;i<arr.length;i++){
        let count_
        for(let j=0; j<arr[0].length;j++){
            if(arr[i][j]===letter){

            }
        }
    }

      return resultArr;

}
console.log(arrangeName(["apple", "anna", "angel", "apple"],"a"))


console.log(Math.ceil(67 / 5) * 5); 