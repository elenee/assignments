// 1)
let arr = [];
for(let i = 5; i <= 15; i++) {
    arr.push(i);
}
console.log(arr)

// 2) 
let arr1 = [1,2,3,4,5]
for(let i = arr1.length - 1; i >= 0; i--) {
    console.log(arr1[i]);
}

// 3) 
let arr2 = [100,2,3,9]
let min = arr2[0];
for(let i = 0; i < arr2.length; i++) {
    if(arr2[i] < min) {
        min = arr2[i];
    }
}
console.log("min: " + min);

// 4) 
let arr3 = [1,2,3,4,5,6,7]
let sliced = arr3.slice(1, 4);
console.log(sliced);

// 5)
let array1 = [1,2];
let array2 = [3,4];
let array3 = [...array1, ...array2];
console.log(array3);

// 6)
let arr4 = [1,2,3,4,5,6,6,7,7]
let arr5 = [...new Set(arr4)]
console.log(arr5);

// 7)
let array = [1,2,3,4,5,6,7]
let odd = [];
let even = [];
for(let i = 0; i < array.length; i++) {
    if(array[i] % 2 === 0) {
        even.push(array[i])
    } else {
        odd.push(array[i])
    }
}
console.log(even);
console.log(odd);


// 8)
let array6 = [1,2,3,4,5,6,7,-1,-2,-3,-4]
let sum = 0;
let p = 0;
for(let i = 0; i < array6.length; i++) {
    if(array6[i] > 0) {
        p++
    } else {
        sum += array6[i];
    }
}
console.log(p);
console.log(sum);

// 9) 
let array4 = [1, -2];
let array5 = []
for(let i = 0; i < array4.length; i++) {
    array5.push(-array4[i])
}
console.log(array5);

// 10)
let arr6 = [1,[2,[3]],[4]];
console.log(arr6.flat(Infinity));