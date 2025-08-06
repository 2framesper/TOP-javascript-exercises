const repeatString = function(string, num) {
    let newString = '';
    for (i=0; i<num; i++) {
        newString += string;
    }

    if (num < 0) {
        return "ERROR";
    }
    return newString
};

console.log(repeatString('hey', 3));

// Do not edit below this line
module.exports = repeatString;
