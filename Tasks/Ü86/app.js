function toCelcius(fahrenheit) {
    return (5/9) * (fahrenheit-32);
}

function toFahrenheit(celcius) {
    return (9/5) * celcius + 32;
}

module.exports = {
    toCelcius,
    toFahrenheit
};