// Insertion Sort
console.log("Insertion Sort");
/* function InsertionSort(arr) {
    for (let i = 1; i < arr.length; i++) {
        let temp = arr[i];
        let j;
        for (j = i - 1; j >= 0 && arr[j] > temp; j--) {
            arr[j + 1] = arr[j];
        }
        arr[j + 1] = temp;
    }
    console.log(arr);
}
InsertionSort([23, 7, 105, 3, 22, 97]); */

function InsertionSort(arr){
    for(let i = 1; i < arr.length; i++){
        let temp = arr[i];
        let j;
        for(j = i - 1; j >= 0 && arr[j] > temp; j--){
            arr[j + 1] = arr[j];
        }
        arr[j + 1] = temp;
    }

    console.log(arr);
    
}
InsertionSort([23, 7, 105, 3, 22, 97]);