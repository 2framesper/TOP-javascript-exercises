const removeFromArray = function(arr, ...nums) {
    let newArr = [];
    
    arr.forEach((num) => {
        if (!nums.includes(num)) {
            newArr.push(num);
        }
    })
    return newArr
};

// Do not edit below this line
module.exports = removeFromArray;
