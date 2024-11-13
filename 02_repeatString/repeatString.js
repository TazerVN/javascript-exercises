const repeatString = function(text, countNumber) {
    let totalText = "";
    if (countNumber < 0){
        return 'ERROR'
    }
    else {
    for (let i = 0; i < countNumber; i++){
        totalText += text
    }}
    return totalText
};

// Do not edit below this line
module.exports = repeatString;
