const getAge = function(death, birth){
    if (!death){
        death = new Date().getFullYear()
    }
    return death - birth
}

const findTheOldest = function(people) {
    return people.reduce((personA, personB) => {
        return (getAge(personA.yearOfDeath, personA.yearOfBirth))
         > (getAge(personB.yearOfDeath, personB.yearOfBirth))
        ? personA
        : personB})
}



// Do not edit below this line
module.exports = findTheOldest;
