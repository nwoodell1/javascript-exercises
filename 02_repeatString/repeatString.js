const repeatString = function repeatyboy(word, number) {



    if (number === 0) { return "" }
    if (number < 0) { return "ERROR" }

    return word.repeat(number)

}
// Do not edit below this line
module.exports = repeatString;
