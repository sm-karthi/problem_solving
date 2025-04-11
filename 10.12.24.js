/* Given a sorted list with an unsorted number e in the rightmost cell,
 can you write some simple code to insert  into the array so that it remains sorted?
 And print each of the steps
  
 input
 insertionSort1([1,2,4,5,3])
 Output:
 1 2 4 5 5
 1 2 4 4 5
 1 2 3 4 5 */

function insertionSort1(arr) {
    const e = arr[arr.length - 1];
    for (let i = arr.length - 2; i >= 0; i--) {
        if (arr[i] > e) {
            arr[i + 1] = arr[i];
            console.log(arr.join(' '));
        } else {
            arr[i + 1] = e;
            console.log(arr.join(' '));
            return;
        }
    }
    arr[0] = e;
    console.log(arr.join(' '));
}
insertionSort1([1, 2, 4, 5, 3]);


// Not use Set()
function sets(arr) {
    let empty = [];
    for (let i = 0; i < arr.length; i++) {
        let check = false;
        for (let j = 0; j < empty.length; j++) {
            if (arr[i] === empty[j]) {
                check = true;
                break;
            }
        }
        if(!check){
            empty.push(arr[i])
        }
    }

console.log(empty)
}
sets([2, 4, 8, 12, 2, 4,])