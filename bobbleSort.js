// Bobble sort
function bubbleSort(arr) {
    let swap = true;
    while(swap){
        swap = false;
        for(let i = 0; i < arr.length; i++){
            if(arr[i] > arr[i + 1]){
                swap = true;
                let temp = arr[i];
                arr[i] = arr[i + 1];
                arr[i + 1] = temp;
            }
        }
    }

    return arr;
}

console.log("Sorted array:", bubbleSort([64, 34, 25, 12, 22, 11, 90]));

function bubbleSort(arr) {
    let n = arr.length;
    let swap=true;
    while(swap){
        swap=false;
        for(let i=0;i<n-1;i++){
            if(arr[i]>arr[i+1]){
                swap=true;
                [arr[i],arr[i+1]]=[arr[i+1],arr[i]]
            }
        }
    }
    return arr;
}
// Example usage
const array = [64, 34, 25, 12, 22, 11, 90];
console.log("Sorted array:", bubbleSort(array));

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