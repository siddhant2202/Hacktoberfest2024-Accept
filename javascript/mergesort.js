// Function to merge two subarrays
function merge(arr, left, mid, right) {
    let n1 = mid - left + 1;
    let n2 = right - mid;

    // Create temporary arrays
    let L = new Array(n1);
    let R = new Array(n2);

    // Copy data to temporary arrays L[] and R[]
    for (let i = 0; i < n1; i++) {
        L[i] = arr[left + i];
    }
    for (let j = 0; j < n2; j++) {
        R[j] = arr[mid + 1 + j];
    }

    // Merge the temporary arrays back into arr[left..right]
    let i = 0; // Initial index of first subarray
    let j = 0; // Initial index of second subarray
    let k = left; // Initial index of merged subarray

    while (i < n1 && j < n2) {
        if (L[i] <= R[j]) {
            arr[k] = L[i];
            i++;
        } else {
            arr[k] = R[j];
            j++;
        }
        k++;
    }

    // Copy the remaining elements of L[], if any
    while (i < n1) {
        arr[k] = L[i];
        i++;
        k++;
    }

    // Copy the remaining elements of R[], if any
    while (j < n2) {
        arr[k] = R[j];
        j++;
        k++;
    }
}

// Function to implement merge sort
function mergeSort(arr, left, right) {
    if (left < right) {
        let mid = Math.floor((left + right) / 2);

        // Recursively sort first and second halves
        mergeSort(arr, left, mid);
        mergeSort(arr, mid + 1, right);

        // Merge the sorted halves
        merge(arr, left, mid, right);
    }
}

// Function to print the array
function printArray(arr) {
    console.log(arr.join(' '));
}

// Driver code
let arr = [12, 11, 13, 5, 6, 7];
console.log("Given array: ");
printArray(arr);

mergeSort(arr, 0, arr.length - 1);

console.log("\nSorted array: ");
printArray(arr);
