const sumAll = function(min, max) {
    if (min < 0 || max < 0) return 'ERROR';
    if (!Number.isInteger(min) || !Number.isInteger(max)) return 'ERROR';

    if (min > max){
        const temp = min;
        min = max;
        max = temp;
    }

    let total = 0;

    for (i=min; i <= max; i++){
        total += i;
    }


    return total
};

// Do not edit below this line
module.exports = sumAll;
