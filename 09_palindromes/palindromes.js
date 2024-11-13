const palindromes = function (word) {
    const alphabetical = "abcdefghijklmnopqrstuvwsyz0123456789"
    const clean = word
                .toLowerCase()
                .split('')
                .filter((a) => alphabetical.includes(a))
                .join('');
    const reverse = clean.split('').reverse().join('')
    if(clean === reverse){
        return true
    }
    else{
        return false
    }


    
}

// Do not edit below this line
module.exports = palindromes;
