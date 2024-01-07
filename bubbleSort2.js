const arr1 = [3, 4, 2, 5 ,2, 6, 8, 8, 2, 5, 1, 9 ]

function bubbleSort(arr) {
    let noSwaps

    for(let i = arr.length; i > 0; i--) {
        noSwaps = true
        for(let j = 0; j < i - 1; j++) {
            if(arr[j] > arr[j + 1]) {
                let temp = arr[j]
                arr[j] = arr[j + 1]
                arr[j + 1] = temp

                noSwaps = false
            }
        }
        if(noSwaps) break
    }
}

bubbleSort(arr1)

console.log(arr1)
