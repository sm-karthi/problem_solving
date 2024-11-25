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



