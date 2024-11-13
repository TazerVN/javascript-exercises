const reverseString = function(word) {
    const myString = word.split('');
    myString.reverse();
    const newString = myString.join('');
    return newString
};

// Do not edit below this line
module.exports = reverseString;
