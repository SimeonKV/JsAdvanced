function solve(arr, startIndex, endIndex) {
    startIndex < 0 ? startIndex = 0 : startIndex;
    endIndex >= arr.length ? endIndex = arr[arr.length - 1] : endIndex;

    if (!Array.isArray(arr)) {
        return NaN;
    }

    const subArray = arr.slice(startIndex, endIndex + 1);
    const result = subArray.map(element => Number(element)).reduce((acc, currValue) => acc + currValue, 0);


    return result;

}


solve([10, 20, 30, 40, 50, 60], 3, 300);
solve([1.1, 2.2, 3.3, 4.4, 5.5], -3, 1);
solve([10, 'twenty', 30, 40], 0, 2);
solve('text', 0, 2);