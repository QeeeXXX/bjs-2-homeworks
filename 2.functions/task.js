// TASK FIRST//
function getArrayParams(...arr) {
    if (!arr.length) return {};
    
    const max = Math.max(...arr);
    const min = Math.min(...arr);
    const sum = arr.reduce((acc, cur) => acc + cur, 0);
    const avg = Number((sum / arr.length).toFixed(2));

    return { max, min, avg };
}
// Примеры вызова функций//
console.log(getArrayParams(-99, 99, 10));   // { min: -99, max: 99, avg: 3.33 }
console.log(getArrayParams(1, 2, 3, -100, 10));  // { min: -100, max: 10, avg: -16.8 }
console.log(getArrayParams(5));  // { min: 5, max: 5, avg: 5 }
