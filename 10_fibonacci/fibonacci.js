const fibonacci = function(member) {
   const container = [1, 1]
   if(member == 0){
    return 0
   }

   else if(member < 0){
    return "OOPS"
   }

   else{
    for (i = 2; i < member; i++){
        const current = container[i-1] + container[i-2]
        container.push(current)
   }
   }

   return container[Number(member) - 1]

};

// Do not edit below this line
module.exports = fibonacci;
