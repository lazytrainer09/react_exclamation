const arr = [1, 2, 3, 4, 5];
const arr1 = [1, 2, 3, 4, 5];

console.log(arr.reduce((n, m) => n + m)); // 15
console.log(arr.sort((n, m) => n > m ? -1 : 1)); // [5, 4, 3, 2, 1] sortは破壊的メソッド
console.log(arr);  // [5, 4, 3, 2, 1] 破壊されている

console.log(arr1.slice().sort((n, m) => n > m ? -1 : 1)); // [5, 4, 3, 2, 1] sliceのおかげで破壊されない
console.log(arr1); // [1, 2, 3, 4, 5]