// Used the var keyword to declare a variable Pulse Rare,beats per minute.Set it to.
var PulseRate=150;
//Add an if statement to check if the pulse rate,beats per minute 40-100"Normal Reading"
//Add an if statement to check if the pulse rate,beats per miniute 101-109"Acceptable to continue home monitoring"
//Add an if statement to check if the pulse rate,beats per minute  110-130"Seek Advice from health professionals."
//Add an if statement to check if the pulse rate,beats per minute >=131 "Seek urgent medical advice"
function PulseRatebeatsperminute(PulseRate){
    if ((PulseRate>=40)&& (PulseRate<=100)){
        console.log(`${PulseRate} beatsperminute = Normal Reading`);
    }else if ((PulseRate>=101)&& (PulseRate<=109)){
        console.log(`${PulseRate} beatsperminute = Acceptable to continue home monitoring.`)
    }else if ((PulseRate>=110)&& (PulseRate<=130)){
        console.log(`${PulseRate} beatsperminute = Seek advice from health professional.`)
    }else if (PulseRate>=131){
        console.log(`${PulseRate} beatsperminute = Seek urgent medical advice.`)
    }else{
        console.log(`${PulseRate} beatsperminute = The value of the PulseRate variable is not numerical`)
    }
}
PulseRatebeatsperminute(PulseRate);