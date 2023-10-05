//Running for 30 minutes burns 500 calories
//Sam decides to run for 60 minutes (1hour ) everyday in a week.

//Store in a variable named caloriesPerHour the number of calories burned per hour.
let caloriesPerHour = 1000; //running for 60 minutes burns 1000 calories.
//Count the number of times Sam will run a week and store in a variable named numTimeSamRuns
let numTimesSamRuns = 7;

//Store in a variable named runHoursPerDay the number of Hours Sam has decided to run.
let runHoursPerDay = 1;
//Compute the total number of hours of running in a week using numTimeSamRuns and runHoursPerDay
//and store the result in a avariable named totalHoursRunning
let totalHoursRunning = numTimesSamRuns * runHoursPerDay;
//Compute the total calories burned using caloriesPerHour and totalHoursRunning.
let totalCaloriesBurned = caloriesPerHour * totalHoursRunning;
//Display the message using console.log.
console.log(`Great work, Sam! After ${runHoursPerDay} hour/s of running everyday in a week,you lose a total of ${totalCaloriesBurned} calories.`);
//template literals
