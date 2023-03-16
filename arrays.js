
const arr = [1,2,[3,4], 10, 50, 60]
const arrCopy = [...arr]

arr[2]=[5,6]
arr[0]=2

console.log(arr)
console.log(arrCopy)

/*
Question: 

    for both [...arr] and arr.slice()
    based on the reading nested array should 
    be shallow copy by what we are testing
    it is a deep copy as whole. what is the
    reason for this. 

*/

let arrNew = arr.slice(2,-2)
console.log(arrNew)
arrNew= arr.splice(2)
console.log(arrNew)