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