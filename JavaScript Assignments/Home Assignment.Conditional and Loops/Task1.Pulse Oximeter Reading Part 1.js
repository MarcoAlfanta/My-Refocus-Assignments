//Use the keyword to declare a variable oxygen saturation.Set it to 
var oxygen=90
// Add an if statement to check if the Oxygen is >=96.Inside the if block,console.log the sentence:"Normal Reading".
// Add an if statement to check if the Oxygen is 95.Inside the if block,console.log the sentence:"Acceptable to continue home monitoring".
// Add an if statement to check if the Oxygen is 93-94.Inside the if block,console.log the sentence:"Seek advice from health professionals".
// Add an if statement to check if the Oxygen is <=92.Inside the if block,console.log the sentence:"Seek urgent medical advice.".
function OxygenSaturation(oxygen){
    if (oxygen>=96){
        console.log(`${oxygen} SpO2% = Normal Reading`);
    }else if (oxygen==95){
        console.log(`${oxygen} SpO2% = Acceptable to continue gome monitoring`);
    }else if (oxygen==93){
        console.log(`${oxygen} SpO2% = Seek advice from health professionals.`);
    }else if (oxygen==94){
        console.log(`${oxygen} SpO2% = Seek advice from health professionals.`);
    }else if (oxygen<=92){
        console.log(`${oxygen} SpO2% = Seek urgent medical advice.`);
    
    }else{
        console.log("The value of the oxygen is not numerical.")
    }
    }
OxygenSaturation(oxygen);
