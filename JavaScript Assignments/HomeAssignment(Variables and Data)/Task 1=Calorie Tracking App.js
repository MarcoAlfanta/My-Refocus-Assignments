//Cycling for 30 minutes burns 225 calories 
//Sam decides to do cycling 30minutes (0.5 hour) everyday for 15 days.

//Store in a variable named caloriesPerHour the number of calories burned per hour
let caloriesPerHour = 450; //cycling for 60 minutes.
//Count the number of times Sam will cycle a 15 days and store in a variable named numTimesSamCycle
let numTimesSamCycle = 15;

//Store in a variable named cycleHourPerDay the number of Hours Sam has decided to cycle.
let cycleHourPerDay = 0.5;
//Compute the total number of hours of cycling in a week using numTimesSamCycle and cycleHoursPerDay
//and store the result in a variable named total Hours Cycling
let totalHoursCycling = numTimesSamCycle * cycleHourPerDay;
//Compute the total calories burned using caloriesPerHour and totalHoursCycling.
let totalCaloriesBurned = caloriesPerHour * totalHoursCycling;
//Display the message using console.log.
console.log(`Great work,Sam! After ${cycleHourPerDay} hour/s of cycling everyday for a week, you may lose a total of ${totalCaloriesBurned} calories.`);
//template literals

