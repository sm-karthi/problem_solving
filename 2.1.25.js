// Matrix addition
function Matrix(arr1, arr2) {
    // I can check if not same the two arrays length.
    if (arr1.length !== arr2.length) {
        console.log("Impossible this sum.");
        return;
    }

    let bigArray = [];
    for (let i = 0; i < arr1.length; i++) {
        let smallArray = [];
        let result = 0;
        for (let j = 0; j < arr1[i].length; j++) {
            result = arr1[i][j] + arr2[i][j];
            smallArray.push(result);
        }
        bigArray.push(smallArray);
    }
    console.log(bigArray)

}

Matrix([
    [1, 2, 3],
    [4, 5, 6],
    [7, 8, 9]
],
    [
        [9, 8, 7],
        [6, 5, 4],
        [3, 2, 1]
    ]);



// Matrix multiplication
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

