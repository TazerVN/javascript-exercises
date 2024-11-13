const sumAll = function(first, second){
    let finalValue = 0
    if (Number.isInteger(first) && Number.isInteger(second) && (first > 0 && second > 0)){

        if (first < second){
            for(i = 0; i < second; i++){
                finalValue === second;
                finalValue += first;
                first++
                
            }
        }
        else if (first > second){
            for(i = 0; i < first; i++){
                finalValue === first;
                finalValue += second;
                second++
            }
        }
        return finalValue
    }
    else
    {
        return 'ERROR'
    }
    
}

// Do not edit below this line
module.exports = sumAll;
