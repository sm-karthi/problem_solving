// Selection sort
function selectionSort(arr) {
    let n = arr.length;

    for (let i = 0; i < n-1; i++) {
        let minIndex = i;

        for (let j = i + 1; j < n; j++) {
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
    return arr;
}

let numbers = [64, 25, 12, 22, 11];
console.log("Sorted Array:", selectionSort(numbers));


// Selection sort with string
function selectionSortString(arr) {
    let n = arr.length;

    for (let i = 0; i < n - 1; i++) {
        let minIndex = i;

        for (let j = i + 1; j < n; j++) {
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



function selection(arr){
    for(let i = 0; i < arr.length; i++){
        let min = i;
        for(let j = i + 1; j < arr.length; j++){
            if(arr[j] < arr[min]){
                min=j;
            }
        }

        console.log(arr.join(" "));
        if(min !== i){
            let temp = arr[min];
            arr[min] = arr[i];
            arr[i] = temp;
        }
    }
    
    
}
selection([4,5,1,3,7]);