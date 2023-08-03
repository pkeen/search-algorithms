function binarySearch(arr, element){
    //  search through the array non-recursively for the element
    let [left, right] = [0, arr.length - 1];

    while (left <= right) {

        let mid = Math.floor((left + right) / 2);
        // console.log(`left = ${left}`)
        // console.log(`right = ${right}`)

        if (arr[mid] === element) {
            return mid;
        } else if (element > arr[mid]) {
            left = mid + 1
        } else {
            right = mid
        }

        if (left === right) {
            if (arr[left] === element) return left
            return -1
        }

    }

    return -1
    //  if the element is not found, return -1
    //  if the element is found, return the index at which it was found
}

const things = [1,3,5,7,9];

console.log(binarySearch(things, 7));

function recursiveBinarySearch(arr, element, indexAdd = 0) {
    //  search through the array recursively for the element
    //  you may need to add more parameters to this function!
    //  if the element is not found, return -1
    //  if the element is found, return the index at which it was found

   // base case
   let mid = Math.floor((arr.length -1 )/2)
   console.log(arr)
     console.log(`indexAdd = ${indexAdd}`)
     console.log(`mid: ${mid}`);
     // console.log(`el: ${element}`)npm tes
     console.log(`arr[mid] = ${arr[mid]}`)
 
     // Base case
     if (arr[mid] === element) {
       console.log('matched!')
       return mid + indexAdd
     } else if (arr.length === 1) {
       return -1
     }
 
     // recur
     if (element < arr[mid]) {
       console.log('element smaller than mid')
       let leftArray = arr.slice(0, mid);
       return recursiveBinarySearch(leftArray, element)
     } else {
       console.log('higher side')
       let rightArr = arr.slice(mid + 1, arr.length)
       return recursiveBinarySearch(rightArr, element, indexAdd + mid + 1) // the index add here will keep track of lost index numbers when splitting the arr
     }

}

module.exports = {
    binarySearch,
    recursiveBinarySearch
}