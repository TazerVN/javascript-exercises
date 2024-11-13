const removeFromArray = function(numberList = [], ...removeNumbers){
    for (i = 0; i < removeNumbers.length; i++){

    
        numberList.forEach((r) =>{
            if (r === removeNumbers[i]){
                let numberIndex = numberList.indexOf(r, 0);
                numberList.splice(numberIndex, numberList.filter(x =>x==r).length);
            }
            
        })
    }
    return numberList
}

// Do not edit below this line
module.exports = removeFromArray;
