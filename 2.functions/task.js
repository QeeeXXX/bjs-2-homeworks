// TASK FIRST//
function getArrayParams(...arr) {
    if (!arr.length) return {};
    
    const max = Math.max(...arr);
    const min = Math.min(...arr);
    const sum = arr.reduce((acc, cur) => acc + cur, 0);
    const avg = Number((sum / arr.length).toFixed(2));

    return { max, min, avg };
}
