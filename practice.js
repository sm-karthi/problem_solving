// bobble sort
function bobbleSort(arr) {
    let check = true;

    while (check) {
        check = false;
        for (let i = 0; i < arr.length; i++) {
            if (arr[i] > arr[i + 1]) {
                check = true;

                let temp = arr[i];
                arr[i] = arr[i + 1];
                arr[i + 1] = temp;
            }
        }
    }

    console.log("Bobble sort array: " + arr);
}
bobbleSort([34, 90, 23, 78, 12, 65]);

// Selection sort
function selectionSort(arr) {
    for (let i = 0; i < arr.length - 1; i++) {
        let minIndex = i;
        for (let j = i + 1; j < arr.length; j++) {
            if (arr[j] < arr[minIndex]) {
                minIndex = j;
            }
        }

        if (minIndex !== i) {
            let temp = arr[i];
            arr[i] = arr[minIndex];
            arr[minIndex] = temp;
        }
    }
    console.log("Selection sort array: " + arr);
}
selectionSort([34, 90, 23, 78, 12, 65]);

// Insertion sort
function InsertionSort(arr) {
    for (let i = 1; i < arr.length; i++) {
        let temp = arr[i];
        let j;
        for (j = i - 1; j >= 0 && temp < arr[j]; j--) {
            arr[j + 1] = arr[j];
        }
        arr[j + 1] = temp;
    }
    console.log("Insertion sort array: " + arr);
}
InsertionSort([34, 90, 23, 78, 12, 65]);

// [5, 5, 4, 1, 1, 1, 6, 7, 8] Answer is 1
function occurringElement(arr) {
    let temp = 0;
    let result = 0;
    for (let i = 0; i < arr.length; i++) {
        let count = 0;
        for (let j = 0; j < arr.length; j++) {
            if (arr[i] === arr[j]) {
                count++;
            }
        }

        if (count > temp) {
            temp = count;
            result = arr[i];
        }
    }
    console.log(`The maximum number is ${result} and ${temp} times`);
}
occurringElement([5, 5, 4, 1, 1, 1, 6, 7, 8]);

function selectionSort(arr) {

    // Enter code here
    if(arr.length === 1){
        console.log(arr.join(""));
        return;
    }

    
    
    for(let i = 0; i < arr.length; i++){
        let str = "";
        for(let j = i + 1; j < arr.length; j++){
            if(arr[i] > arr[j]){
                let temp = arr[i];
                arr[i] = arr[j];
                arr[j] = temp;
            }
            
             
        }
        
        console.log(arr.join(" "));
       
    }
}
selectionSort([4,5,1,3,7]);
selectionSort([81]);

// Find the second largest number in a array
function secondLargest(arr){
    let max = arr[0];
    let newArray = [];
    

    for(let i = 0; i < arr.length; i++){
        if(arr[i] > max){
            max = arr[i];
        }
    }
    
    for(let i = 0; i < arr.length; i++){
        if(max > arr[i]){
            newArray.push(arr[i]);
        }
    }

    let secondMax = newArray[0];

    for(let i = 0; i < newArray.length; i++){
        if(newArray[i] > secondMax){
            secondMax = newArray[i];
        }
    }

    
    console.log(secondMax);
    
    
}
secondLargest([34, 335, 23, 58, 234, 89, 239, 450]);


