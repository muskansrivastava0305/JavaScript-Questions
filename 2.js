// find the maximum number in array

// const arr = [3, 5, 6 , 9, 4,]
// const max = Math.max(...arr)
// console.log(max);

//=====================================

const arr = [3, 5, 3, 8 ,6 ]
let max = arr[0]
for(let i = 0 ; i < arr.length ; i++){
    if(arr[i]> max){
        max = arr[i]
    }
}

console.log(max);