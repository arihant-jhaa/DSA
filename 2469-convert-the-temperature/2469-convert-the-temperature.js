/**
 * @param {number} celsius
 * @return {number[]}
 */
var convertTemperature = function(Celsius) {
    let Kelvin = Celsius + 273.15;
    let Fahrenheit = Celsius * 1.80 + 32.00;
    let res = [Kelvin,Fahrenheit];
    return res;
};