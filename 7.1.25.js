function InsertionSort(arr) {
    let sum = 0;
    
    for (let i = 1; i < arr.length; i++) {
        let temp = arr[i];
        let j;
        let count = 0;
        for (j = i - 1; j >= 0 && arr[j] > temp; j--) {
            arr[j + 1] = arr[j];
            count++;
        }
        arr[j + 1] = temp;
        console.log(`${i} row check ${count}`);
        sum += count;
    }
    console.log(sum)
    
    
}
InsertionSort([2, 1, 3, 1, 2]);


/* Find the LCM of elements in a given array.
For example:
TestResultlcmOfArray([4, 5, 6, 10]);
60 */

