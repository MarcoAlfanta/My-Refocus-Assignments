//Each number from 1 to 100 needs to be checked, and the remainders of both N/3 and N/5 should be compared.
//Let countMultiples=0
//Using for loop,scan through numbers from 1 to 100.
//Check if the number is divisible by 3 using modulo (N%3===0)
//Check if the number is divisible by 5 using modulo (N%5===0)
//Make sure both of the conditions are satisfied,increment countMultiples by 1.
//Console.log the countMultiples.
let start=1;
let end=100;
function countMultiplesBetween (start,end){
    let countMultiples=0; //Keep track of the number of values that are divisible by 3 and 5 
    for (let i=start/*initialization*/;i<=end/**conditional */;i++/**update */){
        if(((i % 3)===0)&&(i % 5)===0){
            countMultiples=countMultiples+1;
        }           
    }
console.log(`The number of values that are divisible by 3 and 5 is ${countMultiples}.`)
}
countMultiplesBetween(1,100)