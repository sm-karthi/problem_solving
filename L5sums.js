// Bobble sort
console.log("Bobble sort")
console.log();
function bubbleSort(arr) {
    for (let i = 0; i < arr.length - 1; i++) {
        for (let j = 0; j < arr.length - 1; j++) {
            if (arr[j] > arr[j + 1]) {
                let temp = arr[j];
                arr[j] = arr[j + 1];
                arr[j + 1] = temp;
            }
        }
    }
    return arr;
}
console.log(bubbleSort([23, 7, 105, 3, 22, 97]));

// Bobble sort with string
function bubbleSortString(arr) {
    for (let i = 0; i < arr.length - 1; i++) {
        for (let j = 0; j < arr.length - 1; j++) {
            if (arr[j] > arr[j + 1]) {
                let temp = arr[j];
                arr[j] = arr[j + 1];
                arr[j + 1] = temp;
            }
        }
    }
    return arr;
}
console.log(bubbleSortString(["Orange", "Apple", "Mango", "Banana"]));

// Bobble sort with object

// Implement the bubblesort algorithm for an array of objects in Javascript.
// The object is a Student object with name, age, mark. Sort it by age.
function bubbleSortObject(student) {

    for (let i = 0; i < student.length - 1; i++) {
        for (let j = 0; j < student.length - 1; j++) {
            if (student[j].Age > student[j + 1].Age) {
                let temp = student[j];
                student[j] = student[j + 1];
                student[j + 1] = temp;
            }
        }

    }
    console.log(student);
}
bubbleSortObject([
    {
        Name: "Gokul",
        Age: 18,
        Mark: 546
    },
    {
        Name: "Karthi",
        Age: 25,
        Mark: 408
    },
    {
        Name: "Krishna",
        Age: 20,
        Mark: 500
    }

]);


// Selection sort
console.log();
console.log("Selection sort");
console.log();
function selectionSort(arr) {
    for (let i = 0; i < arr.length - 1; i++) {
        for (let j = i + 1; j < arr.length; j++) {
            if (arr[i] > arr[j]) {
                let temp = arr[i];
                arr[i] = arr[j];
                arr[j] = temp;
            }
        }
    }
    return arr;
}
console.log(selectionSort([23, 7, 105, 3, 22, 97]));

// Selection sort with string
function selectionSortString(arr) {
    for (let i = 0; i < arr.length - 1; i++) {
        for (let j = i + 1; j < arr.length; j++) {
            if (arr[i] > arr[j]) {
                let temp = arr[i];
                arr[i] = arr[j];
                arr[j] = temp;
            }
        }
    }
    return arr;
}
console.log(selectionSortString(["Orange", "Apple", "Mango", "Banana"]));

// Selection sort with object

function selectionSortObject(student) {
    for (let i = 0; i < student.length - 1; i++) {
        for (let j = i + 1; j < student.length; j++) {
            if (student[i].Age > student[j].Age) {
                let temp = student[i];
                student[i] = student[j];
                student[j] = temp;
            }
        }
    }
    console.log(student);
}
selectionSortObject([
    {
        Name: "Gokul",
        Age: 18,
        Mark: 546
    },
    {
        Name: "Karthi",
        Age: 25,
        Mark: 408
    },
    {
        Name: "Krishna",
        Age: 20,
        Mark: 500
    }

]);

// Insertion Sort
console.log("Insertion Sort");
function InsertionSort(arr) {
    for (let i = 1; i < arr.length - 1; i++) {
        let temp = arr[i];
        let j;
        for (j = i - 1; j >= 0 && arr[j] > temp; j--) {
            arr[j + 1] = arr[j];
        }
        arr[j + 1] = temp;
    }
    console.log(arr);
}
InsertionSort([23, 7, 105, 3, 22, 97]);

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

