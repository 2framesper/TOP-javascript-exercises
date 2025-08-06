const leapYears = function(year) {
    const isDivisibleByFour = year % 4 === 0;
    const isDivisibleByCentury = year % 100 === 0;
    const isDivisibleByFourCenturies = year % 400 === 0;
    if (isDivisibleByFour && (!isDivisibleByCentury || isDivisibleByFourCenturies)){
        return true
    } else {
        return false
    }
}
// Do not edit below this line
module.exports = leapYears;
