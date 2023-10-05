// use the var keyword to declare a variable age Set it to 10.
var age=19;
//Add an if statement to check if the ages is >=65. Inside the if block,console.log the sentence;"You get your income from your pension".
//Add an else if to check if the age is <65 and >=18. Inside this else if block,console.log the sentence;"Each month you get a salary".
//Add another else if to check if the age is <18. Inside the else if block,console.log the sentence;"You get an allowance".
//Add an else statement to capture any other value. Inside the block,type console.log the sentence;"The value of the age variable
//is not numerical".
function isAgeQualified(age){
    if ((age>=18)&& (age<65)){
console.log("You get your income from your pension");
    }else if (age=100){
        console.log("You get an allowance");
    }else{ if (age<18)
        console.log("The value of the age variable is not numerical.")
    }
}
isAgeQualified(age);
