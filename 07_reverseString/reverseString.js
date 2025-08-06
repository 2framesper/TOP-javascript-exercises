const reverseString = function(str) {
    arr = str.split('');
    let newArr=[];
    for (let i = 0; i < arr.length; i++) {
        newArr[i] = arr[arr.length-i-1]
    }
    return str = newArr.join('')
};

// Do not edit below this line
module.exports = reverseString;
