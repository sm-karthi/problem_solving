// Matrix Addition using 2d Integer array

function Matrix(arr1, arr2) {
    
    for (let i = 0; i < arr1.length; i++) {
        let empty = [];
        let sum = 0;
        for (let j = 0; j < arr1.length; j++) {
            sum = arr1[i][j] + arr2[i][j];
            empty.push(sum);
            
        }
        console.log(empty);
    }
    
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

// [5, 5, 4, 1, 1, 1, 6, 7, 8] Answer is 1
function occurringElement(arr){
    let temp = 0;
    let result = 0;
    for(let i = 0; i < arr.length; i++){
        let count = 0;
        for(let j = 0; j < arr.length; j++){
            if(arr[i] === arr[j]){
                count++;
            }
        }
        if(count > temp){
            temp = count;
            result = arr[i];
        }
    }
    console.log(result);
}
occurringElement([5, 5, 5, 5, 4, 1, 1, 1, 6, 7, 8]);

