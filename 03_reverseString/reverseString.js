function reverseString1(string) {
    let myArray = []

    for (i = 0; i < string.length; i++) {
        myArray.push(string.charAt(i))
    }

    let outputstring = ""
    for (i = 1; i <= string.length; i++) {
        outputstring += myArray[string.length - i]
    }
    console.log(outputstring)
    return outputstring
}

reverseString1("i'm slim shady!")

const reverseString = reverseString1

// Do not edit below this line
module.exports = reverseString;